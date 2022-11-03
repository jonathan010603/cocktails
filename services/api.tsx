import { trackPromise } from 'react-promise-tracker';

export const FetchWord = async (query: String): Promise<any> => {
    let result: Array<Object> = [];
    await trackPromise(
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`))
        .then(res => res.json())
        .then(data => result = data.meals)
    result === null && (result = []);
    return result;
}