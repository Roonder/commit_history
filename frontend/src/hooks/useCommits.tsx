import useSWR from 'swr';
import fetcher from '../lib/fetcher';

export function useCommits() {
    const { data, error, isLoading, mutate } = useSWR('/repos/roonder/commit_history/commits', fetcher);

    return {
        commits: data?.data,
        isLoading,
        isError: error,
        mutate
    }
}