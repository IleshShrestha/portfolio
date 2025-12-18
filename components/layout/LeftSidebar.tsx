import ShortIntroSection from "@/components/sections/ShortIntroSection";

export default function LeftSidebar() {
  return (
    <div className="flex flex-col gap-6 px-6">
      <h1 className="text-xs font-medium border-b border-(--border-color) py-1 -mx-6 px-6">
        Ilesh Shrestha
      </h1>
      <ShortIntroSection />
    </div>
  );
}
