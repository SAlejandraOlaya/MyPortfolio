"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript, SiMongodb, SiPostgresql } from "react-icons/si";

// about data
const about = {
  title: "Sobre mi",
  description:
    "Mis pasiones son la medicina y la programación. Ejercí como médica general por 3 años tras completar mis estudios. Sin embargo, descubrí­ que mi verdadera vocación estaba en el desarrollo de software. En 2024, finalicé mi bootcamp para convertirme en desarrolladora Full Stack, enfocándome en Frontend con tecnologías como React y Next.js.",
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Alejandra Olaya",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+57) 310 385 8806",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "trainee",
    },

    {
      fieldName: "Email",
      fieldValue: "salejandraolaya@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "disponible",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "español(nativo), inglés(B2)",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiencia",

  items: [
    {
      company: "Hospital Alma máter de Antioquia",
      position: "Médica general en Telemedicina",
      duration: " Abr 2021 - Abr 2023",
    },
    {
      company: "Dpto de Pediatría - Facultad de Medicina UdeA",
      position: "Profesora de cátedra en Pediatría",
      duration: "May 2022 - Ago 2022",
    },

  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Educación",

  items: [
    {
      institution: "Bootcamp Soy Henry (800 horas prácticas)",
      degree: "Full Stack Web Development",
      duration: "2024",
    },
    {
      institution: "Universidad de Antioquia, Facultad de Medicina",
      degree: "Médica y cirujana",
      duration: "2014-2021",
    },

  ],
};

// skills data
const skills = {
  title: "Mis habilidades",
  description:
    "Pensamiento analítico | Resolución de problemas | Trabajo en equipo | Aprendizaje rápido | Adaptabilidad | Gestión del tiempo | Comunicación efectiva | Pensamiento creativo.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",

    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiencia</TabsTrigger>
            <TabsTrigger value="education">Educación</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mí</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-start gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent mt-2 flex-shrink-0"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-start gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent mt-2 flex-shrink-0"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full mb-10">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center gap-4 xl:justify-start"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
