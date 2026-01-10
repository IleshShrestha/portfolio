import TechCard from "../ui/TechCard";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiPostgresql,
  SiFastapi,
  SiDocker,
  SiAmazon,
  SiGithub,
  SiKubernetes,
  SiTailwindcss,
} from "react-icons/si";
import { SiTypescript, SiNextdotjs } from "react-icons/si";

const techStackData = [
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
];

export default function TechStackSection() {
  return (
    <>
      <p className="text-[8px] pb-2">{"<!-- My Tech Stack -->"}</p>
      <TechCard techstack={techStackData} />
    </>
  );
}
