import React, { useState, useEffect } from "react";

import animateString from "../utils/stringUtils";

import SkillItem from "./SkillItem";

import config from "../config.json"

const Skills = () => {
  const [generalInfoHeader, setGeneralInfoHeader] = useState(""); // My Skills

  // Technology progress
  const [pythonProgress, setPythonProgress] = useState(100);
  const [csharpProgress, setcsharpProgress] = useState(100);
  const [luauProgress, setLuauProgress] = useState(100);
  const [jsProgress, setJSProgress] = useState(100);
  const [tsProgress, setTSProgress] = useState(100);

  const [htmlProgress, setHTMLProgress] = useState(100);
  const [cssProgress, setCSSProgress] = useState(100);
  const [reactProgress, setReactProgress] = useState(100);
  const [angularProgress, setAngularProgress] = useState(100);

  const [cryptographyProgress, setCryptographyProgress] = useState(100);

  useEffect(() => {
    const runAnimation = async () => {
      await animateString("My Skil", setGeneralInfoHeader, 100);
    };
    runAnimation();
  }, []);

  useEffect(() => {
    setPythonProgress(config.SKILLSPROGRESS.Python)
    setcsharpProgress(config.SKILLSPROGRESS["C#"])
    setLuauProgress(config.SKILLSPROGRESS.Luau)
    setJSProgress(config.SKILLSPROGRESS.JS)
    setTSProgress(config.SKILLSPROGRESS.TS)

    setHTMLProgress(config.SKILLSPROGRESS.HTML)
    setCSSProgress(config.SKILLSPROGRESS.CSS)
    setReactProgress(config.SKILLSPROGRESS.React)
    setAngularProgress(config.SKILLSPROGRESS.Angular)

    setCryptographyProgress(config.SKILLSPROGRESS.Cryptography)
  }, []);

  return (
    <div className="block-center block-1 skills-block">
        <div className="top-section">
            <p style={{ fontSize: "50px" }}>{generalInfoHeader}</p>
        </div>
        <div className="skill-containers-list">
            <div className="skills-items-container">
                <SkillItem skillName="Python" progress={pythonProgress}/>
                <SkillItem skillName="C#" progress={csharpProgress}/>
                <SkillItem skillName="Luau" progress={luauProgress}/>
                <SkillItem skillName="JavaScript" progress={jsProgress}/>
                <SkillItem skillName="TypeScript" progress={tsProgress}/>
            </div>

            <div className="skills-items-container">
              <SkillItem skillName="HTML" progress={htmlProgress}/>
              <SkillItem skillName="CSS" progress={cssProgress}/>
              <SkillItem skillName="React" progress={reactProgress}/>
              <SkillItem skillName="Angular [SOON]" progress={angularProgress}/>
            </div>

            <div className="skills-items-container">
              <SkillItem skillName="Cryptography [SOON]" progress={cryptographyProgress}/>
            </div>
        </div>
    </div>
  );
};

export default Skills;