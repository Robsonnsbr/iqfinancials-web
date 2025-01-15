//RESTRICT FUNCTION FOR DEVELOPMENT & TESTING

import React from "react";
import Main from "@components/common/main";
import Footer from "@components/common/footer";
import AppContainer from "@components/common/containers/AppContainer";
import { EmailTemplate } from "@components/common/email-templates/EmailTemplate";
import { dataTableTest } from "@data/index";

function Test() {
  return (
    <AppContainer>
      <Main className="bg-white">
        <h1 className="text-black text-center w-full">TESTE</h1>
        <EmailTemplate formData={dataTableTest} />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default Test;
