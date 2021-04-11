import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '@components/Layout';
import usePool from '@hooks/usePool';
import Transaction from '@components/Transaction';

const TransactionPool = () => {
  const router = useRouter();
  const { pool } = usePool();

  const mineAll = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/transactions/mine', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: ''
    });
    router.push('/blocks');
  };

  return (
    <Layout>
      <Head>
        <title>Transaction Pool | Blockchain</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex items-center justify-between'>
        <h1 className='text-3xl capitalize font-medium'>Transaction Pool</h1>

        {pool && Object.values(pool).length > 0 && (
          <button
            onClick={mineAll}
            className='whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-black'>
            Mine All
          </button>
        )}
      </div>

      <div className='flex flex-col'>
        {pool &&
          Object.values(pool).map((transaction, i) => (
            <div className='mt-3' key={i}>
              <Transaction transaction={transaction} />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default TransactionPool;
