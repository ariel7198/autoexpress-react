import logo from './imgs/logo_white.png';
import './App.css';
import { IconContext } from 'react-icons';
import { GrFacebookOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <section className="header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <ul className="social-icons-ul">
            <IconContext.Provider value={{ className: 'social-icons', size: '1.6em' }}>
              <li> <GrFacebookOption /> </li>
              <li><FiInstagram /> </li>
              <li> <FaDiscord /> </li>
            </IconContext.Provider>
          </ul>
        </div>

      </section>
      <section className="jumbotron">
        <h1>AUTOEXPRESS </h1>
        <h2>Logística </h2>
      </section>

      <section className="about">
        <h2> Você não precisa jogar sozinho </h2>
        <h3> Somos mais que uma empresa, somos um grupo </h3>
        <p> Nosso objetivo é permitir que todos tenham a oportunidade de jogar em grupo e tenham a melhor experiência
          possível em comboios </p>
      </section>

      <section className="benefits">
        <h2> Você não precisa jogar sozinho </h2>
        <h3> Somos mais que uma empresa, somos um grupo </h3>
        <p> Nosso objetivo é permitir que todos tenham a oportunidade de jogar em grupo e tenham a melhor experiência
          possível em comboios </p>
      </section>
    </div>
  );
}

export default App;
