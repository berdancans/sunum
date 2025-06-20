import AboutSectionOne from "../../components/About/AboutSectionOne";
import AboutSectionTwo from "../../components/About/AboutSectionTwo";
import Breadcrumb from "../../components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | AI-First",
  description: "AI-First hakkında detaylı bilgi.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hakkımızda"
        description="AI-First, yapay zekayı merkeze alan, Türkiye merkezli global teknoloji girişimidir."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
