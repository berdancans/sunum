import Breadcrumb from "../../components/Common/Breadcrumb";
import Contact from "../../components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | AI-First",
  description: "AI-First ekibiyle hemen iletişime geçin.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="İletişim"
        description="AI-First ile çalışmak, yatırım yapmak ya da soru sormak için bizimle hemen iletişime geçin."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
