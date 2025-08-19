import React, {useState, useEffect} from "react";

import baseGuardiansImg from "../images/baseguardians.jpg";
import evolveImg from "../images/evolve.jpeg";
import cocaincraftImg from "../images/cocaincraft.png";

import animateString from "../utils/stringUtils";

const projects = [
  {
    title: "Base Guardians",
    description: "Roblox TD game created with my friends.",
    image: baseGuardiansImg,
    buttonText: "View on Roblox",
    link: "https://www.roblox.com/games/10403078418/Base-Guardians-ALPHA#!/about",
  },
  {
    title: "Evolve Programming Language",
    description: "A programming language written in Python, created for educational purposes.",
    image: evolveImg,
    buttonText: "View on GitHub",
    link: "https://github.com/dima648228/evolve",
  },
  {
    title: "Cocain Craft Minecraft Mod",
    description: "A minecraft mod written in Java for educational purposes. In development.",
    image: cocaincraftImg,
    buttonText: "View on GitHub",
    link: "https://github.com/dima648228/CocainCraft",
  },
];


const Projects: React.FC = () => {

    const [projectsHeader, setProjectsHeader] = useState(""); // My Projects

    useEffect(() => {
        const runAnimation = async () => {
          await animateString("My Projects", setProjectsHeader, 100);
        };
        runAnimation();
    }, []);

    return (
      <div className="block-center projects-page">
        <h1 className="projects-header">{projectsHeader}</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                {project.image ? <img src={project.image}></img> : "Image"}
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">
                  {project.buttonText ? project.buttonText : "More Details"} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Projects;
