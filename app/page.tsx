import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Projects from "./components/main/Projects";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 h-full w-full">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
