import useSWR from 'swr';
import fetcher from '@utils/fetcher';

function useChain(config) {
  const { data, error } = useSWR(
    `http://localhost:5000/api/blocks`,
    fetcher,
    config
  );

  return {
    chain: data,
    isLoading: !error && !data,
    isError: error
  };
}

export default useChain;
