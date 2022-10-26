import styles from "./filter.module.scss";

const Filter = ({ resultCount }: any) => {
    return (
        <div className={styles.container}>
            {resultCount} results
            <span className={styles.filter}>
                Filters
                <img className={styles.img} src="/expand.svg" />
            </span>
        </div>
    );
}

export default Filter;