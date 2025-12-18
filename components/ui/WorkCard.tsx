import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
interface WorkCardProps {
  work: {
    id: number;
    title: string;
    image: string;
    link: string;
  };
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="flex flex-col group">
      <div className="text-sm font-medium flex items-center justify-between text-white border border-(--border-color)">
        <span className="p-2">{work.title}</span>
        <div className="flex items-center p-2 border-l border-(--border-color)">
          <Link href={work.link} target="_blank">
            <FaExternalLinkAlt />
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-black/45 mix-blend-luminosity transition-opacity duration-300 group-hover:opacity-0" />
        <Image
          src={work.image}
          alt={work.title}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
