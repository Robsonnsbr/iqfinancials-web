import React from "react";
import Main from "@components/common/main";
import ContentContainer from "@components/common/containers/ContentContainer";
import Header from "@components/common/header";
import Footer from "@components/common/footer";

function About() {
  return (
    <>
      <Header />
      <Main>
        <section className="global-section" id="section-about">
          <ContentContainer>
            <div className="w-full h-full flex flex-col">
              <h1 className="text-black">main-contact</h1>
            </div>
          </ContentContainer>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default About;
