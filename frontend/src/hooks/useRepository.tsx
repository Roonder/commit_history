import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export function useRepository() {
    const { data, error, isLoading } = useSWR('/repos/roonder/commit_history', fetcher);

    return {
        repository: data?.data,
        isLoading,
        isError: error,
    }
}