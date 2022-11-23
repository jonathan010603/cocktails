import Head from 'next/head';
import Image from 'next/image';
import styles from './Header.module.css';
import { colors } from '../../../data/colors';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href={`/`}>
        <div className={styles.logoContainer}>
          <img className={styles.logoName} src="/assets/logoNameRed.png" />
        </div>
      </Link>
      <img className={styles.burger} src="/assets/burger.png" />
    </header>
  );
};

export default Header;
