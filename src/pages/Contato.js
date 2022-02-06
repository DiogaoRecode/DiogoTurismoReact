import React from 'react';
import BannerImage from '../assets/Contato.jpg';
import '../styles/Contato.css';

const Contato = () => {
  return (
  <div className="contact">
<div className= "leftSide" style={{backgroundImage:`url(${BannerImage})`}}></div>
<div className="rightSide">
<h1> <span>Contato</span></h1>
<form id="contact-form" method="POST">
<label htmlFor="name">Nome completo</label>
<input name="name" placeholder="Digite o seu nome..." type="text" />
<label htmlFor="email">Email</label>
<input name="email" placeholder="Digite o seu email..." type="email" />
<label htmlFor="message">Messagem</label>
<textarea row="7" placeholder="Enviando mensagem..."  name="mensagem"  required>
</textarea>
<button type="submit">Enviar mensagem</button>

</form>

</div>
  </div>
  );
};

export default Contato;
