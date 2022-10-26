import styles from "./search.module.scss";

const Search = ({ changeInput, clicked }: any) => {
    const inputHandler = (event: any) => changeInput(event.target.value.trim())

    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" placeholder="What would you like?" onInput={(e: any) => inputHandler(e)} />
            <img className={styles.icon} src="/search.svg" onClick={clicked} />
        </div>
    );
}

export default Search;