import useSWR from 'swr';
import fetcher from '../utils/fetcher';

function useAddresses() {
  const { data, error } = useSWR(
    `http://localhost:5000/api/addresses`,
    fetcher
  );

  return {
    addresses: data,
    isLoading: !error && !data,
    isError: error
  };
}

export default useAddresses;
