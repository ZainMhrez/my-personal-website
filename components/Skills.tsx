import { FC } from "react";
import Skill from "./Skill";

const Skills: FC = () => {
  const skillsArr: string[] = [
    "React Js",
    "Next Js Basics",
    "JavaScript",
    "Typescript",
    "React Router",
    "React Query",
    "Redux",
    "Styled-Components",
    "Context API",
    "SASS/SCSS",
    "tailwindcss",
    "Git/Github",
    "Web3 Basics",
    "SEO Basics",
    "Figma Basics",
    "Digital Marketing Basics",
  ];
  return (
    <section className="py-12">
      <div className="container m-auto">
        <h2 className="text-primary font-bold text-2xl text-center">
          My Skills
        </h2>
        <div className="mt-14 grid grid-cols-auto-fill gap-x-5 gap-y-8">
          {skillsArr.map((skill, index) => (
            <Skill key={index} skillName={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
