import { IFilters, IMeal } from '../data/types';

interface Iprops {
  data: Array<IMeal>;
  filters: Array<IFilters>;
}

const useFilters = ({ data, filters }: Iprops) => {
  let filteredItems: Array<IMeal> = [];

  if (filters.length === 0) return data;

  data.map((meal) =>
    filters.map(
      (filter) => filter.value === meal.strCategory && filteredItems.push(meal)
    )
  );

  return filteredItems;
};

export default useFilters;
