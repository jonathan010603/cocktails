import styles from "./search.module.scss";

const Search = () => {
    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="What would you like?" />
            <img className={styles.icon} src="/search.svg" />
        </div>
    );
}

export default Search;