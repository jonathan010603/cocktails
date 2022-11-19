import { IMeal } from '../../../services/FetchWithWord';
import styles from './Card.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { selectedMealContext } from '../../../context/selectedMealCtx';

interface IProps {
  content: IMeal;
  redirectTo: string;
}

const Card = ({ content }: IProps) => {
  const selectedMealCtx = useContext(selectedMealContext);
  return (
    <Link
      href={`/meals/${content.strMeal}`}
      className={styles.container}
      onClick={() => selectedMealCtx?.setSelectedMeal(content)}
    >
      <span className={styles.title}>{content.strMeal}</span>
      <img className={styles.image} src={content.strMealThumb} />
    </Link>
  );
};

export default Card;
