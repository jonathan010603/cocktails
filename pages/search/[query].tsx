import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Card from '../../components/Search/Card';
import FiltersSelect from '../../components/Search/FiltersSelect';
import CircleLoader from '../../components/ui/CircleLoader';
import SearchInput from '../../components/ui/SearchInput';
import { IFilters } from '../../data/types';
import { useFetch } from '../../hooks/useFetch';
import useFilters from '../../hooks/useFilters';
import styles from '../../styles/Search.module.css';

const SearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { query } = router.query;
  const { promiseInProgress } = usePromiseTracker();
  const [errorState, setErrorState] = useState<boolean>(false);
  const [filters, setFilters] = useState<Array<IFilters>>([]);

  useEffect(() => {
    if (typeof query === 'string' && inputRef.current !== null) {
      inputRef.current.value = query;
    }
  }, []);

  useEffect(() => console.log(filters), [filters]);

  const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  let filteredItems = useFilters({ data, filters });

  const renderCards = () =>
    filteredItems?.map((item: any) => (
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
      <SearchInput handleClick={clickedSearch} reference={inputRef} />
      <div>
        <FiltersSelect setFilters={setFilters} />
        {`${filteredItems.length} results`}
      </div>

      <div className={styles.wrapper}>
        {!filteredItems && promiseInProgress ? <CircleLoader /> : renderCards()}
      </div>
    </main>
  );
};

export default SearchPage;
