import styles from './ResultsAndFilter.module.css';

interface IProps {
  resultsAmount: number;
}

const ResultsAndFilter = ({ resultsAmount }: IProps) => {
  return (
    <div className={styles.container}>
      {`${resultsAmount} results`}
      <div className={styles.filter} onClick={() => {}}>
        Filters
        <img className={styles.img} src="/assets/plus.png" />
      </div>
    </div>
  );
};

export default ResultsAndFilter;
