import { useEffect, useState } from 'react';
import { Header } from '../../components';
import styles from "./meal.module.scss";

type props = {
    pageData?: any
}

const Page = ({ pageData }: props) => {
    const [ingredients, setIngredients] = useState<Array<string>>([])

    const getIngredients = () => {
        if (pageData !== null) {
            for (let i = 1; i <= 20; i++) {
                pageData?.[`strIngredient${i}`].length !== 0 &&
                    setIngredients((ingredients) => (
                        [...ingredients, pageData?.[`strIngredient${i}`]]
                    ))
            }
        }
    }

    useEffect(() => getIngredients(), [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{pageData?.strMeal}</h1>
                <img className={styles.image} src={pageData?.strMealThumb} />
                <div className={styles.ingredients}>
                    {
                        ingredients.length > 0
                        && ingredients.map(
                            (ingredient: string | null) => <li>{ingredient}</li>
                        )
                    }
                </div>
            </main>
        </>
    )
}

export default Page;

export const getStaticProps = async ({ params }: any) => {
    const results = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`).then(r => r.json());
    return { props: { pageData: results.meals[0] } }
}

export const getStaticPaths = async () => {
    const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s').then(r => r.json());
    return {
        paths: data.meals.map((meal: any) => {
            return { params: { id: meal.idMeal } }
        }),
        fallback: false
    }
}