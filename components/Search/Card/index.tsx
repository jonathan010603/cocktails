import styles from './Card.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import { selectedMealContext } from '../../../context/selectedMealCtx';
import { IMeal } from '../../../data/types';

interface IProps {
  content: IMeal;
  redirectTo: string;
}

const Card = ({ content }: IProps) => {
  const selectedMealCtx = useContext(selectedMealContext);
  return (
    <Link href={`/meals/${content.idMeal}`} className={styles.container}>
      <span className={styles.title}>
        {content.strMeal.length > 15
          ? content.strMeal.substring(0, 15) + '...'
          : content.strMeal}
      </span>
      <img className={styles.image} src={content.strMealThumb} />
    </Link>
  );
};

export default Card;
