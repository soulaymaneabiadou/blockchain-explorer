import Transaction from './Transaction';

const Modal = ({ block, hidden, onClose }) => {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${hidden && 'hidden'}`}
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
            hidden
              ? 'ease-in duration-200 opacity-0'
              : 'ease-out duration-300 opacity-100'
          }`}
          aria-hidden='true'
          onClick={onClose}></div>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'>
          &#8203;
        </span>

        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-96 sm:max-w-7xl sm:w-full ${
            hidden
              ? 'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              : 'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100'
          }`}>
          <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
            <div className='mt-3 sm:mt-0 sm:text-left'>
              <h3
                className='text-2xl leading-6 font-medium text-gray-900'
                id='modal-title'>
                Block Detailes
              </h3>
              <div className='mt-2'>
                <span className='text-sm text-gray-400'>
                  Mined At: {new Date(block?.timestamp).toString()}
                </span>
                <p className='text-lg mt-4 text-gray-800'>
                  Hash: {block?.hash}
                </p>

                {block?.lastHash && (
                  <p className='text-base mt-2 text-gray-600'>
                    Last Hash: {block?.lastHash}
                  </p>
                )}

                <p className='text-base mt-4 text-gray-800'>
                  Data(Transactions) :
                </p>
                <div className=''>
                  {block?.data?.map((transaction) => (
                    <Transaction transaction={transaction} />
                  ))}
                </div>

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
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <button
              onClick={onClose}
              type='button'
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm'>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
