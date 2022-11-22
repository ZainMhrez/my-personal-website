import { FC } from "react";

interface ISkill {
  skillName: string;
}

const Skill: FC<ISkill> = ({ skillName }) => {
  return (
    <h3 className="pb-2 border-b border-primary text-center text-lg">
      {skillName}
    </h3>
  );
};

export default Skill;
