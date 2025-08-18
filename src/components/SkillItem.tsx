import React from "react";

interface SkillItemProps {
    skillName: string;
    progress: number
}

const SkillItem: React.FC<SkillItemProps> = ({ skillName, progress }) => {
  return (
    <div className="skill-item">
      <p className="skill-header">{skillName}</p>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillItem;