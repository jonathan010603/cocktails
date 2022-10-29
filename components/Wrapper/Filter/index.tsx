import { useContext } from "react";
import { GlobalContext } from "../../../contexts/mealsCtx";
import styles from "./filter.module.scss";

const Filter = () => {
    const ctx = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            {ctx.meals.length} results
            <span className={styles.filter}>
                Filters
                <img className={styles.img} src="/expand.svg" />
            </span>
        </div>
    );
}

export default Filter;