import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Siga o novo sabor" />
      <h1 className="app__header-h1">A chave para o melhor restaurante</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>Texto generico para ser colocacao abaixo do header com infomacoes relevantes as coisas principais que sao oferecidas pelos servicos ou produtos mostrados </p>
      <button type="button" className="custom__button">Explorar Agora</button>
    </div>
    <div className="app__wrapper_img">
    <img  src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;


