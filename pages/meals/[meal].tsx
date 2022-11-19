import { useRouter } from 'next/router';
import { useContext } from 'react';
import { selectedMealContext } from '../../context/selectedMealCtx';

const Meal = () => {
  const selectedMealCtx = useContext(selectedMealContext);
  const router = useRouter();
  const { meal } = router.query;
  return (
    <>
      {selectedMealCtx?.selectedMeal === null
        ? meal
        : selectedMealCtx?.selectedMeal?.strMeal}
    </>
  );
};

export default Meal;
