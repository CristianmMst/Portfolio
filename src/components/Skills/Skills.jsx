import "./Skills.scss";
import { Element } from "react-scroll";
import { Title } from "../Title/Title";

import redux from "/redux.svg";
import mongodb from "/mongodb.svg";
import typescript from "/typescript.svg";

const Skills = () => {
  const skills = [
    { name: "hmtl", icon: <i className="fa-brands fa-html5 icon"></i> },
    { name: "sass", icon: <i className="fa-brands fa-sass icon"></i> },
    { name: "react", icon: <i className="fa-brands fa-react icon"></i> },
    { name: "npm", icon: <i className="fa-brands fa-npm icon"></i> },
    { name: "redux", icon: <img src={redux} className="icon" /> },
    { name: "nodejs", icon: <i className="fa-brands fa-node-js icon"></i> },
    { name: "mongodb", icon: <img src={mongodb} className="icon" /> },
    { name: "javascript", icon: <i className="fa-brands fa-js icon"></i> },
    { name: "typescript", icon: <img src={typescript} className="icon" /> },
  ];
  return (
    <Element name="skills" className="Skills">
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
    </Element>
  );
};

export default Skills;
