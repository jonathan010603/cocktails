import { useContext } from "react";
import { GlobalContext } from "../../../contexts/drinksCtx";
import styles from "./filter.module.scss";

const Filter = () => {
    const ctx = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            {ctx.drinks.length} results
            <span className={styles.filter}>
                Filters
                <img className={styles.img} src="/expand.svg" />
            </span>
        </div>
    );
}

export default Filter;