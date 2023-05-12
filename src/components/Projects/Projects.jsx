import "./Projects.scss";
import dogsApp from "/dogsApp.png";
import appSalud from "/appSalud.svg";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects" className="Projects">
      <Title>Proyectos</Title>
      <Card
        img={appSalud}
        name={"Más Salud"}
        links={{
          page: "https://app-clinica.vercel.app",
          code: "https://github.com/Ivan18Gauna/app-clinica",
        }}
      >
        Diseñar y desarrollar una App de perros que incluía: búsquedas,
        filtrados, ordenamientos y creación.Desarrollar la app usando para el
        Front React, Redux, CSS puro y Back desarrollado en Node.js con Express.
        Base de datos en PostgreSQL y Sequelize. Deploy realizado con Heroku y
        Vercel.
      </Card>
      <Card
        img={dogsApp}
        name={"Dogs-App"}
        links={{
          page: "https://client-dogs.vercel.app",
          code: "https://github.com/CristianmMst/PI-Dogs",
        }}
      >
        Diseñar y desarrollar una App de perros que incluía: búsquedas,
        filtrados, ordenamientos y creación.Desarrollar la app usando para el
        Front React, Redux, CSS puro y Back desarrollado en Node.js con Express.
        Base de datos en PostgreSQL y Sequelize. Deploy realizado con Heroku y
        Vercel.
      </Card>
    </Element>
  );
};

export default Projects;
