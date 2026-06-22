import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { RoleFit } from "@/components/case/RoleFit";
import { SupplierCase } from "@/components/case/SupplierCase";
import { SupplierDemo } from "@/components/case/SupplierDemo";
import { RawToStructured } from "@/components/case/RawToStructured";
import { ScoreModel } from "@/components/case/ScoreModel";
import { EngineeringNotes } from "@/components/case/EngineeringNotes";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero />
        <RoleFit />
        <SupplierCase />
        <SupplierDemo />
        <RawToStructured />
        <ScoreModel />
        <EngineeringNotes />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
