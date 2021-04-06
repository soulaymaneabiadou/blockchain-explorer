import useSWR from 'swr';
import fetcher from '../utils/fetcher';

function useWallet() {
  const { data, error } = useSWR(
    `http://localhost:5000/api/wallet-info`,
    fetcher
  );

  return {
    wallet: data,
    isLoading: !error && !data,
    isError: error
  };
}

export default useWallet;
