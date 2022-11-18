import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useRef, useState } from 'react';

export default function Home() {
  const inputRef = useRef(null);
  const [errorState, setErrorState] = useState(false);

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
          onClick={() => {}}
        />
      </div>
      <div className={styles.wrapper}></div>
    </main>
  );
}
