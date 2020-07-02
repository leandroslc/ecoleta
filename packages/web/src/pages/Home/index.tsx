/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FiLogIn } from 'react-icons/fi';
import { Header, Layout, PageContent, Button, Image } from '../../components';
import styles from './styles';
import homeImg from '../../assets/home.svg';

const Home = () => {
  return (
    <Layout>
      <Header />

      <PageContent>
        <div css={styles.container}>
          <section css={styles.descriptionContainer}>
            <h1 css={styles.title}>Seu marketplace de coleta de resíduos.</h1>
            <p css={styles.subTitle}>
              Ajudamos pessoas a encontrarem pontos de coleta de forma
              eficiente.
            </p>

            <Button component="a" href="/cadastro" icon={FiLogIn}>
              Cadastre um ponto de coleta
            </Button>
          </section>
          <aside css={styles.imageContainer}>
            <Image src={homeImg} alt="Imagem de fundo da página inicial" />
          </aside>
        </div>
      </PageContent>
    </Layout>
  );
};

export default Home;
