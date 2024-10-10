import PageFrame from "../../containers/PageFrame";
import WelcomeContainer from "./components/WelcomeContainer";
import text from "../../data/text";
import ContactContainer from "./components/ContactContainer";
import ResumeContainer from "./components/ResumeContainer";
import SectionContainer from "./components/SectionContainer";

const FrontPage = () => {
  return (
    <PageFrame>
      <WelcomeContainer pSectionName="Welcome" />
      <ResumeContainer pSectionName="Resume" />
      <SectionContainer
        pSectionName="Expiriance"
        pHeader={text.mainPage.expirianceHeader}
      >
        {text.mainPage.expiriance}
      </SectionContainer>
      <SectionContainer
        pSectionName="Biography"
        pHeader={text.mainPage.biographyHeader}
      >
        {text.mainPage.biography}
      </SectionContainer>
      <SectionContainer
        pSectionName="Education"
        pHeader={text.mainPage.educationHeader}
      >
        {text.mainPage.education}
      </SectionContainer>
      <ContactContainer
        pSectionName="Contact"
        pHeader={text.mainPage.contactHeader}
      />
    </PageFrame>
  );
};

export default FrontPage;
