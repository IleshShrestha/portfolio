import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import WorkSection from "../sections/WorkSection";
import ContactSection from "../sections/ContactSection";
import Navigation from "./Nav";
import DateScrollSection from "../ui/DateScroll";
import WhatDoSection from "../sections/WhatDoSection";

export default function CenterContent() {
  return (
    <div className="flex flex-col gap-6 px-6">
      <Navigation />

      <main className="flex flex-col gap-6 bg-(--secondary-bg) border-l border-(--border-color) -m-6 p-6 ">
        <HeroSection />
        <WorkSection />
        <DateScrollSection />
        <AboutSection />
        <WhatDoSection />
        <SkillsSection />

        <ContactSection />
      </main>
    </div>
  );
}
