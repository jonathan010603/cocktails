import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import styles from "./index.module.scss";
import Search from "../components/Search";

const index = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.imageContainer}>
          The best<br />
          Drinks and<br />
          Cocktails in<br />
          One place
        </div>
        <Search />
      </main>
    </>
  );
}

export default index;