import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
}

export default function ProjectCard({ src, title, description }: Props) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-ful object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-white text-2xl font-semibold">{title}</h1>
        <p className="text-gray-300 mt-2">{description}</p>
      </div>
    </div>
  );
}
