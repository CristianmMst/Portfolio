import "./Projects.scss";
import movieApp from "/MovieApp.svg";
import appSalud from "/appSalud.svg";
import { Card } from "../Card/Card";
import { Title } from "../Title/Title";
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects" className="Projects">
      <Title>Proyectos</Title>
      <Card
        img={movieApp}
        name={"MOVIE-APP"}
        links={{
          page: "https://movie-app-cristian.vercel.app",
          code: "https://github.com/CristianmMst/movies",
        }}
      >
        En este proyecto, diseñé y desarrollé una página de películas que
        utiliza la API de TMDB para proporcionar a los usuarios información
        actualizada sobre películas populares, próximos estrenos y más.
        Utilizando mis habilidades en desarrollo web y mi conocimiento de API,
        construí una interfaz intuitiva y atractiva para que los amantes del
        cine puedan descubrir nuevas películas, obtener detalles específicos y
        estar al tanto de las últimas tendencias.
      </Card>
      <Card
        img={appSalud}
        name={"Más Salud"}
        links={{
          page: "https://app-clinica.vercel.app",
          code: "https://github.com/Ivan18Gauna/app-clinica",
        }}
      >
        En este proyecto, fui responsable del frontend, específicamente en la
        estilización. Diseñé una interfaz visualmente atractiva y funcional para
        una página de salud. Me enfoqué en crear estilos responsivos, utilizando
        técnicas modernas, creando una interfaz intuitiva para los usuarios.
      </Card>
    </Element>
  );
};

export default Projects;
