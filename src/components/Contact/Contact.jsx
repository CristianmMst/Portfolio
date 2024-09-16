import "./Contact.scss";
import { useRef } from "react";
import emailJs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
      "ne0Tt5mezDB9d2EEa",
    );
    name.current.value = "";
    email.current.value = "";
    text.current.value = "";
  };

  return (
    <div id="contact" className="contact">
      <div className="Title_contact">
        <h1 className="Title-text">Contacto</h1>
        <div className="Title-line"></div>
      </div>
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
          <FaGithub className="icon"></FaGithub>
        </a>
        <a href="https://www.linkedin.com/in/cristianmmst/" target="_blank">
          <FaLinkedin className="icon"></FaLinkedin>
        </a>
      </div>
    </div>
  );
};

export default Contact;
