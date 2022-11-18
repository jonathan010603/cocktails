import { useRouter } from 'next/router';

const Meal = () => {
  const router = useRouter();
  const { meal } = router.query;
  return <>{meal}</>;
};

export default Meal;
