import { useState, useMemo, useEffect } from "react";

// import ReactDOMServer from "react-dom/server";
import { validateRecaptcha } from "@services/validateRecaptcha";

// import { EmailTemplate } from "@components/common/email-templates/EmailTemplate";
import { FormData, Section } from "src/types/formType";
import { listCountries, listPurpose } from "@data/index";

export function useSearchForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [emailSentError, setEmailSentError] = useState<{
    error: boolean;
    msg?: string;
  }>({ error: false });
  const [openModal, setOpenModal] = useState<boolean>(false);

  // Memorizar listas ordenadas para evitar reprocessamento em cada renderização
  const sortedListCountries = useMemo(
    () => Array.from(new Set(listCountries)).sort((a, b) => a.localeCompare(b)),
    []
  );

  const sortedListPurpose = useMemo(
    () => [...listPurpose].sort((a, b) => a.localeCompare(b)),
    []
  );

  const [formData, setFormData] = useState<FormData>({
    nomeCompleto: "",
    obsGeral: "",
    whatsappEmail: "",
    instituicao: "",
    finalidade: "",
    dataType: "",
    customDataType: "",
    urgente: false,
    mainValues: [
      {
        variavel: "",
        dataInicio: "",
        dataFim: "",
        regioes: [""],
        justificativa: "",
        frequencia: "",
      },
    ],
    secondaryValues: [],
  });

  //Salva os dados no localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Carregar os dados do localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Erro ao parsear os dados do localStorage:", error);
      }
    }
  }, []);

  const updateSection = (
    section: Section,
    index: number,
    updatedItem: Partial<(typeof formData)[Section][number]>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item, idx) =>
        idx === index ? { ...item, ...updatedItem } : item
      ),
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    section?: Section,
    index?: number,
    regionIndex?: number
  ) => {
    const { name, value, type } = event.target;
    const isCheckbox =
      event.target instanceof HTMLInputElement && type === "checkbox";

    setFormData((prevData) => {
      if (section && index !== undefined) {
        if (name === "regiao" && regionIndex !== undefined) {
          return {
            ...prevData,
            [section]: prevData[section].map((item, idx) =>
              idx === index
                ? {
                    ...item,
                    regioes: item.regioes.map((regiao, rIdx) =>
                      rIdx === regionIndex ? value : regiao
                    ),
                  }
                : item
            ),
          };
        }

        return {
          ...prevData,
          [section]: prevData[section].map((item, idx) =>
            idx === index
              ? {
                  ...item,
                  [name]: isCheckbox
                    ? (event.target as HTMLInputElement).checked
                    : value,
                }
              : item
          ),
        };
      }

      return {
        ...prevData,
        [name]: isCheckbox ? (event.target as HTMLInputElement).checked : value,
      };
    });
  };

  const handleAddVariable = (section: Section) => {
    const newVariable = {
      variavel: "",
      dataInicio: "",
      dataFim: "",
      regioes: [""],
      justificativa: "",
      frequencia: "",
    };

    setFormData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], newVariable],
    }));
  };

  const handleAddRegion = (section: Section, index: number) => {
    updateSection(section, index, {
      regioes: [...formData[section][index].regioes, ""],
    });
  };

  const handleRemoveRegion = (
    section: Section,
    index: number,
    regionIndex: number
  ) => {
    updateSection(section, index, {
      regioes: formData[section][index].regioes.filter(
        (_, rIdx) => rIdx !== regionIndex
      ),
    });
  };

  const handleRemoveVariable = (section: Section, index: number) => {
    setFormData((prevData) => {
      if (section === "mainValues" && prevData["mainValues"].length <= 1) {
        return prevData;
      }

      return {
        ...prevData,
        [section]: prevData[section].filter((_, idx) => idx !== index),
      };
    });
  };

  const resetFormData = () => {
    setFormData({
      nomeCompleto: "",
      obsGeral: "",
      whatsappEmail: "",
      instituicao: "",
      finalidade: "",
      dataType: "",
      customDataType: "",
      urgente: false,
      mainValues: [
        {
          variavel: "",
          dataInicio: "",
          dataFim: "",
          regioes: [""],
          justificativa: "",
          frequencia: "",
        },
      ],
      secondaryValues: [],
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setOpenModal(true);

    try {
      const isValid = await validateRecaptcha();
      if (!isValid) {
        setEmailSentError({
          error: true,
          msg: "Falha na validação do reCAPTCHA.",
        });
        return;
      }

      // Envia o formData diretamente para o backend
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          subject: "Pesquisa",
        }),
      });

      if (res.ok) {
        setEmailSentError({ error: false });
      } else {
        setEmailSentError({ error: true, msg: "Falha ao enviar o email!" });
      }

      resetFormData();
    } catch (error: unknown) {
      setEmailSentError({
        error: true,
        msg: `Ocorreu um erro inesperado. Por favor, entre em contato 
        com nosso suporte pelo e-mail: financialsiq@gmail.com`,
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    sortedListCountries,
    sortedListPurpose,
    isSubmitting,
    openModal,
    emailSentError,
    setOpenModal,
    handleChange,
    handleAddVariable,
    handleAddRegion,
    handleRemoveRegion,
    handleRemoveVariable,
    handleSubmit,
    resetFormData,
  };
}
