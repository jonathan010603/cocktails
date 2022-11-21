import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useContext, useRef, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import { IMeal } from '../data/types';
import { useRouter } from 'next/router';
import { useFetch } from '../hooks/useFetch';
import { categoryData } from '../data/categories';
import SearchInput from '../components/ui/SearchInput';

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
        <img className={styles.bannerImage} src={'/assets/art2.png'} />
      </div>

      <SearchInput handleClick={clickedSearch} reference={inputRef} />

      <div className={styles.categoryWrapper}>
        <span className={styles.categoriesBar}>
          Categories
          <img src={'/assets/expand.svg'} />
        </span>
        {categoryData?.map((category: any) => (
          <div className={styles.categoriesDiv} key={category.idCategory}>
            <img
              src={category.strCategoryThumb}
              className={styles.categoriesImages}
            />
            <span>{category.strCategory}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
