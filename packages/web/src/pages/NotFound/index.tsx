/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link as RouteLink } from 'react-router-dom';
import { Header, Layout, Link, PageContent } from '../../components';
import * as styles from './styles';

const NotFound = () => {
  return (
    <Layout>
      <Header />
      <PageContent>
        <section css={styles.container}>
          <h1 css={styles.title}>
            Página não encontrada <span aria-hidden="true">😕</span>
          </h1>
          <Link as={RouteLink} to="/">
            Voltar para o início
          </Link>
        </section>
      </PageContent>
    </Layout>
  );
};

export default NotFound;
