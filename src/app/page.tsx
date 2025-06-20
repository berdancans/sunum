import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "../components/Contact";
import Features from "@/components/Features";
import Hero from "../components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-First & RelatIQ – CTO Aranıyor",
  description: "Türkiye merkezli, global AI-first girişimi için teknik ortak arıyoruz.",
};

export default function Home() {
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

