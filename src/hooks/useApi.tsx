import { useQuery } from 'react-query';

export const useApi = () => {
    const { isLoading, data, error } = useQuery();
};
