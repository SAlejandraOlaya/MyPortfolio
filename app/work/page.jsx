"use client";

import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    title: "Radioticket",
    description:
      "Proyecto desarrollado en grupo bajo la metodología ágil Scrum, en la cual trabajé del lado del Frontend. La aplicación permite a los usuarios explorar eventos musicales, comprar entradas y acceder a beneficios exclusivos como miembros premium.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "Typescript" }],
    image: "/assets/work/imageRadioticket.png",
    live: "https://front-radio-ticket.vercel.app/",
    github: "https://github.com/SAlejandraOlaya/front-radio-ticket",
  },
  {
    num: "02",
    title: "Blacktech",
    description:
      "El objetivo del proyecto fue optimizar el diseño y el rendimiento de la aplicación para ofrecer una experiencia de usuario intuitiva, rápida y eficiente. Desarrollé de manera individual el frontend de una plataforma de comercio electrónico ficticia, integrando un backend previamente proporcionado.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }, { name: "styled-components" }],
    image: "/assets/work/imagep4.png",
    live: "https://proyecto-4-vert.vercel.app/",
    github: "https://github.com/SAlejandraOlaya/proyecto-4",
  },
  {
    num: "03",
    title: "Aplicación de turnos médicos",
    description:
      "Aplicación web de servicio de turnos, recibe al usuario en una página principal atractiva. Al registrarse, puede utilizar el servicio de turnos. Utilicé React y Redux para lograr un óptimo manejo del estado de la app, diseñé e integré una API Rest, logrando una aplicación robusta.",
    stack: [{ name: "React" }, { name: "Bootstrap" }, { name: "Node.js" }, { name: "Express" }, { name: "TypeOrm" }],
    image: "/assets/work/imagep34.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col xl:flex-row xl:gap-[30px] mb-40 pb-8 ">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="font-extrabold leading-none text-transparent text-8xl text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                <p className="text-white/60">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, idx) => (
                    <li key={idx} className="text-xl text-accent">
                      {item.name}
                      {idx !== project.stack.length - 1 && ","}
                    </li>
                  ))}
                </ul>
                <div className="border border-white/20"></div>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;