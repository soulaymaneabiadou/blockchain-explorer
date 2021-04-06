import { useEffect, useState } from 'react';
import Link from 'next/link';
import useWallet from '../hooks/useWallet';

const Header = () => {
  const { wallet } = useWallet();
  const [hideWallet, setHideWallet] = useState(true);
  const [addressCopied, setAddressCopied] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);

  const copyAddress = () => {
    navigator.clipboard.writeText(wallet?.address);
    setAddressCopied(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setAddressCopied(false);
    }, 1500);
  }, [addressCopied]);

  return (
    <div className='relative bg-white'>
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <a className='text-lg font-medium text-gray-800 hover:text-gray-900'>
                Blockchain
              </a>
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              type='button'
              onClick={() => setHideMenu(!hideMenu)}
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'
              aria-expanded='false'>
              <span className='sr-only'>Open menu</span>
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          <nav className='hidden md:flex space-x-10'>
            <Link href='/conduct-transaction'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Conduct Transactions
              </a>
            </Link>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Docs
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'>
              Repo
            </a>
          </nav>

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <div className='ml-3 relative'>
              <div>
                <button
                  onClick={() => setHideWallet(!hideWallet)}
                  type='button'
                  className='focus:outline-none text-base font-medium text-gray-500 hover:text-gray-900'
                  id='user-menu'
                  aria-expanded='false'
                  aria-haspopup='true'>
                  Wallet
                </button>
              </div>

              <div
                className={`origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  hideWallet
                    ? 'transition ease-in duration-75 transform opacity-0 scale-95'
                    : 'transition ease-out duration-100 transform opacity-100 scale-100'
                }`}
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='user-menu'>
                <div
                  href='#'
                  className='flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'>
                  Address: {wallet?.address?.substr(0, 15)}...
                  <span
                    className='cursor-pointer text-gray-500 hover:text-gray-900'
                    onClick={copyAddress}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      {addressCopied ? (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                        />
                      ) : (
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                        />
                      )}
                    </svg>
                  </span>
                </div>

                <a
                  href='#'
                  className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                  role='menuitem'>
                  Balance: {wallet?.balance}
                </a>
              </div>
            </div>

            <Link href='/blocks'>
              <a className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800'>
                Blocks Explorer
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 inset-x-0 transition transform origin-top-right md:hidden ${
          !hideMenu
            ? 'duration-200 ease-out opacity-100 scale-100'
            : 'duration-100 opacity-0 scale-95 ease-in hidden'
        }`}>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-4 pb-6 px-4 bg-white'>
            <div className='flex items-center justify-between'>
              <div>
                <a href='#'>
                  <span className='font-medium'>Blockchain</span>
                </a>
              </div>
              <div className='-mr-2'>
                <button
                  type='button'
                  onClick={() => setHideMenu(!hideMenu)}
                  className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'>
                  <span className='sr-only'>Close menu</span>
                  <svg
                    className='h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className='mt-6 bg-white'>
              <nav className='grid gap-y-8'>
                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                    />
                  </svg>
                  <span className='ml-3 text-base font-medium text-gray-900'>
                    Analytics
                  </span>
                </a>

                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                    />
                  </svg>
                  <span className='ml-3 text-base font-medium text-gray-900'>
                    Engagement
                  </span>
                </a>

                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    />
                  </svg>
                  <span className='ml-3 text-base font-medium text-gray-900'>
                    Security
                  </span>
                </a>

                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                    />
                  </svg>
                  <span className='ml-3 text-base font-medium text-gray-900'>
                    Integrations
                  </span>
                </a>

                <a
                  href='#'
                  className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 text-gray-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                    />
                  </svg>
                  <span className='ml-3 text-base font-medium text-gray-900'>
                    Automations
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div className='py-6 px-5 space-y-6'>
            <div>
              <Link href='/blocks'>
                <a className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600 hover:bg-gray-700'>
                  Blocks Explorer
                </a>
              </Link>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                <Link
                  href='/'
                  className='ml-1 text-gray-600 hover:text-gray-500'>
                  Profile
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
