
import React from "react";

interface Tag {
  name: string;
  color: string;
}

interface ProjectProps {
  index: number;
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className="bg-white-100 p-5 rounded-2xl sm:w-[360px] w-full shadow-md">
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="bg-black bg-opacity-60 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <span className="text-white text-lg font-bold">{"</>"}</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-black text-xl font-bold">{name}</h3>
        <p className="mt-2 text-secondary text-sm">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <p key={index} className={`text-sm ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};
