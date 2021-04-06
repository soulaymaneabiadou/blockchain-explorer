import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Block from '../components/Block';
import Modal from '../components/Modal';
import useChain from '../hooks/useBlocks';

const Blocks = (props) => {
  const router = useRouter();
  const { chain } = useChain({ initialData: props.chain });
  const [selected, setSelected] = useState({});

  return (
    <Layout>
      <Head>
        <title>Blocks | Blockchain</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl capitalize font-medium'>Blocks explorer</h1>

      <div className='flex flex-col relative my-10 blocks'>
        {chain.map((block) => (
          <Block key={block.hash} block={block} setSelected={setSelected} />
        ))}
      </div>

      <Modal
        hidden={!router.query.hash}
        block={selected}
        onClose={() => router.push('/blocks')}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:5000/api/blocks`);
  const chain = await res.json();

  return {
    props: {
      chain
    }
  };
}

export default Blocks;
