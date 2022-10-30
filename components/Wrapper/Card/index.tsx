import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../../contexts/globalctx";
import styles from "./card.module.scss"

interface ICard {
    title: string,
    imgSrc: string,
    id: string
}

const Card = ({ title, imgSrc, id }: ICard) => {
    const ctx = useContext(GlobalContext);
    const router = useRouter();

    useEffect(() => ctx.meals.length > 0 && ctx.setError(false), [ctx.meals.length]);

    return (
        <div className={styles.card} onClick={() => router.push(`/meal/${id}`)}>
            <div className={styles.title}>{title}</div>
            <img src={imgSrc} className={styles.image} />
        </div>
    );
}

export default Card;