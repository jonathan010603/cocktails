import { usePromiseTracker } from "react-promise-tracker";
import { GlobalContext } from "../../contexts/mealsCtx";
import { CircleLoader } from "../../components";
import { useContext } from "react";
import styles from "./wrapper.module.scss";
import Filter from "./Filter";
import Card from "./Card";


const Wrapper = () => {
    const { promiseInProgress } = usePromiseTracker();
    const ctx = useContext(GlobalContext);

    return (
        <>
            {ctx.meals.length > 0 && <Filter />}
            {promiseInProgress
                ? <CircleLoader />
                : <div id="searchField" className={styles.container}>
                    {
                        ctx.meals.map(
                            (meal: any) => <Card title={meal.strMeal} imgSrc={meal.strMealThumb} id={meal.idMeal} />
                        )
                    }
                </div>
            }
        </>
    );
}

export default Wrapper;