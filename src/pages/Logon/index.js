import React from 'react';
import { FiLogIn } from 'react-icons/fi'; 
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1> Faça seu logon </h1>

          <input placeholder="Sua ID" />
          <button className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn color='#e02041' size={16} />
            Não tenho cadastro</a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
