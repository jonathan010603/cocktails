import Head from 'next/head';
import Image from 'next/image';
import styles from './Header.module.css';
import { colors } from '../../../data/colors';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img className={styles.logoName} src="/assets/logoName.png" />
      </div>
      <img className={styles.burger} src="/assets/burger.svg" />
    </header>
  );
};

export default Header;
