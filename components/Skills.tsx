"use client";

import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiLua,
  SiReact,
  SiNextdotjs,
  SiQt,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiFirebase,
  SiGooglecloud,
  SiStripe,
  SiDocker,
  SiVitest,
  SiJest,
  SiTestinglibrary,
  SiGithubactions,
  SiGit,
} from "react-icons/si";
import { TbLayersLinked, TbShieldCheck, TbDeviceGamepad2, TbCpu } from "react-icons/tb";
import { FaLaptopCode, FaServer, FaTools, FaCheckCircle } from "react-icons/fa";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  categoryIcon: React.ReactNode;
  skills: SkillItem[];
}

const categories: SkillCategory[] = [
  {
    title: "Linguagens",
    subtitle: "Sistemas web, aviônica embarcada e automações",
    categoryIcon: <FaLaptopCode className="text-purple text-xl" />,
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Lua", icon: <SiLua />, color: "#000080" },
    ],
  },
  {
    title: "Front-end & Mobile",
    subtitle: "Interfaces reativas, SSR e apps nativos de missão crítica",
    categoryIcon: <TbDeviceGamepad2 className="text-purple text-xl" />,
    skills: [
      { name: "React", icon: <SiReact />, color: "#61DAFB" },
      { name: "Next.js (App Router)", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Qt / QML", icon: <SiQt />, color: "#41CD52" },
      { name: "React Native", icon: <SiReact />, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Zustand", icon: <TbLayersLinked />, color: "#A855F7" },
      { name: "React Query", icon: <SiReact />, color: "#FF4154" },
    ],
  },
  {
    title: "Back-end & Nuvem",
    subtitle: "APIs robustas, bancos relacionais/NoSQL e cloud serverless",
    categoryIcon: <FaServer className="text-purple text-xl" />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#5FA04E" },
      { name: "Express", icon: <SiExpress />, color: "#E2E8F0" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Prisma ORM", icon: <SiPrisma />, color: "#38BDF8" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
      { name: "Google Cloud (GCP)", icon: <SiGooglecloud />, color: "#4285F4" },
      { name: "Stripe", icon: <SiStripe />, color: "#635BFF" },
    ],
  },
  {
    title: "DevOps & Testes",
    subtitle: "Zero regressões em produção, CI/CD e conteinerização",
    categoryIcon: <FaTools className="text-purple text-xl" />,
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Vitest", icon: <SiVitest />, color: "#FCC72B" },
      { name: "Jest", icon: <SiJest />, color: "#C21325" },
      { name: "Testing Library", icon: <SiTestinglibrary />, color: "#E33332" },
      { name: "Supertest", icon: <TbShieldCheck />, color: "#10B981" },
      { name: "GitHub Actions", icon: <SiGithubactions />, color: "#2088FF" },
      { name: "Git", icon: <SiGit />, color: "#F05032" },
    ],
  },
];

const practices = [
  "Arquitetura Limpa e Modular",
  "Acessibilidade (WCAG, ARIA, NVDA)",
  "Pipelines de CI/CD (GitHub Actions)",
  "Metodologias Ágeis (Scrum / Kanban)",
  "Telemetria em Tempo Real (RTK / NTRIP)",
  "Controle de Acesso RBAC com JWT",
];

const Skills = () => {
  return (
    <section className="py-20 w-full" id="skills">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="heading">
          Minha <span className="text-purple">Stack Tecnológica</span>
        </h1>
        <p className="text-white-200 mt-4 max-w-2xl text-sm md:text-base">
          Do desenvolvimento web full stack a softwares aviônicos de missão crítica: as tecnologias e ferramentas que domino e utilizo no dia a dia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {categories.map((category) => (
          <div
            key={category.title}
            className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#04071d]/90 backdrop-blur-xl p-6 lg:p-8 hover:border-purple/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            {/* Efeito de brilho de fundo no hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple/20 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#10132E] border border-white/[0.1]">
                    {category.categoryIcon}
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
                <span className="text-xs text-purple font-semibold px-2.5 py-1 rounded-full bg-purple/10 border border-purple/20">
                  {category.skills.length} techs
                </span>
              </div>

              <p className="text-xs md:text-sm text-white-200 mb-6 font-light">
                {category.subtitle}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0e1329] border border-white/[0.08] hover:border-white/[0.25] hover:bg-[#161a35] transition-all duration-200 group/pill cursor-default"
                  >
                    <span
                      className="text-lg transition-transform group-hover/pill:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-white/90">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Faixa complementar de Práticas e Padrões de Engenharia */}
      <div className="mt-8 p-6 lg:p-8 rounded-3xl border border-white/[0.1] bg-gradient-to-r from-[#04071d] via-[#090d2e] to-[#04071d] flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-start">
          <div className="p-3 rounded-2xl bg-purple/10 border border-purple/30 text-purple text-2xl shrink-0">
            <TbCpu />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white">
              Práticas & Padrões de Engenharia
            </h3>
            <p className="text-xs md:text-sm text-white-200">
              Rigor técnico aplicado em cada entrega de código e arquitetura.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 lg:justify-end">
          {practices.map((practice) => (
            <span
              key={practice}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-[#10132E] border border-white/[0.1] text-blue-100"
            >
              <FaCheckCircle className="text-purple text-[10px]" />
              {practice}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
