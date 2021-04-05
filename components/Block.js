const Block = ({ block }) => {
  const { timestamp, lastHash, hash, data, difficulty, nonce } = block;

  return (
    <div className='md:flex-1 bg-gray-100 px-6 py-4 rounded-md shadow-lg'>
      <div className=''>
        <h4 className='text-xl inline'>{hash.substr(0, 15)}</h4>
        <h4 className='text-lg'>{lastHash?.substr(0, 15) ?? '-'}</h4>
        <p className='mt-1 text-sm text-gray-600'>
          {new Date(timestamp).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default Block;
