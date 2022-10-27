import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/drinksCtx";
import styles from "./card.module.scss"

interface ICard {
    title: string,
    imgSrc: string
}

const Card = ({ title, imgSrc }: ICard) => {
    const ctx = useContext(GlobalContext);

    useEffect(() => ctx.drinks.length > 0 && ctx.setError(false), [ctx.drinks.length]);

    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <img src={imgSrc} className={styles.image} />
        </div>
    );
}

export default Card;