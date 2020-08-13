import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <div>
          <strong>Teacher Name</strong>
          <span>Matéria</span>
        </div>
      </header>

      <p>biografia</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80, 00</strong>
        </p>
        <a href="#">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
