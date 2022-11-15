import { Dispatch, SetStateAction } from "react";

type Iparams = {
    setIngredients: Dispatch<SetStateAction<string[]>>,
    ingredients: any,
    pageData: any
}

const useGetIngredients = ({ pageData, ingredients, setIngredients }: Iparams) => {
    for (let i = 1; i <= 20; i++) {
        pageData?.[`strIngredient${i}`].length !== 0 &&
            setIngredients((ingredients) => (
                [...ingredients, pageData?.[`strIngredient${i}`]]
            ))
    }
}

export default useGetIngredients;