export default function HeroSection() {
  return (
    <>
      <p className="text-[8px] text-primary-text">{"<!-- Hero Section -->"}</p>
      <div className="flex flex-col gap-2 text-6xl font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-(--primary-text) ">
        <h1>Creative</h1>
        <h1>Full Stack </h1>
        <h1>Developer</h1>
      </div>
      <p className="text-xs text-primary-text">
        As a user-centric developer, I create seamless, intuitive digital
        experiences that captivate and engage.
      </p>
    </>
  );
}
