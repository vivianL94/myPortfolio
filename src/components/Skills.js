// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
   return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-8">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Software engineer with 5 years of hands-on experience specializing in both frontend and backend development, 
            with a predominant focus on backend technologies. Proficient in designing and implementing applications for 
            Electronic Data Interchange (EDI) and Accounts Payable utilizing a diverse skill set including C++, PHP, MySQL, 
            JavaScript, CSS, and HTML. A driven professional with a fervor for problem-solving, mentoring, and a dedication to 
            lifelong learning, poised to make impactful contributions within a dynamic team environment.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img className="w-15 h-10 object-cover" src={skill.image} />
                <span className="px-8 py-2 title-font font-medium text-white">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}