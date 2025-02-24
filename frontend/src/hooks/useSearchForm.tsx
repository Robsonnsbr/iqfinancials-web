import { useState, useMemo, useEffect } from "react";
import { validateRecaptcha } from "@services/validateRecaptcha";
import { FormData, Section, Variavel } from "src/types/formType";
import { listCountries, listPurpose } from "@data/index";

export function useSearchForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSentError, setEmailSentError] = useState<{
    error: boolean;
    msg?: string;
  }>({ error: false });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const sortedListCountries = useMemo(() => {
    return [
      ...new Set(listCountries.filter((country) => country !== "Outros")),
      "Outros",
    ];
  }, []);

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
    customPurpose: "",
    dataType: "",
    customDataType: "",
    urgente: false,
    mainValues: [
      {
        currencyOrUnit: "",
        //TODO: outrosRegiao não está sendo salvo no localStorage, porém o valor selecionado em região e salvo só não parece depois do F5
        outrosRegiao: "",
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

  // useEffect para carregar os dados do localStorage no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("formData");
      if (savedData) {
        try {
          const parsedData = JSON.parse(savedData);
          setFormData(parsedData);
        } catch (error) {
          console.error("Erro ao parsear os dados do localStorage:", error);
        }
      }
    }
  }, []);

  // useEffect para salvar os dados no localStorage quando o formData muda
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  }, [formData]);

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

  const prepareDataForSubmission = (data: FormData): FormData => {
    const processSection = (section: Section) => {
      return data[section].map((item: Variavel) => ({
        ...item,
        regioes: item.regioes.map((regiao: string) =>
          regiao === "Outros" && item.outrosRegiao ? item.outrosRegiao : regiao
        ),
      }));
    };

    return {
      ...data,
      mainValues: processSection("mainValues"),
      secondaryValues: processSection("secondaryValues"),
    };
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
        // Atualiza campos dentro de uma seção específica
        if (name === "regiao" && regionIndex !== undefined) {
          // Se "Outros" for selecionado, preserva o valor customizado
          if (value === "Outros") {
            return {
              ...prevData,
              [section]: prevData[section].map((item, idx) =>
                idx === index
                  ? {
                      ...item,
                      regioes: item.regioes.map((regiao, rIdx) =>
                        rIdx === regionIndex ? "Outros" : regiao
                      ),
                    }
                  : item
              ),
            };
          }

          // Atualiza a lista de regiões
          const updatedRegioes = prevData[section][index].regioes.map(
            (regiao, rIdx) => (rIdx === regionIndex ? value : regiao)
          );

          return {
            ...prevData,
            [section]: prevData[section].map((item, idx) =>
              idx === index ? { ...item, regioes: updatedRegioes } : item
            ),
          };
        }

        if (name === "outrosRegiao" && regionIndex !== undefined) {
          // Atualiza o campo personalizado de "Outros"
          return {
            ...prevData,
            [section]: prevData[section].map((item, idx) =>
              idx === index
                ? {
                    ...item,
                    regioes: item.regioes.map((regiao, rIdx) =>
                      rIdx === regionIndex ? "Outros" : regiao
                    ),
                    outrosRegiao: value, // Define o valor personalizado
                  }
                : item
            ),
          };
        }

        // Atualiza outros campos dentro da seção
        return {
          ...prevData,
          [section]: prevData[section].map((item, idx) =>
            idx === index ? { ...item, [name]: value } : item
          ),
        };
      }

      // Atualiza campos fora de seções específicas
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
    if (section === "mainValues" && formData["mainValues"].length <= 1) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((_, idx) => idx !== index),
    }));
  };

  const resetFormData = () => {
    setFormData({
      nomeCompleto: "",
      obsGeral: "",
      whatsappEmail: "",
      instituicao: "",
      finalidade: "",
      customPurpose: "",
      dataType: "",
      customDataType: "",
      urgente: false,
      mainValues: [
        {
          currencyOrUnit: "",
          outrosRegiao: "",
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

  const validateForm = () => {
    // Implementar validações adicionais se necessário, por exemplo, campos obrigatórios
    if (!formData.nomeCompleto || !formData.whatsappEmail) {
      return "Campos obrigatórios não preenchidos!";
    }
    return null;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setOpenModal(true);

    const preparedData: FormData = prepareDataForSubmission(formData);

    const validationError = validateForm();
    if (validationError) {
      setEmailSentError({ error: true, msg: validationError });
      setIsSubmitting(false);
      return;
    }

    try {
      const isValid = await validateRecaptcha();
      if (!isValid) {
        setEmailSentError({
          error: true,
          msg: "Falha na validação do reCAPTCHA!",
        });
        setIsSubmitting(false);
        return;
      }
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData: preparedData, subject: "Pesquisa" }),
      });

      if (res.ok) {
        setEmailSentError({ error: false });
      } else {
        setEmailSentError({ error: true, msg: "Falha ao enviar o email!" });
      }
      // resetFormData();
    } catch (error) {
      setEmailSentError({
        error: true,
        msg: `Ocorreu um erro inesperado. Por favor, entre em contato com nosso suporte pelo e-mail: financialsiq@gmail.com`,
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
