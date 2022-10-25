import { SearchDrinks } from "../../services/app.service";
import styles from "./button.module.scss"

const Button = ({ clicked }: any) => {

    return (
        <button className={styles.button} onClick={clicked}>
            Search
        </button>
    );
}

export default Button;