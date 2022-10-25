import styles from "./card.module.scss"

interface ICard {
    title: string,
    imgSrc: string
}

const Card = ({ title, imgSrc }: ICard) => {
    return (
        <div className={styles.card}>
            <div className={styles.title}>{title}</div>
            <img src={imgSrc} className={styles.image} />
        </div>
    );
}

export default Card;