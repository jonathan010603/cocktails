import { IMeal } from '../../../services/FetchWithWord';
import styles from './Card.module.css';
import Link from 'next/link';

const Card = ({ content }: { content: IMeal }) => {
  return (
    <Link href={`/meals/${content.strMeal}`} className={styles.container}>
      <span className={styles.title}>{content.strMeal}</span>
      <img className={styles.image} src={content.strMealThumb} />
    </Link>
  );
};

export default Card;
