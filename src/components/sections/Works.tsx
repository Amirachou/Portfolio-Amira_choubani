import React from "react";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { ProjectCard } from "../atoms/ProjectCard";
import { Header } from "../atoms/Header";
import resumeImg from "../../assets/resume2025.png";

const Works = () => {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-4">
      <Header title="My Projects" subtitle="Overview" />

      <p className="text-secondary text-[17px] max-w-3xl leading-[30px] mt-4">
        Here’s my professional resume—highlighting my journey in virtual reality engineering and interactive game design.
      </p>

      {/* 📄 Resume Section (taille réduite) */}
      <div
        id="resume"
        className="mt-12 w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl"
      >
        <h3 className="text-gray-800 text-2xl font-semibold mb-4">My Resume</h3>
        <div className="overflow-auto max-h-[70vh]">
          <img
            src={resumeImg}
            alt="Amira Choubani Resume"
            className="w-full h-auto object-contain mx-auto"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
