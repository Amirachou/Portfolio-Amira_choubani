import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="mt-20 flex flex-col items-center">
      <h2 className="text-white text-3xl font-bold mb-6">My Resume</h2>
      <img
        src="/assets/resume2025.png"
        alt="Amira Choubani Resume"
        className="max-w-[800px] w-full rounded-xl shadow-xl"
      />
    </section>
  );
};

export default ResumeSection;
