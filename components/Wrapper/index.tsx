import { usePromiseTracker } from "react-promise-tracker";
import { GlobalContext } from "../../contexts/drinksCtx";
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
            {ctx.drinks.length > 0 && <Filter />}
            {promiseInProgress
                ? <CircleLoader />
                : <div id="searchField" className={styles.container}>
                    {
                        ctx.drinks.map(
                            (drink: any) => <Card title={drink.strDrink} imgSrc={drink.strDrinkThumb} />
                        )
                    }
                </div>
            }
        </>
    );
}

export default Wrapper;