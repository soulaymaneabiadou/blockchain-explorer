import Layout from '../components/Layout';
import Block from '../components/Block';

const Blocks = ({ chain }) => {
  return (
    <Layout>
      <h1 className='text-3xl capitalize font-medium'>Blocks explorer</h1>

      <div className='mt-4 grid gap-4 lg:grid-cols-3 w-full'>
        {chain.map((block) => (
          <Block key={block.hash} block={block} />
        ))}
      </div>
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
