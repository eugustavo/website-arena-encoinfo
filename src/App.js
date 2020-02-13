import React from 'react';
import './App.css';

import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { FaGamepad, FaQuoteRight } from 'react-icons/fa'

import logo from './assets/logo.png';
import avatar from './assets/avatar.png';

function App() {
  function toggleMenu(){
    const selectElement = (s) => document.querySelector(s);

    selectElement('.open').addEventListener('click', ()=> {
      selectElement('.nav-list').classList.add('active');
    });

    selectElement('.close').addEventListener('click', ()=> {
      selectElement('.nav-list').classList.remove('active');
    });
  }
  return (
    <>
      <div className="App">

        <header>
          <div className="container">
            <nav>
              <div className="nav-brand">
                <a href="index.html">
                  <img src={logo} alt="Arena" />
                </a>
              </div>

              <div className="menu-icons open">
                <i><IoIosMenu onClick={toggleMenu}/></i>
              </div>

              <ul className="nav-list">
                <div className="menu-icons close">
                  <i><IoIosClose onClick={toggleMenu}/></i>
                </div>

                <li className="nav-item">
                  <a href className="nav-link"> Home</a>
                </li>
                <li className="nav-item">
                  <a href="#games" className="nav-link"> Jogos</a>
                </li>
                <li className="nav-item">
                  <a href="#contato" className="nav-link"> Contato</a>
                </li>
                <li className="nav-item">
                  <a href className="nav-link current"> Inscrição</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>

          <section className="home">
            <div className="container">
              <div className="main-message">
                <h4> Encoinfo </h4>
                <h1>ARENA</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi aliquid nam at quibusdam asperiores?
                  Porro rerum nisi delectus mollitia! Nisi odit quae odio repellendus sint ex, dolores nulla nam!
                </p>

                <div className="cta">
                  <a href className="btn"> Saiba mais </a>
                </div>
              </div>
            </div>
          </section>


          

          <section className="games">
            <div className="container">
              <div className="title-heading">
                {/* <h3>Games</h3> */}
                <h1 id="games">Três Jogos para Competir</h1>
                <p> Batalhe pela vitória! </p>
              </div>

              <div className="activities-grid">

                <div className="activities-grid-item lol">
                  <i className="icon-games"><FaGamepad /></i>
                  <h1>League of Legends</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi hic quod reiciendis quam.
                    Accusantium debitis optio rem dolor maxime est eum odio maiores molestias explicabo. Blanditiis quasi vitae minima.
                  </p>
                </div>

                <div className="activities-grid-item cs">
                  <i className="icon-games"><FaGamepad /></i>
                  <h1>CS:GO</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi hic quod reiciendis quam.
                    Accusantium debitis optio rem dolor maxime est eum odio maiores molestias explicabo. Blanditiis quasi vitae minima.
                  </p>
                </div>

                <div className="activities-grid-item fifa">
                  <i className="icon-games"><FaGamepad /></i>
                  <h1>FIFA</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi hic quod reiciendis quam.
                    Accusantium debitis optio rem dolor maxime est eum odio maiores molestias explicabo. Blanditiis quasi vitae minima.
                  </p>
                </div>
              </div>
            </div>
          </section>


          <section className="contato">
            <div className="container">
              <div className="testimonial">
                <div className="testimonial-text-box">
                  <p>Melhor campeonato de e-sports que a ULBRA/CEULP já fez!</p>
                  <i className="icon-quote"><FaQuoteRight /></i>
                </div>
                <div className="testimonial-customer">
                  <img src={avatar} alt="Avatar"/>
                  <h1>Gustavo S.</h1>
                </div>
              </div>
            </div>
          </section>



          <section className="contato-mesmo">
            <div className="container">
              <div className="title-heading">
                <h1 id="contato">Contato</h1>
                <p> Dúvidas? 🤔 </p>
              </div>
              <div className="contato-grid">
                
                <div className="contato-grid-item">
                  <p>
                    Sistemas de Informação<br></br>
                    Ciências da Computação<br></br>
                    Redes de Computadores<br></br>
                    Engenharia de Software
                  </p>
                </div>


                <div className="contato-grid-item">
                  <p>
                  Prédio 07 Sala 708<br></br>
                  3219-8125<br></br>
                  sistinfo@ceulp.edu.br<br></br>
                  comp@ceulp.edu.br
                  </p>
                </div>

              </div>
              <a href className="btn"> Enviar e-mail </a>
            </div>
          </section>

        </main>

        <footer>
          <p>&copy; 2020 Arena Encoinfo. All rights reserved</p>
        </footer>

      </div>
    </>
  );
}

export default App;
