import React from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import vue from "../../../assets/vue.png";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import node from "../../../assets/node.png";
import nextjs from "../../../assets/nextjs.png";
import postgres from "../../../assets/postgres.png";
import redux from "../../../assets/redux.png";
import tailwind from "../../../assets/tailwind.png";
import { Link as ScrollLink } from "react-scroll";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-cyan-700",
    },
    {
      id: 6,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 7,
      src: vue,
      title: "Vue JS",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: react,
      title: "React JS",
      style: "shadow-cyan-400",
    },
    {
      id: 9,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 10,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      title: "Angular JS",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: node,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 12,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 13,
      src: postgres,
      title: "PostgreSQL",
      style: "shadow-blue-400",
    },
    {
      id: 14,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      title: "SQL",
      style: "shadow-blue-600",
    },
    {
      id: 15,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      title: "SQLite",
      style: "shadow-blue-500",
    },
    {
      id: 16,
      src: git,
      title: "Git",
      style: "shadow-orange-600",
    },
    {
      id: 17,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 18,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      title: "VS Code",
      style: "shadow-blue-500",
    },
  ];

  return (
    <section
      name="Technologies"
      className="relative w-full md:h-screen h-unset"
    >
      <div className="max-w-screen-lg mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl animated-gradient text-center">
          Technologies I've Worked With
          </h2>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 sm:gap-6 text-center py-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-12 sm:w-16 md:w-18 lg:w-20 mx-auto py-2 md:py-4" src={src} alt="" />
              <p className="mt-2 sm:mt-3 md:mt-4 text-xs sm:text-sm md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <ScrollLink
        to="Certification"
        smooth
        duration={500}
        className="absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color"
      >
        <i className="bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color"></i>
      </ScrollLink>
    </section>
  );
};

export default Techs;
