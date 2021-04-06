import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Blockchain</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Home</h1>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const { res } = context;
  res.writeHead(301, { location: '/blocks' });
  res.end();
};

export default Home;
