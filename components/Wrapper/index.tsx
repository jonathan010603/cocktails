import Card from "./Card";
import styles from "./wrapper.module.scss";

const Wrapper = ({dataSource}: any) => {
    return (
        <div className={styles.container}>
            {
                dataSource.map((drink: any) => {
                    return <Card title={drink.strDrink} imgSrc={drink.strDrinkThumb} />
                })
            }
        </div>
    );
}

export default Wrapper;