import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import useAddresses from '../hooks/useAddresses';

const ConductTransaction = () => {
  const router = useRouter();
  const { addresses } = useAddresses();
  const [transaction, setTransaction] = useState({
    recipient: '',
    amount: 0
  });

  const handleChange = (e) => {
    setTransaction({
      ...transaction,
      [e.target.name]:
        e.target.type == 'number' ? +e.target.value : e.target.value
    });
  };

  const conductTransaction = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/api/transact', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    });

    const data = await res.json();

    router.push('/transaction-pool');
  };

  return (
    <Layout>
      <Head>
        <title>Conduct Transaction | Blockchain</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='mx-auto max-w-2xl'>
        <h1 className='text-2xl capitalize font-medium'>Conduct Transaction</h1>

        <form className='mt-4 ' onSubmit={conductTransaction}>
          <div className='relative inline-block w-full'>
            <div className='w-full'>
              <label
                htmlFor='recipient'
                className='block text-sm font-medium text-gray-700'>
                Recipient
              </label>
              <select
                id='recipient'
                name='recipient'
                onChange={handleChange}
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm'>
                <option value=''>Known Addresses</option>
                {addresses?.map((address) => (
                  <option key={address} value={address}>
                    {address?.substr(0, 75)}...
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='relative inline-block w-full mt-4'>
            <div className='w-full'>
              <label
                htmlFor='recipient'
                className='block text-sm font-medium text-gray-700'>
                Amount
              </label>
              <input
                id='amount'
                name='amount'
                type='number'
                min={0}
                onChange={handleChange}
                className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm'
              />
            </div>
          </div>

          <button
            type='submit'
            className='mt-5 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800'>
            Transuct
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ConductTransaction;
