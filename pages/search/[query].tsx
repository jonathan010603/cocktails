import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Card from '../../components/Search/Card';
import ResultsAndFilter from '../../components/Search/ResultsAndFilter';
import CircleLoader from '../../components/ui/CircleLoader';
import { useFetch } from '../../hooks/useFetch';
import styles from '../../styles/Search.module.css';

const SearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { query } = router.query;
  const { promiseInProgress } = usePromiseTracker();
  const [errorState, setErrorState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof query === 'string' && inputRef.current !== null) {
      inputRef.current.value = query;
    }
  }, []);

  const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  const renderCards = () =>
    data?.map((item: any) => (
      <Card
        redirectTo={`/meals/${item.strMeal}`}
        key={item.idMeal}
        content={item}
      />
    ));

  const clickedSearch = async () => {
    inputRef.current !== null && inputRef.current.value.trim().length > 0
      ? router.push(`/search/${inputRef.current.value}`)
      : setErrorState(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          onInput={() => setErrorState(false)}
        />
        <img
          className={styles.icon}
          src="/assets/search.png"
          onClick={() => clickedSearch()}
        />
      </div>

      {data?.length > 0 && data && (
        <ResultsAndFilter resultsAmount={data.length} />
      )}

      <div className={styles.wrapper}>
        {!data && promiseInProgress ? <CircleLoader /> : renderCards()}
      </div>

      {!(data?.length > 0) && !promiseInProgress && (
        <img className={styles.bottomArt} src="/assets/art2.png" />
      )}
    </main>
  );
};

export default SearchPage;
