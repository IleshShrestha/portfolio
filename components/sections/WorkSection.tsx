import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { BsGridFill } from "react-icons/bs";
import { useState } from "react";
import WorkCard from "../ui/WorkCard";
import WorkSectionData from "@/app/_data/WorkSectionData.json";

export default function WorkSection() {
  const [view, setView] = useState<"grid" | "list">("list");

  const handleView = (view: "grid" | "list") => {
    setView(view);
  };

  const viewWork =
    view === "grid" ? "grid grid-cols-3 gap-4" : "grid grid-cols-2 gap-4";
  const activeViewProperties =
    "bg-(--primary-bg) text-white transition-all duration-300 bg-(--primary-bg)";
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-[8px]">{"<!-- Work Section -->"}</p>
        <div className="flex items-center">
          <div
            className={`${
              view === "list" ? activeViewProperties : ""
            } cursor-pointer border border-(--border-color) p-1`}
          >
            <BsGridFill onClick={() => handleView("list")} />
          </div>
          <div
            className={`${
              view === "grid" ? activeViewProperties : ""
            } cursor-pointer border border-(--border-color) p-1`}
          >
            <BsFillGrid3X2GapFill onClick={() => handleView("grid")} />
          </div>
        </div>
      </div>
      <div className={viewWork}>
        {WorkSectionData.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
      <div className="flex flex-col items-end justify-right">
        <span className="text-[10px]">Explore the full collection of my</span>
        <span className="text-[10px]">design and development work.</span>
        <button className="text-[10px] font-semibold border border-black p-2 bg-white text-black">
          View all works
        </button>
      </div>
    </>
  );
}
