import "./Skills.scss";
import { Title } from "../Title/Title";
import { SiRedux, SiMongodb, SiTypescript } from "react-icons/si";
import {
  FaJs,
  FaNpm,
  FaSass,
  FaHtml5,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "hmtl", icon: <FaHtml5 className="icon" /> },
    { name: "sass", icon: <FaSass className="icon" /> },
    { name: "react", icon: <FaReact className="icon" /> },
    { name: "npm", icon: <FaNpm className="icon" /> },
    { name: "redux", icon: <SiRedux className="icon" /> },
    { name: "nodejs", icon: <FaNodeJs className="icon" /> },
    { name: "mongodb", icon: <SiMongodb className="icon" /> },
    { name: "javascript", icon: <FaJs className="icon" /> },
    { name: "typescript", icon: <SiTypescript className="icon" /> },
  ];
  return (
    <div id="skills" className="Skills">
      <Title>Mis Habilidades</Title>
      <div className="Icons">
        {skills.map((i, index) => {
          const num = index + 1;
          return (
            <div
              key={index}
              className={`Icons-icon ${num % 2 === 1 ? "up" : "left"}`}
            >
              {i.icon}
              <p>{i.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
