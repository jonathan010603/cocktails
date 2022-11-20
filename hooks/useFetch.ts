import { trackPromise } from 'react-promise-tracker';
import useSWR from 'swr';

export const useFetch = (url: string) => {
  const { data, error } = useSWR(url, async (url) => {
    const res = await trackPromise(fetch(url));
    const data = await res.json();

    if (data.meals) {
      if (data.meals.length === 0) {
        return [];
      } else {
        return data.meals;
      }
    } 
    
    else if (data.categories) {
      if (data.categories.length === 0) {
        return [];
      } else {
        return data.categories;
      }
    }
  });

  return { data, error };
};
