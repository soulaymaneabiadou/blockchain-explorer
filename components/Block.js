const Block = ({ block }) => {
  const { timestamp, lastHash, hash, data, difficulty, nonce } = block;

  return (
    <div className='flex justify-end pr-8 relative my-2 w-1/2 block-item bg-white'>
      <div className='shadow-md rounded-md flex flex-col items-end p-4 relative w-96 lg:max-w-2xl block-content bg-white max-w-full text-center lg:text-left'>
        <time className='text-sm text-gray-400'>
          {new Date(timestamp).toDateString()}
        </time>

        <h4 className='mt-4 text-base lg:text-xl inline'>
          {hash.substr(0, 12)}...
        </h4>
        <h4 className='text-sm lg:text-lg mt-1 text-gray-700'>
          {lastHash ? `${lastHash.substr(0, 12)}...` : 'NONE'}
        </h4>
      </div>
    </div>
  );
};

export default Block;
