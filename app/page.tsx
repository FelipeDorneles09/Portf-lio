"use client";

import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Importações dinâmicas
// Importações dinâmicas com tipagem correta
const FloatingNav = dynamic(() =>
  import("@/components/ui/FloatingNav").then(mod => mod.FloatingNav), // <- acessando o export nomeado
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/ui/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
