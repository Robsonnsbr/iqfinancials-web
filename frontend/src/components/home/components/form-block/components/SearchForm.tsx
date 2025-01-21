// SearchForm.tsx
"use client";

import Image from "next/image";
import { logoIQNameblue } from "@public/logos";

import { useState } from "react";
import { useSearchForm } from "@hooks/useSearchForm";
import { listDataType, listFrequency } from "@data/index";

import Input from "./Input";
import Label from "./Label";
import Select from "./Select";
import TextArea from "./TextArea";
import Button from "./button";
import Modal from "@components/common/modal";

import { RiAddBoxFill } from "react-icons/ri";
import { BsTrash3Fill } from "react-icons/bs";
import { PiMinusFill } from "react-icons/pi";
import { GrClearOption } from "react-icons/gr";
import { MdError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

import { sendTestEmail } from "src/test/testSendEmail";

export default function SearchForm() {
  const {
    formData,
    sortedListCountries,
    sortedListPurpose,
    isSubmitting,
    openModal,
    setOpenModal,
    emailSentError,
    handleChange,
    handleAddVariable,
    handleAddRegion,
    handleRemoveRegion,
    handleRemoveVariable,
    handleSubmit,
    resetFormData,
  } = useSearchForm();

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal
        onClose={() => setOpenModal(false)}
        isOpen={openModal || isSubmitting}
        type="alert"
        title={
          isSubmitting
            ? "Enviando Dados"
            : emailSentError.error
            ? "Erro"
            : "Sucesso"
        }
        message={
          isSubmitting ? (
            <span className="text-blue">
              Por favor, aguarde enquanto os dados estão sendo enviados...
            </span>
          ) : emailSentError.error ? (
            <span className="flex  items-center justify-center gap-2 text-red">
              <MdError className="min-w-5 size-5" />
              <span>{emailSentError.msg}</span>
            </span>
          ) : (
            <>
              <span className="flex items-center justify-center gap-2 ">
                <FaCheckCircle className="min-w-5 size-5 text-success" />{" "}
                Mensagem enviada com sucesso!
              </span>
              <span className="flex items-center justify-center mt-2">
                Solicitamos um prazo de até 3 dias úteis para fornecer uma
                resposta. Para dúvidas ou questões urgentes, envie uma mensagem
                para o WhatsApp: (41)99539-8003.
              </span>
            </>
          )
        }
      />
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col font-medium gap-4 p-4 rounded-md w-full bg-background-form bg-contain m-2 shadow-md font-raleway"
      >
        <Image
          alt="logo iq financials blue"
          src={logoIQNameblue}
          height={100}
          width={100}
          className="absolute right-1/2 translate-x-1/2 sm:translate-x-0 sm:right-4 top-4 h-auto w-auto"
        />

        <h3 className="w-full text-center font-semibold sm:text-lg pt-9 sm:pt-0 ">
          FORMULÁRIO PARA PESQUISA DE DADOS
        </h3>

        <div className="flex flex-wrap gap-4 bg-cyan-700/20 p-3 rounded-md">
          <Label className="flex flex-col">
            Nome completo
            <Input
              id="nome-completo"
              name="nomeCompleto"
              type="text"
              placeholder="Ex: Ricardo Oliveira"
              value={formData.nomeCompleto}
              onChange={handleChange}
            />
          </Label>

          <Label className="flex flex-col">
            Whatsapp / Email
            <Input
              id="whatsapp-email"
              name="whatsappEmail"
              placeholder="Ex: &#40;41&#41;98000-0000"
              type="text"
              value={formData.whatsappEmail}
              onChange={handleChange}
            />
          </Label>

          <Label className="flex flex-col">
            Instituição
            <Input
              id="instituicao"
              name="instituicao"
              placeholder="Ex: USP"
              type="text"
              value={formData.instituicao}
              onChange={handleChange}
            />
          </Label>

          <Label className="flex flex-col">
            Finalidade
            <Select
              id="finalidade"
              name="finalidade"
              options={sortedListPurpose}
              value={formData.finalidade}
              onChange={handleChange}
            />
          </Label>
        </div>

        <div className="flex flex-col gap-4">
          {formData.mainValues.map((variable, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between p-3 bg-white/20 gap-2 border-2 border-green rounded-md"
            >
              <Label className="flex flex-col">
                Nome da variável
                <Input
                  id="variavel"
                  name="variavel"
                  placeholder="Ex: Receita anual de empresas aberta na bolsa"
                  type="text"
                  value={variable.variavel}
                  onChange={(e) => handleChange(e, "mainValues", index)}
                />
              </Label>

              <div className="flex flex-col">
                <span className="text-center">Horizonte temporal</span>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex flex-wrap gap-2">
                    <Label className="flex flex-col">
                      <Input
                        id="data-inicio"
                        name="dataInicio"
                        type="date"
                        value={variable.dataInicio}
                        onChange={(e) => handleChange(e, "mainValues", index)}
                      />
                      Data base
                    </Label>
                    <Label className="flex flex-col">
                      <Input
                        type="date"
                        id="data-fim"
                        name="dataFim"
                        value={variable.dataFim}
                        onChange={(e) => handleChange(e, "mainValues", index)}
                      />
                      Data fim
                    </Label>
                  </div>
                  <Label className="flex flex-col">
                    <Select
                      id="frequencia"
                      name="frequencia"
                      value={variable.frequencia}
                      options={listFrequency}
                      onChange={(e) => handleChange(e, "mainValues", index)}
                    />
                    <span className="order-first sm:order-none">
                      Frequência
                    </span>
                  </Label>
                </div>
              </div>

              <Label className="flex flex-col">
                Região
                {variable.regioes.map((regiao, regionIndex) => (
                  <div key={regionIndex} className="flex mb-2 items-center">
                    <Select
                      id="regiao"
                      name="regiao"
                      value={regiao}
                      options={sortedListCountries}
                      onChange={(e) =>
                        handleChange(e, "mainValues", index, regionIndex)
                      }
                    />
                    <Button
                      type="button"
                      id="remove-region-button"
                      title="remover região"
                      aria-label="remove region button"
                      className="text-xs py-1 px-2 m-1"
                      onClick={() =>
                        handleRemoveRegion("mainValues", index, regionIndex)
                      }
                    >
                      <PiMinusFill className="size-5" />
                    </Button>
                  </div>
                ))}
                <Button
                  className="self-end m-1"
                  type="button"
                  id="add-region-button"
                  title="adicionar região"
                  aria-label="add region button"
                  onClick={() => handleAddRegion("mainValues", index)}
                >
                  <RiAddBoxFill className="size-5" />
                </Button>
              </Label>

              <Label className="flex flex-col">
                Justificativa da variável
                <TextArea
                  id="justificativa"
                  name="justificativa"
                  placeholder="observações ou detalhes da variável"
                  value={variable.justificativa}
                  onChange={(e) => handleChange(e, "mainValues", index)}
                />
              </Label>

              <Button
                type="button"
                id="remove-value-button"
                title="remover região"
                aria-label="remove value button"
                className="self-end md:self-auto mt-2"
                onClick={() => handleRemoveVariable("mainValues", index)}
              >
                <BsTrash3Fill className="size-5" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            id="add-value-button"
            title="adicionar variável"
            aria-label="add value button"
            className="w-fit self-end"
            onClick={() => handleAddVariable("mainValues")}
          >
            <RiAddBoxFill className="size-5" />
            Variável Principal
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {formData.secondaryValues.map((variable, index) => (
            <div
              key={index}
              className="flex flex-wrap justify-between p-3 bg-white/20 border-2 border-blue rounded-md"
            >
              <Label className="flex flex-col">
                Nome da variável
                <Input
                  id="variavel"
                  name="variavel"
                  type="text"
                  value={variable.variavel}
                  onChange={(e) => handleChange(e, "secondaryValues", index)}
                />
              </Label>

              <div className="flex flex-col">
                <span className="text-center">Horizonte temporal</span>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Label className="flex flex-col">
                    <Input
                      id="data-inicio"
                      name="dataInicio"
                      type="date"
                      value={variable.dataInicio}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index)
                      }
                    />
                    Data base
                  </Label>
                  <Label className="flex flex-col">
                    <Input
                      type="date"
                      id="data-fim"
                      name="dataFim"
                      value={variable.dataFim}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index)
                      }
                    />
                    Data fim
                  </Label>
                  <Label className="flex flex-col">
                    <Select
                      id="frequencia"
                      name="frequencia"
                      value={variable.frequencia}
                      options={listFrequency}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index)
                      }
                    />
                    Frequência
                  </Label>
                </div>
              </div>
              {/* TODO: remove focus this element */}
              <Label className="flex flex-col">
                Região
                {variable.regioes.map((regiao, regionIndex) => (
                  <div key={regionIndex} className="flex mb-2 items-center">
                    <Select
                      id="regiao"
                      name="regiao"
                      value={regiao}
                      options={sortedListCountries}
                      onChange={(e) =>
                        handleChange(e, "secondaryValues", index, regionIndex)
                      }
                    />
                    <Button
                      type="button"
                      id="remove-region-button-2"
                      title="remover região"
                      aria-label="remove region button"
                      className="text-xs py-1 px-2 m-1"
                      onClick={() =>
                        handleRemoveRegion(
                          "secondaryValues",
                          index,
                          regionIndex
                        )
                      }
                    >
                      <PiMinusFill className="size-5" />
                    </Button>
                  </div>
                ))}
                <Button
                  className="self-end m-1"
                  type="button"
                  id="add-region-button-2"
                  title="adicionar região"
                  aria-label="add region button"
                  onClick={() => handleAddRegion("secondaryValues", index)}
                >
                  <RiAddBoxFill className="size-5" />
                </Button>
              </Label>

              <Label className="flex flex-col">
                Obs: variável
                <TextArea
                  id="justificativa"
                  name="justificativa"
                  value={variable.justificativa}
                  onChange={(e) => handleChange(e, "secondaryValues", index)}
                />
              </Label>

              <Button
                type="button"
                id="remove-value-button-2"
                title="remover variável"
                aria-label="remove value button"
                className="self-end md:self-auto"
                onClick={() => handleRemoveVariable("secondaryValues", index)}
              >
                <BsTrash3Fill className="size-5" />
              </Button>
            </div>
          ))}
          <Button
            type="button"
            id="add-value-button-2"
            title="adicionar variável"
            aria-label="add value button"
            className="w-fit self-end"
            onClick={() => handleAddVariable("secondaryValues")}
          >
            <RiAddBoxFill className="size-5" />
            Variável Secundária ou de controle
          </Button>
        </div>

        <Label className="flex flex-col">
          Observações gerais
          <TextArea
            id="obs-geral"
            name="obsGeral"
            placeholder="Ex: preciso que todas as empresas sejam abertas na bolsa e com mais de 100 milhões de receita líquida anual"
            value={formData.obsGeral}
            onChange={handleChange}
          />
        </Label>

        <div className="flex flex-wrap w-full  gap-2 items-center justify-between">
          <Button
            type="button"
            id="clear-form-button"
            aria-label="clear form button"
            className="py-2 px-4"
            title="Limpar Formulário"
            onClick={() => setModalOpen(true)}
          >
            <GrClearOption className="size-5" />
          </Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            type="confirm"
            title="Confirmação"
            message="Deseja realmente limpar o formulário?"
            onConfirm={() => {
              resetFormData();
              setModalOpen(false);
            }}
          />
          <div className="contents sm:flex gap-2">
            <Label className="flex flex-wrap items-center gap-2">
              Tipo
              <Select
                id="dataType"
                name="dataType"
                options={listDataType}
                value={formData.dataType}
                onChange={handleChange}
              />
              {formData.dataType === "Outros" && (
                <Input
                  required={true}
                  type="text"
                  id="customDataType"
                  name="customDataType"
                  value={formData.customDataType}
                  onChange={handleChange}
                />
              )}
            </Label>

            <Label
              title="marcar como urgente"
              className="uppercase hover:bg-black/60 border-2 border-transparent active:border-red flex items-center gap-2 text-red font-semibold bg-black/50 p-2 rounded-md cursor-pointer select-none"
            >
              urgente
              <Input
                required={false}
                type="checkbox"
                id="urgente"
                name="urgente"
                className="cursor-pointer size-4"
                checked={formData.urgente}
                onChange={(e) => handleChange(e)}
              />
            </Label>

            <Button
              type="submit"
              className="py-2 px-4"
              id="submit-form-button"
              title="Enviar formulário"
              aria-label="submit form button"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
            {process.env.NODE_ENV === "development" && (
              <button
                className="bg-red w-fit h-fit self-center"
                onClick={async () => {
                  const result = await sendTestEmail();
                  if (result.success) {
                    alert(result.message);
                  } else {
                    alert(result.message);
                  }
                }}
              >
                TEST
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
}
