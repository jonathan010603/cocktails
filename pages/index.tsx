import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useContext, useRef, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { IMeal } from '../data/types';
import { useRouter } from 'next/router';

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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
    </main>
  );
};

export default Home;
