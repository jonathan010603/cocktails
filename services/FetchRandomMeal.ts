import { trackPromise } from 'react-promise-tracker';
import { IMeal } from '../data/types';

const FetchRandomMeal = async (): Promise<Array<IMeal>> => {
  let result: Array<IMeal> = [];
  await trackPromise(
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  )
    .then((res) => res.json())
    .then((data) => (result = data.meals[0]));
  result === null && (result = []);
  return result;
};

export default FetchRandomMeal;
