import { useRouter } from 'next/router'
import styles from "./meal.module.scss";

const Meal = () => {
    const router = useRouter();
    const { id } = router.query
    return <h1 className={styles.title}>{id}</h1>
}

export default Meal;