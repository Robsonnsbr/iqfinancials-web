import ContentContainer from "@components/common/containers/ContentContainer";
import SvgLine from "@components/common/svgs/SvgLine";

export default function Insights() {
  return (
    <ContentContainer className="flex flex-col py-12 overflow-hidden  3xl:scale-105">
      <SvgLine />
      <div className="flex flex-wrap text-white marker:text-red">
        <div className="self-center lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <h3 className="uppercase break-words font-poppins font-extrabold text-3xl text-center text-blue">
            Insights Estratégicos e Personalizados
          </h3>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-blue shadow-lg w-full rounded-md">
            <h2 className="text-xl font-semibold mb-6">Público de Interesse</h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">Acadêmicos</li>
              <li className="mb-4">
                Professores de Finanças, Contabilidade, Economia e outras áreas
              </li>
              <li className="mb-4">Gestores de Ativos</li>
              <li className="mb-4">Empresas</li>
              <li className="mb-4">Consultorias e Auditorias</li>
              <li className="mb-4">Investidores</li>
            </ul>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-blue rounded-md shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-6">Facilidades</h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Dados disponíveis em formatos como Excel, DTA e Python.
              </li>
              <li className="mb-4">
                Coleta de dados realizada em até 3 dias úteis &#40;dependendo
                complexidade das variáveis&#41;.
              </li>
              <li className="mb-4">
                Dados prontos para análises em painel no formato long
                &#40;Empresa/Ano&#41; com todas as variáveis necessárias.
              </li>
              <li className="mb-4">
                Organização personalizada: por setor, país, tamanho ou outros
                critérios comparativos.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full lg:w-1/2 xl:w-1/4 py-4 lg:px-2">
          <div className="text-center p-6 bg-blue rounded-md shadow-lg w-full">
            <h2 className="text-xl font-semibold mb-6">Confiabilidade</h2>
            <ul className="text-left mt-4 ml-4 list-disc">
              <li className="mb-4">
                Dados atualizados e verificáveis de uma ampla gama de empresas.
              </li>
              <li className="mb-4">
                Integração com Demonstrações Financeiras, espelhando métodos de
                coleta e cálculo.
              </li>
              <li className="mb-4">
                Base integrada com fontes confiáveis, como Thompson Reuters,
                Standard & Poor&amp;s, entre outras.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
