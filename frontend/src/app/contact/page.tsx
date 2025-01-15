import React from "react";
import ContentContainer from "@components/common/containers/ContentContainer";
import Main from "@components/common/main";

function Contact() {
  return (
    <>
      <Main>
        <section className="global-section" id="section-contact">
          <ContentContainer>
            <div className="w-full h-full flex flex-col">
              <h1>contact</h1>
            </div>
          </ContentContainer>
        </section>
      </Main>
    </>
  );
}

export default Contact;
