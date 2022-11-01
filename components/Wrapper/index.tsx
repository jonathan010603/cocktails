import { useContext, useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { GlobalContext } from "../../contexts/globalctx";
import { CircleLoader } from "../../components";
import styles from "./wrapper.module.scss";
import Filter from "./Filter";
import Card from "./Card";
import Modal from "./Modal";


const Wrapper = () => {
    const { promiseInProgress } = usePromiseTracker();
    const ctx = useContext(GlobalContext);

    const renderCard = (meal: any) => {
        return (
            < Card
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                imgSrc={meal.strMealThumb}
            />
        );
    }

    return (
        <>
            <Modal />
            {ctx.meals.length > 0 && <Filter />}
            {promiseInProgress
                ? <CircleLoader />
                : <div id="searchField" className={styles.container}>
                    {
                        ctx.globalFilter.length === 0
                            ? ctx.meals.map((meal: any) => renderCard(meal))
                            : ctx.meals.map((meal: any) =>
                                ctx.globalFilter.map(
                                    (option: any) => meal.strCategory === option.label && renderCard(meal)
                                )
                            )
                    }

                </div>
            }
        </>
    );
}

export default Wrapper;