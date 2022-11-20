import styles from '../../styles/Meal.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useFetch } from '../../hooks/useFetch';
import CircleLoader from '../../components/ui/CircleLoader';
import useGetIngredients from '../../hooks/useGetIngredients';

const Meal = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );

  if (!data) return <CircleLoader />;

  let ingredients = useGetIngredients(data[0]);

  return (
    <>
      <div className={styles.imageTextDiv}>
        <div className={styles.imageContainer}>
          <Image
            alt=""
            src={data[0].strMealThumb}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <span className={styles.name}>{data[0].strMeal}</span>
        <div className={styles.info}>
          <span>
            <img src="/assets/world.svg" /> {data[0].strArea}
          </span>
          <span>
            <img src="/assets/category.svg" /> {data[0].strCategory}
          </span>
          {/*<span>‣ Origin: {data[0].strArea}</span>
          <span>‣ Category: {data[0].strCategory}</span>*/}
        </div>
      </div>
      <div className={styles.ingredientsContainer}>
        <div className={styles.ingredientsBar}>Ingredients</div>
        {ingredients.map((ingredient) => (
          <span className={styles.ingredients}>{ingredient}</span>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default Meal;
