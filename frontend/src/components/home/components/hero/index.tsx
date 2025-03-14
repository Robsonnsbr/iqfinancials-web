import ContentContainer from "@components/common/containers/ContentContainer";

import Image from "next/image";
import { logoIQWithName } from "@public/logos/index";

import { IoMdArrowRoundForward } from "react-icons/io";

export default function Hero() {
  return (
    <ContentContainer className="h-full flex flex-col">
      <div className="flex flex-col space-y-8 text-white font-poppins !text-center text-balance m-auto">
        <h1 className="font-extrabold leading-none uppercase">
          <span className="font-raleway flex items-center justify-center">
            <span className="sr-only">iq financials</span>
            <Image
              alt="logo iq financials"
              src={logoIQWithName}
              width={650}
              height={125}
              loading="eager"
              style={{ height: "auto", width: "auto" }}
              className="sm:pt-20"
              placeholder="blur"
              priority={process.env.NODE_ENV === "production"}
            />
          </span>
          <span className="text-3xl border-t-2 border-red">
            Dados Econômicos, Financeiros e Contábeis
          </span>
        </h1>
        <h2 className="text-2xl font-bold leading-snug">
          Precisando de ajuda com seus dados econômico-financeiros e contábeis?
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-start text-lg text-white leading-relaxed text-justify py-10">
        <ul className="list-none flex-1 min-w-[300px] max-w-[500px] text-xl w-6 space-y-4">
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Ajudamos na coleta de dados para estudos acadêmicos, análises
            financeiras e projetos profissionais.
          </li>
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Dados financeiros abrangentes de mais de 200 mil empresas públicas e
            privadas, incluindo balanços patrimoniais, demonstrações de
            resultados, fluxos de caixa e indicadores financeiros.
          </li>
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Mais de 70 mil transações detalhadas, abrangendo mais de 150 países.
          </li>
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Análises aprofundadas de setores e indústrias.
          </li>
        </ul>

        <ul className="list-none flex-1 min-w-[300px] max-w-[500px] space-y-4">
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Ferramentas para análise de empresas comparáveis e projeções
            financeiras.
          </li>
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Dados abrangentes de mercados financeiros globais, como títulos de
            dívida, commodities e derivativos.
          </li>
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Integração com softwares como Excel, Stata, Python e outros,
            otimizando suas análises.
          </li>
          <li className="flex items-start gap-2">
            <IoMdArrowRoundForward className="mt-2 text-red text-xl min-w-6 h-6" />
            Soluções adaptadas para estudos econométricos, cálculo de taxas de
            desconto, análises de múltiplos, projeções setoriais e avaliações
            empresariais.
          </li>
        </ul>
      </div>
    </ContentContainer>
  );
}
