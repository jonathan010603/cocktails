import styles from './UnderSearch.module.css';

interface IProps {
  resultsAmount: number;
}

const UnderSearch = ({ resultsAmount }: IProps) => {
  return (
    <div className={styles.container}>
      {`${resultsAmount} results`}
      <div className={styles.filter} onClick={() => {}}>
        Filters
        <img className={styles.img} src="/assets/expand.svg" />
      </div>
    </div>
  );
};

export default UnderSearch;
