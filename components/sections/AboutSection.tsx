import Image from "next/image";
import { IoMdDownload } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function AboutSection() {
  const liClass =
    "grid grid-cols-3 gap-6 items-center border-b border-(--border-color) py-2";
  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-col gap-10 flex-1 min-w-0">
        <div>
          <p className="text-[8px] pb-2">{"<!-- About Section -->"}</p>
          <div className="flex flex-col gap-4">
            {/* Title  */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col gap-2 text-4xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-(--primary-text) ">
                <span>Machinations</span>
                <span>of my Mind</span>
              </div>
            </div>

            {/* Description */}
            <div className="grid gap-4 grid-cols-1 xl:grid-cols-2">
              <p className="text-[10px] wrap-break-word">
                I'm a UI/UX Designer and Front-End Developer with a passion for
                crafting visually appealing and highly functional digital
                experiences. With a strong foundation in design principles and
                an eye for detail, I create intuitive interfaces that are both
                user-friendly and conversion-focused.
              </p>
              <p className="text-[10px] wrap-break-word">
                I enjoy collaborating with teams, solving real-world problems,
                and turning complex ideas into clean, engaging designs.
              </p>
              <button className="text-[10px] w-fit font-semibold border border-(--border-color) bg-(--secondary-bg) text-white flex items-center">
                <span className="border-r border-(--border-color) px-2 py-1 ">
                  Download CV
                </span>
                <div className="p-2 bg-(--border-color) text-(--highlight-text)">
                  <IoMdDownload className="" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[8px] py-2">{"<!-- Experience Section -->"}</p>
          <ul className="text-[10px] flex flex-col">
            <li className={liClass}>
              <span className="text-(--highlight-text)">2025 - present</span>
              <span className="text-white">Asc. Tech Lead</span>
              <span>TechOps</span>
            </li>
            <li className={liClass}>
              <span className="text-(--highlight-text)">2022 - 2025</span>
              <span className="text-white">Full Stack Intern</span>
              <span>TeamTranquil Inc.</span>
            </li>
          </ul>
        </div>

        <div>Tech Stack</div>
      </div>

      <div className="flex flex-col border border-(--border-color) shrink-0">
        <Image
          src="/ilesh.jpg"
          alt="Profile"
          width={248}
          height={280}
          className="w-[248px] h-[280px] "
        />
        <div className="flex gap-2 items-center justify-center border-t border-(--border-color) p-3">
          <span className="text-[10px] ">Follow me:</span>
          <FaLinkedin className="text-white" />
          <FaFacebook className="text-white" />
          <FaInstagram className="text-white" />
        </div>
      </div>
    </div>
  );
}
