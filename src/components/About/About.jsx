import "./About.scss";
import { Title } from "../Title/Title";
import profile from "../../assets/images/Foto.jpg";

const About = () => {
  return (
    <div id="about" className="About">
      <Title>Sobre mí</Title>
      <div className="About-content">
        <img
          className="About-content-img"
          src={profile.src}
          alt="CristianMora"
        />
        <p className="About-content-text">
          ¡Hola! Soy Cristian Mora, un desarrollador web apasionado por la
          creación de sitios y aplicaciones web que brinden una experiencia
          única al usuario. Proactivo, con ganas de aprender, mejorar cada día y
          superarme.
        </p>
      </div>
    </div>
  );
};

export default About;
