import Head from 'next/head';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logoName} src="/assets/logoName.svg" />
      </div>
      <img className={styles.burger} src="/assets/burger.svg" />
    </header>
  );
}
