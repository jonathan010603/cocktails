import { useContext, useRef } from "react";
import { GlobalContext } from "../../contexts/globalctx";
import { FetchApi } from "../../services/api";
import styles from "./search.module.scss";

const Search = () => {
    const ctx = useContext(GlobalContext);
    const input = useRef<any>("");

    const getMeals = () => {
        ctx.setMeals([]);
        input.current.value.length > 0
            ? FetchApi(input.current.value)
                .then(data => ctx.setMeals(data))
                .catch(ctx.setError(true))
            : (ctx.setError(true));
    }

    const border = {
        borderColor: ctx.error === true
            ? "red"
            : "inherit"
    }

    return (

        <div id="SearchInput" className={styles.container}>
            <input
                type="text"
                ref={input}
                style={border}
                className={styles.input}
                placeholder="What would you like?"
                onInput={() => ctx.setError(false)}
            />
            <img className={styles.icon} src="/search.svg" onClick={getMeals} />
        </div>
    );
}

export default Search;