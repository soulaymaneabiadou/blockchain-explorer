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
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Blocks Explorer
              </a>
            </Link>

            <Link href='/conduct-transaction'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Conduct Transactions
              </a>
            </Link>

            <Link href='/transaction-pool'>
              <a className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Transaction Pool
              </a>
            </Link>
          </nav>

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='text-base font-medium text-gray-500 hover:text-gray-900 mr-1'
              href='https://github.com/soulaymaneabiadou'>
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth={2}
                strokeLinecap='round'
                strokeLinejoin='round'
                className='h-6 w-6'>
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-0 inset-x-0 transition transform origin-top-right p-2 md:hidden z-10 ${
          !hideMenu
            ? 'duration-200 ease-out opacity-100 scale-100'
            : 'duration-100 opacity-0 scale-95 ease-in hidden'
        }`}>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-4 pb-6 px-4 bg-white'>
            <div className='flex items-center justify-between'>
              <div>
                <a className='text-lg font-medium text-gray-800 hover:text-gray-900'>
                  Blockchain
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
                <div className='relative'>
                  <div>
                    <button
                      onClick={() => setHideWallet(!hideWallet)}
                      type='button'
                      className='-m-3 p-3 flex items-center rounded-md focus:outline-none text-base font-medium text-gray-500 hover:text-gray-900'
                      id='user-menu'
                      aria-expanded='false'
                      aria-haspopup='true'>
                      Wallet
                    </button>
                  </div>

                  <div
                    className={`origin-top-left absolute left-0 mt-2 w-80 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      hideWallet
                        ? 'hidden transition ease-in duration-75 transform opacity-0 scale-95'
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
                  <a className='text-base font-medium text-gray-500 hover:text-gray-900 -m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                    Blocks Explorer
                  </a>
                </Link>

                <Link href='/conduct-transaction'>
                  <a className='text-base font-medium text-gray-500 hover:text-gray-900 -m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                    Conduct Transactions
                  </a>
                </Link>

                <Link href='/transaction-pool'>
                  <a className='text-base font-medium text-gray-500 hover:text-gray-900 -m-3 p-3 flex items-center rounded-md hover:bg-gray-50'>
                    Transaction Pool
                  </a>
                </Link>
              </nav>
            </div>
          </div>
          <div className='py-6 px-5 space-y-6'>
            <div className='flex items-center justify-center w-full'>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-gray-500 hover:text-gray-900 mr-1'
                href='https://github.com/soulaymaneabiadou'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='h-8 w-8'>
                  <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
