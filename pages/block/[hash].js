import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';

const BlockDetail = () => {
  const router = useRouter();
  const { hash } = router.query;
  const block = {};

  return (
    <Layout>
      <Head>
        <title>Details | Blockchain</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mt-3 sm:mt-0 sm:text-left'>
        <h3
          className='text-lg leading-6 font-medium text-gray-900'
          id='modal-title'>
          Block Detailes
        </h3>
        <div className='mt-2'>
          <span className='text-sm text-gray-400'>
            Mined At: {new Date(block?.timestamp).toString()}
          </span>
          <p className='text-lg mt-4 text-gray-800'>
            Hash: {block?.hash ?? hash}
          </p>

          {block?.lastHash && (
            <p className='text-base mt-2 text-gray-600'>
              Last Hash: {block?.lastHash}
            </p>
          )}

          <p className='text-base mt-4 text-gray-800'>Data(Transactions) :</p>
          <pre className='bg-gray-100 p-2 mt-1 rounded-md w-full'>
            <code>{JSON.stringify(block?.data, null, 2)}</code>
          </pre>

          <div className='mt-4 flex space-x-12'>
            <span className='inline-block rounded-md bg-gray-200 px-2 py-1 text-sm'>
              Difficulty: {block?.difficulty}
            </span>
            <span className='inline-block rounded-md bg-gray-200 px-2 py-1 text-sm'>
              Nonce: {block?.nonce}
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlockDetail;
