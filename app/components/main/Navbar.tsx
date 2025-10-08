import Link from "next/link";
import Image from "next/image";
import { Socials } from "@/app/constants";
export default function Navbar() {
  return (
    <div className="w-full h-[65px] fied top-0 shadow-lg shadow-[#2A02E61]/50 bg-[#121422] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-10px">
        <Link
          href="/about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Ilesh Shrestha
          </span>
        </Link>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center  w-full h-auto justify-between bg-[#121422] mr-[15px] px-[20px] py-[10x] text-gray-200">
            <Link href="/about-me" className="cursor-pointer">
              About me
            </Link>
            <Link href="/skills" className="cursor-pointer">
              Skills
            </Link>
            <Link href="/projects" className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
