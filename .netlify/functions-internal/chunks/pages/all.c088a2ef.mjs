import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, d as renderHead, e as addAttribute } from '../astro.1efc8481.mjs';
/* empty css                           */import { useState, useRef } from 'react';
import { Link, Element as Element$1 } from 'react-scroll';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Element } from 'react-scroll/modules/index.js';
import emailJs from '@emailjs/browser';

const NavBar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return /* @__PURE__ */ jsxs("nav", {
    className: "navbar",
    children: [/* @__PURE__ */ jsx("div", {
      className: "menu-mobile",
      onClick: handleClick,
      children: /* @__PURE__ */ jsx("i", {
        className: "fa-solid fa-bars",
        style: {
          fontSize: "35px",
          padding: "10px"
        }
      })
    }), /* @__PURE__ */ jsxs("ul", {
      className: `nav ${active ? "menu-mobile_active" : ""}`,
      children: [/* @__PURE__ */ jsx("li", {
        className: "item",
        children: /* @__PURE__ */ jsx(Link, {
          activeClass: "active",
          onClick: handleClick,
          to: "home",
          spy: true,
          smooth: true,
          duration: 1e3,
          children: "Inicio"
        })
      }), /* @__PURE__ */ jsx("li", {
        className: "item",
        children: /* @__PURE__ */ jsx(Link, {
          activeClass: "active",
          onClick: handleClick,
          to: "about",
          spy: true,
          smooth: true,
          duration: 1e3,
          children: "Sobre mí"
        })
      }), /* @__PURE__ */ jsx("li", {
        className: "item",
        children: /* @__PURE__ */ jsx(Link, {
          activeClass: "active",
          onClick: handleClick,
          to: "projects",
          spy: true,
          smooth: true,
          duration: 1e3,
          children: "Proyectos"
        })
      }), /* @__PURE__ */ jsx("li", {
        className: "item",
        children: /* @__PURE__ */ jsx(Link, {
          activeClass: "active",
          onClick: handleClick,
          to: "skills",
          spy: true,
          smooth: true,
          duration: 1e3,
          children: "Habilidades"
        })
      }), /* @__PURE__ */ jsx("li", {
        className: "item",
        children: /* @__PURE__ */ jsx(Link, {
          activeClass: "active",
          onClick: handleClick,
          to: "contact",
          spy: true,
          smooth: true,
          duration: 1e3,
          children: "Contacto"
        })
      })]
    })]
  });
};
__astro_tag_component__(NavBar, "@astrojs/react");

const arrowDown = "/arrowDown.svg";

const Header = () => {
  return /* @__PURE__ */ jsxs(Element, {
    name: "home",
    className: "Header",
    children: [/* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsxs("h1", {
        children: ["Mora ", /* @__PURE__ */ jsx("br", {}), " Cristian"]
      }), /* @__PURE__ */ jsx("h2", {
        children: "Full-Stack developer"
      })]
    }), /* @__PURE__ */ jsx("button", {
      className: "Header-arrow",
      type: "button",
      children: /* @__PURE__ */ jsx(Link, {
        spy: true,
        smooth: true,
        duration: 1e3,
        to: "about",
        children: /* @__PURE__ */ jsx("img", {
          src: arrowDown,
          alt: "arrowDown"
        })
      })
    })]
  });
};
__astro_tag_component__(Header, "@astrojs/react");

const foto = "/Foto.jpg";

const Title = ({
  children
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "Title",
    children: [/* @__PURE__ */ jsx("h1", {
      className: "Title-text",
      children
    }), /* @__PURE__ */ jsx("div", {
      className: "Title-line"
    })]
  });
};
__astro_tag_component__(Title, "@astrojs/react");

const About = () => {
  return /* @__PURE__ */ jsxs(Element$1, {
    name: "about",
    className: "About",
    children: [/* @__PURE__ */ jsx(Title, {
      children: "Sobre mí"
    }), /* @__PURE__ */ jsxs("div", {
      className: "About-content",
      children: [/* @__PURE__ */ jsx("img", {
        className: "About-content-img",
        src: foto,
        alt: "CristianMora"
      }), /* @__PURE__ */ jsx("p", {
        className: "About-content-text",
        children: "Hola soy Cristian, desarrollador web Full-Stack autónomo. Con experiencia en diseño y desarrollo de aplicaciones web."
      })]
    })]
  });
};
__astro_tag_component__(About, "@astrojs/react");

const dogsApp = "/dogsApp.png";

const appSalud = "/appSalud.svg";

const Card = ({
  children,
  img,
  links,
  name
}) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "Card",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "Card-item",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "Card-item-title",
        children: name
      }), /* @__PURE__ */ jsx("p", {
        className: "Card-item-text",
        children
      }), /* @__PURE__ */ jsxs("div", {
        className: "Card-buttons",
        children: [/* @__PURE__ */ jsx("a", {
          target: "_blank",
          className: "Card-buttons-btn",
          href: links.page,
          children: "ver pagina"
        }), /* @__PURE__ */ jsx("a", {
          target: "_blank",
          className: "Card-buttons-btn",
          href: links.code,
          children: "ver Codigo"
        })]
      })]
    }), /* @__PURE__ */ jsx("img", {
      className: "Card-img",
      src: img,
      alt: "logo"
    })]
  });
};
__astro_tag_component__(Card, "@astrojs/react");

const Projects = () => {
  return /* @__PURE__ */ jsxs(Element$1, {
    name: "projects",
    className: "Projects",
    children: [/* @__PURE__ */ jsx(Title, {
      children: "Proyectos"
    }), /* @__PURE__ */ jsx(Card, {
      img: appSalud,
      name: "Más Salud",
      links: {
        page: "https://app-clinica.vercel.app",
        code: "https://github.com/Ivan18Gauna/app-clinica"
      },
      children: "Diseñar y desarrollar una App de perros que incluía: búsquedas, filtrados, ordenamientos y creación.Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize. Deploy realizado con Heroku y Vercel."
    }), /* @__PURE__ */ jsx(Card, {
      img: dogsApp,
      name: "Dogs-App",
      links: {
        page: "https://client-dogs.vercel.app",
        code: "https://github.com/CristianmMst/PI-Dogs"
      },
      children: "Diseñar y desarrollar una App de perros que incluía: búsquedas, filtrados, ordenamientos y creación.Desarrollar la app usando para el Front React, Redux, CSS puro y Back desarrollado en Node.js con Express. Base de datos en PostgreSQL y Sequelize. Deploy realizado con Heroku y Vercel."
    })]
  });
};
__astro_tag_component__(Projects, "@astrojs/react");

const redux = "/redux.svg";

const mongodb = "/mongodb.svg";

const typescript = "/typescript.svg";

const Skills = () => {
  const skills = [{
    name: "hmtl",
    icon: /* @__PURE__ */ jsx("i", {
      className: "fa-brands fa-html5 icon"
    })
  }, {
    name: "sass",
    icon: /* @__PURE__ */ jsx("i", {
      className: "fa-brands fa-sass icon"
    })
  }, {
    name: "react",
    icon: /* @__PURE__ */ jsx("i", {
      className: "fa-brands fa-react icon"
    })
  }, {
    name: "npm",
    icon: /* @__PURE__ */ jsx("i", {
      className: "fa-brands fa-npm icon"
    })
  }, {
    name: "redux",
    icon: /* @__PURE__ */ jsx("img", {
      src: redux,
      className: "icon"
    })
  }, {
    name: "nodejs",
    icon: /* @__PURE__ */ jsx("i", {
      className: "fa-brands fa-node-js icon"
    })
  }, {
    name: "mongodb",
    icon: /* @__PURE__ */ jsx("img", {
      src: mongodb,
      className: "icon"
    })
  }, {
    name: "javascript",
    icon: /* @__PURE__ */ jsx("i", {
      className: "fa-brands fa-js icon"
    })
  }, {
    name: "typescript",
    icon: /* @__PURE__ */ jsx("img", {
      src: typescript,
      className: "icon"
    })
  }];
  return /* @__PURE__ */ jsxs(Element$1, {
    name: "skills",
    className: "Skills",
    children: [/* @__PURE__ */ jsx(Title, {
      children: "Mis Habilidades"
    }), /* @__PURE__ */ jsx("div", {
      className: "Icons",
      children: skills.map((i, index) => {
        const num = index + 1;
        return /* @__PURE__ */ jsxs("div", {
          className: `Icons-icon ${num % 2 === 1 ? "up" : "left"}`,
          children: [i.icon, /* @__PURE__ */ jsx("p", {
            children: i.name
          })]
        }, index);
      })
    })]
  });
};
__astro_tag_component__(Skills, "@astrojs/react");

const Contact = () => {
  const name = useRef();
  const text = useRef();
  const email = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    emailJs.sendForm("service_yg3rrup", "template_e5wu4pm", event.target, "ne0Tt5mezDB9d2EEa");
    name.current.value = "";
    email.current.value = "";
    text.current.value = "";
  };
  return /* @__PURE__ */ jsxs(Element$1, {
    name: "contact",
    className: "contact",
    children: [/* @__PURE__ */ jsx(Title, {
      children: "Contactame"
    }), /* @__PURE__ */ jsx("div", {
      className: "formContainer",
      children: /* @__PURE__ */ jsxs("form", {
        onSubmit: (event) => handleSubmit(event),
        children: [/* @__PURE__ */ jsx("input", {
          ref: name,
          type: "text",
          name: "name",
          placeholder: "Nombre",
          required: true
        }), /* @__PURE__ */ jsx("input", {
          ref: email,
          type: "email",
          name: "email",
          placeholder: "Correo Electronico",
          required: true
        }), /* @__PURE__ */ jsx("textarea", {
          ref: text,
          rows: "10",
          cols: "40",
          name: "text",
          placeholder: "Tu mensaje",
          required: true
        }), /* @__PURE__ */ jsx("button", {
          type: "submit",
          children: "Enviar"
        })]
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "redes",
      children: [/* @__PURE__ */ jsx("a", {
        href: "https://github.com/CristianmMst",
        target: "_blank",
        children: /* @__PURE__ */ jsx("i", {
          className: "fa-brands fa-github icon"
        })
      }), /* @__PURE__ */ jsx("a", {
        href: "https://www.linkedin.com/in/cristian-mora-6342a4248/",
        target: "_blank",
        children: /* @__PURE__ */ jsx("i", {
          className: "fa-brands fa-linkedin icon"
        })
      })]
    })]
  });
};
__astro_tag_component__(Contact, "@astrojs/react");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="generator"', '>\n    <meta name="viewport" content="width=device-width">\n    <link rel="icon" type="image/png" href="https://img.icons8.com/emoji/344/waving-hand-emoji.png">\n    \n    <script src="https://kit.fontawesome.com/d65958ccd9.js" crossorigin="anonymous"><\/script>\n    <title>Portafolio | Cristian Mora</title>\n  ', "</head>\n  <body>\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead($$result), renderComponent($$result, "Navbar", NavBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Cristian/Proyectos/Portfolio/src/components/NavBar/NavBar", "client:component-export": "default" }), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Cristian/Proyectos/Portfolio/src/components/Header/Header", "client:component-export": "default" }), renderComponent($$result, "About", About, {}), renderComponent($$result, "Projects", Projects, {}), renderComponent($$result, "Skills", Skills, {}), renderComponent($$result, "Contact", Contact, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Cristian/Proyectos/Portfolio/src/components/Contact/Contact", "client:component-export": "default" }));
}, "C:/Users/Cristian/Proyectos/Portfolio/src/pages/index.astro");

const $$file = "C:/Users/Cristian/Proyectos/Portfolio/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
