import useSWR from 'swr';
import fetcher from '@utils/fetcher';

function usePool() {
  const { data, error } = useSWR(
    `http://localhost:5000/api/transactions`,
    fetcher
  );

  return {
    pool: data,
    isLoading: !error && !data,
    isError: error
  };
}

export default usePool;
