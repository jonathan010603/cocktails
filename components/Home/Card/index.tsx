import { IMeal } from '../../../services/FetchWithWord';
import styles from './Card.module.css';

const Card = ({ content }: { content: IMeal }) => {
  return (
    <div className={styles.container} onClick={() => {}}>
      <span className={styles.title}>{content.strMeal}</span>
      <img className={styles.image} src={content.strMealThumb} />
    </div>
  );
};

export default Card;
