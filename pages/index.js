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

export default Home;
