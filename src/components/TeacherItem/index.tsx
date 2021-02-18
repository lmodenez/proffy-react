import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem () {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/36903855?s=460&u=a6a5353deb59504b120dcc60ed6c6eb4cde06923&v=4" alt="Luiz Pedro"/>
        <div>
          <strong>Luiz Pedro</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <br /><br />
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;