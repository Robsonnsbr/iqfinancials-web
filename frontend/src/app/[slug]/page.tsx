import Main from "@components/common/main";
import ContentContainer from "@components/common/containers/ContentContainer";
import Footer from "@components/common/footer";

//TODO: corrigir interface (achar o tipo certo do params)
interface IParamsDynamicPage {
  params: { slug: string };
}

export default function DynamicPage({ params }: IParamsDynamicPage) {
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
