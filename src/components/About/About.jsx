import "./About.scss";
import foto from "/Foto.jpg";
import { Element } from "react-scroll";
import { Title } from "../Title/Title";

const About = () => {
  return (
    <Element name="about" className="About">
      <Title>Sobre mí</Title>
      <div className="About-content">
        <img className="About-content-img" src={foto} alt="CristianMora" />
        <p className="About-content-text">
          ¡Hola! Soy Cristian Mora, un desarrollador web apasionado por la
          creación de sitios y aplicaciones web que brinden una experiencia
          única al usuario. Proactivo, con ganas de aprender, mejorar cada día y
          superarme.
        </p>
      </div>
    </Element>
  );
};

export default About;
