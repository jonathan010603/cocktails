import { useContext, useEffect, useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { GlobalContext } from "../../contexts/globalctx";
import { CircleLoader } from "../../components";
import styles from "./wrapper.module.scss";
import Filter from "./Filter";
import Card from "./Card";
import Modal from "./Modal";


const Wrapper = () => {
    const { promiseInProgress } = usePromiseTracker();
    const [items, setItems] = useState<Array<Object>>([]);
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

    const filterItems = () => {
        ctx.globalFilter.length === 0 && ctx.meals.length > 0
            ? (
                setItems([]),
                ctx.meals.map(
                    (meal: any) =>
                        setItems((items) => [...items, meal])
                )
            )
            : (
                setItems([]),
                ctx.meals.map(
                    (meal: any) =>
                        ctx.globalFilter.map(
                            (option: any) =>
                                meal.strCategory === option.label
                                && setItems((items) => [...items, meal])
                        )
                ))
    }

    useEffect(() => filterItems(), [ctx.meals, ctx.globalFilter])

    return (
        <>
            <Modal />
            {ctx.meals.length > 0 && <Filter cardsAmount={items.length} />}
            {promiseInProgress
                ? <CircleLoader />
                : <div id="searchField" className={styles.container}>
                    {
                        items.map(
                            (item) => renderCard(item)
                        )
                    }

                </div>
            }
        </>
    );
}

export default Wrapper;