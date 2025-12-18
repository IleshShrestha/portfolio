import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import SkillsSection from "../sections/SkillsSection";
import WorkSection from "../sections/WorkSection";
import ContactSection from "../sections/ContactSection";
import Link from "next/link";

export default function CenterContent() {
  return (
    <div className="flex flex-col gap-6 px-6">
      <nav className="flex justify-between items-center border-b border-l border-(--border-color) -mx-6 px-6">
        <ul className="flex items-center gap-8">
          <li>
            <Link href="/" className="text-[10px] font-medium text-white">
              ilesh.info
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[10px] font-medium text-white">
              work.done
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex flex-col gap-6 bg-(--secondary-bg) border-l border-(--border-color) -m-6 p-6 ">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />

        <ContactSection />
      </main>
    </div>
  );
}
