import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRef, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import CircleLoader from '../components/ui/CircleLoader';
import FetchWithWord, { IMeal } from '../services/FetchWithWord';
import Card from '../components/Home/Card';
import UnderSearch from '../components/Home/UnderSearch';

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { promiseInProgress } = usePromiseTracker();
  const [meals, setMeals] = useState<Array<IMeal>>([]);
  const [filters, setFilters] = useState<Array<String>>([]);
  const [errorState, setErrorState] = useState<boolean>(false);

  const getMeals = async (query: string) =>
    setMeals(await FetchWithWord(query));

  const renderCards = () =>
    meals?.map((item) => <Card key={item.idMeal} content={item} />);

  const clickedSearch = async () => {
    inputRef.current !== null && inputRef.current.value.length > 0
      ? (getMeals(inputRef.current.value), (inputRef.current.value = ''))
      : setErrorState(true);
  };

  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        Your
        <br />
        Favourite
        <br />
        Meals in
        <br />
        One place
      </div>

      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          ref={inputRef}
          placeholder="What would you like?"
          onInput={() => setErrorState(false)}
        />
        <img
          className={styles.icon}
          src="/assets/search.svg"
          onClick={() => clickedSearch()}
        />
      </div>

      {meals.length > 0 && <UnderSearch resultsAmount={meals.length} />}

      <div className={styles.wrapper}>
        {promiseInProgress ? <CircleLoader /> : renderCards()}
      </div>

      {meals.length === 0 && !promiseInProgress && <div>Lorem ipsum</div>}
    </main>
  );
};

export default Home;
