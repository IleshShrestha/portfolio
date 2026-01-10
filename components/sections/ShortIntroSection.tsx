import Image from "next/image";
import { FaEnvelope, FaLanguage, FaPhone, FaSuitcase } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function ShortIntroSection() {
  const liClass = "text-[10px] text-primary-text flex items-center gap-2";
  return (
    <>
      <div className="flex items-center gap-2 pt-6">
        <Image src="/ilesh.jpg" alt="Profile" width={50} height={50} />

        <div className="flex flex-col">
          <h1 className="text-sm font-medium text-white">Ilesh Shrestha</h1>
          <p className="text-[10px] text-primary-text">Full Stack Developer</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-primary-text">
          I'm a full stack developer with a passion for building web
          applications that are aesthetically pleasing.
        </p>
      </div>

      <ul className="flex flex-col gap-2">
        <li className={liClass}>
          {" "}
          <FaSuitcase /> <span> 1 year of experience</span>
        </li>
        <li className={liClass}>
          {" "}
          <FaMapMarkerAlt /> Pennsylvania, USA
        </li>
        <li className={liClass}>
          {" "}
          <FaLanguage /> English, Nepali
        </li>
        <li className={liClass}>
          {" "}
          <FaEnvelope /> ilesh.k.shrestha@gmail.com
        </li>
        <li className={liClass}>
          {" "}
          <FaPhone /> +1 (215) 390-6297
        </li>
      </ul>
    </>
  );
}
