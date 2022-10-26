import Card from "./Card";
import styles from "./wrapper.module.scss";
import { usePromiseTracker } from "react-promise-tracker";
import CircleLoader from "../../components/CircleLoader";

const Wrapper = ({ dataSource }: any) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        <>{promiseInProgress
            ? <CircleLoader /> :
            <div id="searchField" className={styles.container}>
                {
                    dataSource.map((drink: any) => {
                        return <Card title={drink.strDrink} imgSrc={drink.strDrinkThumb} />
                    })
                }
            </div>
        }</>
    );
}

export default Wrapper;