import { trackPromise } from 'react-promise-tracker';

export interface IMeal {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strSource: string;
  strYoutube: string;
}

const FetchWithWord = async (query: string): Promise<Array<IMeal>> => {
  let result: Array<IMeal> = [];
  await trackPromise(
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
  )
    .then((res) => res.json())
    .then((data) => (result = data.meals));
  result === null && (result = []);
  return result;
};

export default FetchWithWord;
