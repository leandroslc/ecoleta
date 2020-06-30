import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Header, Page, PageContent } from '../../components';
import './styles.scss';
import Background from './Background';

export const Home = () => {
  return (
    <Page>
      <Header />

      <PageContent>
        <section>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <a href="/cadastro">
            <FiLogIn />
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </section>
        <Background />
      </PageContent>
    </Page>
  );
}

export default Home;
