import { useEffect, useMemo, useState } from 'react';
import { Header } from '../../components';
import useGetIngredients from '../../Hooks/useGetIngredients';
import styles from "./meal.module.scss";

type props = {
    pageData?: any
}

const Page = ({ pageData }: props) => {

    let instructions = pageData?.strInstructions;

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{pageData?.strMeal}</h1>
                <img className={styles.image} src={pageData?.strMealThumb} />
                <div className={styles.instrContainer}>
                    • {instructions.replaceAll('\r\n', '.\n• ')}
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