import logo from './imgs/logo/logo_white.png';
import { useState} from 'react'
import { useEffect} from 'react'
import './App.css';

import Animation from './components/ScrollAnimation'
import Benefitcard from './components/Benefitcard'
import Streamercard from './components/Streamercard'

import { IconContext } from 'react-icons';
import { GrFacebookOption } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';
import { AiFillFormatPainter } from 'react-icons/ai';
import { AiFillGift } from 'react-icons/ai';


function App() {


  return (
    <div className="App">
      <div className='header' >
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <ul className="social-icons-ul">
            <IconContext.Provider value={{ className: 'social-icons', size: '1.6em' }}>
              <li> <a href="https://www.facebook.com/autoexpresslogistica/"> <GrFacebookOption /> </a> </li>
              <li> <a href="https://www.instagram.com/autoexpressvirtual/"> <FiInstagram /> </a> </li>
              <li> <a href="https://www.twitch.tv/autoexpress"> <FaTwitch /> </a> </li>
              <li> <a href="https://discord.com/invite/Zv9K2nE"> <FaDiscord /> </a> </li>
            </IconContext.Provider>
          </ul>
        </div>

      </div>
      <section className="jumbotron">
        <div className="text">
          <h1>AUTOEXPRESS </h1>
          <h2>Logística </h2>
        </div>
        {/* <Animation /> */}
      </section>

      <section className="about">
        <h2> Você <span className='underline'>não</span> precisa jogar sozinho </h2>
        <h3> Somos mais que uma empresa, somos uma família </h3>
        <p> Nosso objetivo é permitir que todos tenham a oportunidade de jogar em grupo e tenham a melhor experiência
          possível em comboios </p>
      </section>
      <section className="benefit-section">
        <div className="benefits-grid">
          <Benefitcard
            title='Tenha amigos para jogar'
            description='Conheça novos jogadores e faça amizades para a vida inteira.'
            icon={<FaUserFriends />}
          />
          <Benefitcard
            title='Comboios'
            description='Comboios oficiais semanais com membros da empresa, e comboios livres durante a semana.'
            icon={<ImTruck />}
          />
          <Benefitcard
            title='Pinturas e MODs'
            description='Tenha acesso a todas as pinturas e mods da empresa'
            icon={<AiFillFormatPainter />}
          />
          <Benefitcard
            title='Prêmios e vale presentes'
            description='Dispute com os membros para ver quem roda mais e granhe prêmios'
            icon={<AiFillGift />}
          />
        </div>
        {/* <Animation /> */}

      </section>

      <section className="discord">
        <div className="discord-print">
          <img src="https://i.imgur.com/AxNkF3s.png" className="discord-img blueShadow" alt="" />
        </div>
        <div className="discord-description">
          <h2> <span className='underline'>Participe </span> do nosso Discord </h2>
          <h3> Faça parte do nosso servidor</h3>
          <p>
            Fique por dentro de todas as novidades da empresa, participe dos comboios, converse
            com todos os membros, jogue conosco e divirta-se!
            </p>
          <IconContext.Provider value={{ className: 'social-icons', size: '2em', style: { marginLeft: '5px' } }}>
            <button className="blue-shadow"> PARTICIPAR <FaDiscord /> </button>
          </IconContext.Provider>
        </div>
      </section>

      <section className="streamers">
        <div className="streamers-description">
          <h2> <span className='underline'>Acompanhe </span> nossos membros  </h2>
          <h3> Conheça nossos membros streamers e acompanhe as lives </h3>
        </div>
        <div className="streamers-grid">
          <Streamercard
            thumb='https://i.imgur.com/50ZcPh7.jpg'
            name='Nandinho'
            description=''
            icon={<GrFacebookOption />}
            platform='facebook'
            link={'https://www.facebook.com/gaming/autoexpresslogistica'}
          />
          <Streamercard
            thumb='https://i.imgur.com/qvn33F4.jpg'
            name='Rinaldo Gameplay'
            description=''
            icon={<GrFacebookOption />}
            platform={'facebook'}
            link={'https://www.facebook.com/gaming/rinaldogameplay'}
          />
          <Streamercard
            thumb='https://i.imgur.com/fK4NG9L.jpg'
            name='Alexandre Gameplay'
            description=''
            icon={<GrFacebookOption />}
            platform={'twitch'}
            link={'https://www.facebook.com/Alexandre-GamePlay-108343850816551'}
          />
        </div>
      </section>
      <div className="float-scroll">
        <Animation />
      </div>
    </div>
  );
}

export default App;
