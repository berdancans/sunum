import { Metadata } from "next";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Contact from "@/components/Contact";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "AI-First & RelatIQ – CTO Aranıyor",
  description:
    "Türkiye merkezli, global AI-first girişimi için teknik ortak arıyoruz.",
};

export default function HomePage() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
