import { usePromiseTracker } from "react-promise-tracker";
import { GlobalContext } from "../../contexts/globalctx";
import { CircleLoader } from "../../components";
import { useContext } from "react";
import styles from "./wrapper.module.scss";
import Filter from "./Filter";
import Card from "./Card";
import Modal from "./Modal";


const Wrapper = () => {
    const { promiseInProgress } = usePromiseTracker();
    const ctx = useContext(GlobalContext);

    return (
        <>
            {ctx.filterModal && <Modal />}
            {ctx.meals.length > 0 && <Filter />}
            {promiseInProgress
                ? <CircleLoader />
                : <div id="searchField" className={styles.container}>
                    {
                        ctx.meals.map((meal: any) =>
                            <Card
                                key={meal.idMeal}
                                id={meal.idMeal}
                                title={meal.strMeal}
                                imgSrc={meal.strMealThumb}
                            />
                        )
                    }
                </div>
            }
        </>
    );
}

export default Wrapper;