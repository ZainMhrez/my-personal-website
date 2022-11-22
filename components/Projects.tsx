import Link from "next/link";
import { FC } from "react";
import { projectsArr } from "../data";
import Project from "./Project";

const Projects: FC = () => {
  return (
    <section className="py-12">
      <div className="container m-auto">
        <h2 className="text-primary font-bold text-2xl text-center">
          My Projects
        </h2>
        <div className="mt-14 grid grid-cols-auto-fill gap-8">
          {projectsArr.map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
        </div>
        <Link
          href="https://github.com/ZainMhrez"
          className="cursor-pointer mt-8 grid place-content-center font-bold text-lg hover:text-slate-500"
          target="_blank"
          rel="noreferrer"
        >
          For more projects check my github account &gt;&gt;
        </Link>
      </div>
    </section>
  );
};

export default Projects;
