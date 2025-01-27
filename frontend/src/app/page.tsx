import SectionContainer from "@components/common/containers/SectionContainer";

// import Header from "@components/header";
import Main from "@components/common/main";
import Footer from "@components/common/footer";
import TickerPartners from "@components/common/ticker-partners";
import {
  Hero,
  Insights,
  Instructions,
  FormBlock,
  CustomerSuccess,
} from "@components/home/index";

export default function Home() {
  return (
    <>
      <SectionContainer
        role="banner"
        id="hero-section"
        className="bg-parallax-hero-section bg-right-bottom"
      >
        <Hero />
      </SectionContainer>

      <Main>
        <SectionContainer
          id="insights-section"
          className="bg-insights-section bg-scroll"
        >
          <Insights />
        </SectionContainer>

        <SectionContainer
          id="customer-success-section"
          className="bg-parallax-customer-section !min-h-[500px] justify-between"
        >
          <CustomerSuccess />
        </SectionContainer>

        <SectionContainer
          id="form-block-section"
          className="bg-parallax-form-section justify-between bg-scroll !bg-contain !bg-repeat"
        >
          <FormBlock />
          <TickerPartners />
        </SectionContainer>

        <SectionContainer
          id="instructions-section"
          className="bg-instructions-section"
        >
          <Instructions />
        </SectionContainer>
      </Main>
      <Footer />
    </>
  );
}
