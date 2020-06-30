import React, { FC } from 'react';
import homeImg from '../../assets/home.svg';

export const Background: FC = () => {
  return (
    <aside className="home-background">
      <img src={homeImg} alt="Imagem de fundo da página inicial" />
    </aside>
  );
}

export default Background;
