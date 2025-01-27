import Main from "@components/common/main";
import ContentContainer from "@components/common/containers/ContentContainer";
import Footer from "@components/common/footer";
import { ParsedUrlQuery } from "querystring";

// Definindo a interface específica dos parâmetros da rota dinâmica
interface IParamsDynamicPage extends ParsedUrlQuery {
  slug: string;
}

interface DynamicPageProps {
  params: IParamsDynamicPage;
}

export default function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = params; // Captura o slug da URL

  return (
    <>
      <Main>
        <section className="global-section" id="section-dynamic">
          <ContentContainer>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-white">Página dinâmica: {slug}</h1>
            </div>
          </ContentContainer>
        </section>
      </Main>
      <Footer />
    </>
  );
}
