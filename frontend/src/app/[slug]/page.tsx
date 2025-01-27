import Main from "@components/common/main";
import ContentContainer from "@components/common/containers/ContentContainer";
import Footer from "@components/common/footer";

// Next.js passa automaticamente os parâmetros das rotas dinâmicas
export default function DynamicPage({ params }: { params: { slug: string } }) {
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
