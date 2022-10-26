import { trackPromise } from 'react-promise-tracker';

export const SearchDrinks = async (query: String): Promise<any> => {
    let res: any = [];
    await trackPromise(
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`))
        .then(res => res.json())
        .then(data => res = data.drinks)
    return res;
}

