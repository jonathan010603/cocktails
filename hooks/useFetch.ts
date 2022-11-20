import { trackPromise } from 'react-promise-tracker';
import useSWR from 'swr';

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    const res = await trackPromise(fetch(url));
    const data = await res.json();

    if (data.meals.length === 0) return [];

    return data.meals;
  });

  return { data, error };
};
