"use client";

import { forwardRef } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkSection from "../sections/WorkSection";
import ContactSection from "../sections/ContactSection";
import DateScrollSection from "../ui/DateScroll";
import WhatDoSection from "../sections/WhatDoSection";
import TechStackSection from "../sections/TechStackSection";

const CenterContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-6 px-6">
      <main className="flex flex-col gap-6 bg-(--secondary-bg) border-l border-(--border-color) -m-6 p-6 flex-1">
        <HeroSection />
        <WorkSection />
        <DateScrollSection />
        <AboutSection />
        <WhatDoSection />
        <TechStackSection />

        <ContactSection />
      </main>
    </div>
  );
});

CenterContent.displayName = "CenterContent";

export default CenterContent;
