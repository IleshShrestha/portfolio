"use client";

import CenterContent from "@/components/layout/CenterContent";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr_150px]">
      <LeftSidebar />
      <CenterContent />

      <RightSidebar />
    </div>
  );
}
