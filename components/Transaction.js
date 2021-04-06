const Transaction = ({ transaction }) => {
  const { input, outputMap } = transaction;
  const recipients = Object.keys(outputMap);

  return (
    <div className='py-2 px-0 mt-3 rounded-md w-full'>
      <h1 className='text-gray-900 font-medium'>
        From: {input.address.substr(0, 18)}
        {input.address.length > 18 && '...'}
      </h1>
      {input.amount && (
        <p className='text-gray-500 text-base'>Balance: {input.amount}</p>
      )}

      <div className='flex space-x-4 flex-wrap'>
        {recipients.map((recipient) => (
          <div className='bg-white shadow-md rounded p-3 mt-2'>
            <h1>
              To: {recipient.substr(0, 18)}
              {recipient.length > 18 && '...'}
            </h1>
            <p className='text-gray-500 text-sm'>
              Sent: {outputMap[recipient]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
