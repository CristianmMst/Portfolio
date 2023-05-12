import "./Contact.scss";
import { useRef } from "react";
import { Element } from "react-scroll";
import { Title } from "../Title/Title";
import emailJs from "@emailjs/browser";

const Contact = () => {
  const name = useRef();
  const text = useRef();
  const email = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    emailJs.sendForm(
      "service_yg3rrup",
      "template_e5wu4pm",
      event.target,
      "ne0Tt5mezDB9d2EEa"
    );
    name.current.value = "";
    email.current.value = "";
    text.current.value = "";
  };

  return (
    <Element name="contact" className="contact">
      <Title>Contactame</Title>
      <div className="formContainer">
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            ref={name}
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
          <input
            ref={email}
            type="email"
            name="email"
            placeholder="Correo Electronico"
            required
          />
          <textarea
            ref={text}
            rows="10"
            cols="40"
            name="text"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="redes">
        <a href="https://github.com/CristianmMst" target="_blank">
          <i className="fa-brands fa-github icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-mora-6342a4248/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin icon"></i>
        </a>
      </div>
    </Element>
  );
};

export default Contact;
