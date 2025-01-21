import ContentContainer from "@components/common/containers/ContentContainer";
import SvgLine from "@components/common/svgs/SvgLine";

export default function Instructions() {
  return (
    <ContentContainer className="flex flex-col py-12 overflow-hidden 3xl:scale-105">
      <SvgLine align="right" />
      <div className="flex flex-wrap text-white marker:text-red">
        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">Campos do formulário</h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Por gentileza, preencher todos os campos com o máximo de
                detalhamento
              </li>
              <li className="mb-4">
                Caso não queira adicionar maiores detalhes nos campos, favor
                preencher com N/A
              </li>
              <li className="mb-4">
                O campo &quot;Tipo&quot; se refere ao tipo de dado ou
                tratamento. A opção &quot;Outros&quot; permite a inclusão de
                dados específicos, que serão analisados e podem ser aceitos,
                ajustados ou rejeitados.
              </li>
            </ul>
          </div>
        </div>

        {/* Instructions for Form Use */}
        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">
              Instruções para o formulário
            </h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                A inclusão de várias variáveis é permitida, sendo que cada uma
                será avaliada e precificada conforme sua complexidade.
              </li>
              <li className="mb-4">
                É possível incluir diversas variáveis, mas pedimos que separe
                entre as principais e as secundárias para melhor alinhamento do
                orçamento
              </li>
              <li className="mb-4">
                Cada variável pode ser coletada em diversas regiões, conforme os
                requisitos da pesquisa.
              </li>
            </ul>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">Custo e Tempo</h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                A precificação inicial é baseada no número de variáveis, com
                ajustes possíveis dependendo do tipo de tratamento.
              </li>
              <li className="mb-4">
                A opção de <span className="text-red">urgência</span> no
                formulário pode impactar no custo final da pesquisa.
              </li>
              <li className="mb-4">
                O prazo máximo para retorno é de até 1 dia útil, quando a
                precificação completa será fornecida.
              </li>
              <li className="mb-4">
                Em caso de dúvidas, nossa equipe de consultores está à
                disposição para ajudar.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2 order-first xl:order-none">
          <h2 className="uppercase self-center font-poppins font-extrabold text-3xl text-center text-blue">
            Guia de Preenchimento do Formulário
          </h2>
        </div>
      </div>
    </ContentContainer>
  );
}
