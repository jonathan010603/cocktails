import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react';
import { Header } from '../../components';
import { MealPageContext } from '../../contexts/mealPagectx';
import { FetchId } from '../../services/api';
import styles from "./meal.module.scss";

type queries = {
    id?: string
}

const Meal = () => {
    const MealCtx = useContext(MealPageContext);
    const [pageData, setPageData] = useState<any>();
    const router = useRouter();
    const { id }: queries = router.query

    useEffect(() => {
        FetchId(id)
            .then(data => setPageData(data))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>{pageData?.strMeal}</h1>
                <img className={styles.image} src={pageData?.strMealThumb} />
            </main>
        </>
    )
}

export default Meal;