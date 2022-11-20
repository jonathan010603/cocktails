import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useContext, useRef, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { IMeal } from '../data/types';
import { useRouter } from 'next/router';
import { useFetch } from '../hooks/useFetch';

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { data } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  const clickedSearch = async () => {
    inputRef.current !== null &&
      inputRef.current.value.length > 0 &&
      router.push(`/search/${inputRef.current.value}`);
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
        <input className={styles.input} type="text" ref={inputRef} />
        <img
          className={styles.icon}
          src="/assets/search.png"
          onClick={() => clickedSearch()}
        />
      </div>

      {data?.map((category: any) => (
        <span key={category.idCategory}>{category.strCategory}</span>
      ))}
    </main>
  );
};

export default Home;
