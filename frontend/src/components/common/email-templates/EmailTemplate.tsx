import * as React from "react";
import { FormData, Variavel } from "src/types/formType";

type EmailTemplateProps = {
  formData: FormData;
};

export const EmailTemplate = ({ formData }: Readonly<EmailTemplateProps>) => {
  const {
    nomeCompleto,
    whatsappEmail,
    instituicao,
    finalidade,
    dataType,
    customDataType,
    obsGeral,
    urgente,
    mainValues,
    secondaryValues,
  } = formData;

  const tableStyles = "border border-black px-4 py-2 text-center";
  const rowStyles = "border border-black px-4 py-2";

  const renderVariaveis = (variaveis: Variavel[]) => {
    return (
      <table className="w-full border-collapse mb-6 text-black">
        <thead>
          <tr>
            <th className={tableStyles}>Variável</th>
            <th className={tableStyles}>Data de Início</th>
            <th className={tableStyles}>Data de Fim</th>
            <th className={tableStyles}>Regiões</th>
            <th className={tableStyles}>Frequência</th>
            <th className={tableStyles}>Justificativa</th>
          </tr>
        </thead>
        <tbody>
          {variaveis.map((variavel, index) => (
            <tr key={index}>
              <td className={rowStyles}>{variavel.variavel}</td>
              <td className={rowStyles}>{variavel.dataInicio}</td>
              <td className={rowStyles}>{variavel.dataFim}</td>
              <td className={rowStyles}>{variavel.regioes.join(", ")}</td>
              <td className={rowStyles}>{variavel.frequencia}</td>
              <td className={rowStyles}>{variavel.justificativa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Informações do Formulário</h1>
      <table className="w-full border-collapse mb-6 text-black">
        <tbody>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Nome Completo:</td>
            <td className={rowStyles}>{nomeCompleto}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>WhatsApp/Email:</td>
            <td className={rowStyles}>{whatsappEmail}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Instituição:</td>
            <td className={rowStyles}>{instituicao}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Finalidade:</td>
            <td className={rowStyles}>{finalidade}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>
              Observações Gerais:
            </td>
            <td className={rowStyles}>{obsGeral}</td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Tipo dos dados:</td>
            <td className={rowStyles}>
              {dataType.toLowerCase() !== "outros" ? dataType : customDataType}
            </td>
          </tr>
          <tr>
            <td className={`${rowStyles} font-semibold`}>Urgente:</td>
            <td className={rowStyles}>{urgente ? "Sim" : "Não"}</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-xl font-semibold mb-4">Principais Variáveis</h2>
      {renderVariaveis(mainValues)}

      {secondaryValues.length > 0 && (
        <>
          <h2 className="text-xl font-semibold mb-4">Variáveis Secundárias</h2>
          {renderVariaveis(secondaryValues)}
        </>
      )}
    </div>
  );
};
