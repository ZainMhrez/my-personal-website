import { FC } from "react";
import { IProjects } from "../data";
import Link from "next/link";

interface IProjectData {
  projectData: IProjects;
}

const Project: FC<IProjectData> = ({ projectData }) => {
  return (
    <div className="px-6 py-4 rounded-lg shadow-md flex flex-col items-center gap-4">
      <h3 className="text-primary font-bold text-lg">{projectData.title}</h3>
      <Link
        href={projectData.live}
        target="_blank"
        className="font-bold hover:text-slate-500 border-b-2 border-b-slate-300"
      >
        Live
      </Link>
      <Link
        href={projectData.code}
        target="_blank"
        className="font-bold hover:text-slate-500 border-b-2 border-b-slate-300"
      >
        Code
      </Link>
      <div>
        <strong>Technologies: </strong>
        <ul className="flex flex-wrap gap-2 mt-2">
          {projectData.technologies.map((technology, index) => (
            <li
              key={index}
              className="px-4 py-2 bg-secondary rounded-2xl text-slate-50"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
