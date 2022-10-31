import { usePromiseTracker } from "react-promise-tracker";
import { GlobalContext } from "../../contexts/globalctx";
import { CircleLoader } from "../../components";
import { useContext, useState } from "react";
import styles from "./wrapper.module.scss";
import Filter from "./Filter";
import Card from "./Card";
import Modal from "./Modal";


const Wrapper = () => {
    const { promiseInProgress } = usePromiseTracker();
    const ctx = useContext(GlobalContext);

    const [cardsAmount, setAmount] = useState(0);

    return (
        <>
            <Modal />
            {ctx.meals.length > 0 && <Filter cardsAmount={cardsAmount} />}
            {promiseInProgress
                ? <CircleLoader />
                : <div id="searchField" className={styles.container}>
                    {
                        ctx.meals.map((meal: any) =>
                            ctx.globalFilter.map((option: any) =>
                                meal.strCategory === option.label
                                &&
                                < Card
                                    key={meal.idMeal}
                                    id={meal.idMeal}
                                    title={meal.strMeal}
                                    imgSrc={meal.strMealThumb}
                                />
                            )
                        )
                    }

                </div>
            }
        </>
    );
}

export default Wrapper;