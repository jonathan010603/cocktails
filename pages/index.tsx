import React, { useState } from "react";
import { SearchDrinks } from "../services/app.service";
import Head from "next/head";
import styles from "./index.module.scss";
import Header from "../components/Header";
import Hero from "../components/hero";
import Search from "../components/Search";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

const index = () => {
  const [drinks, setDrinks] = useState([]);
  const getDrinks = () => SearchDrinks("margarita").then(data => setDrinks(data))

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Search />
        <Button clicked={getDrinks} />
        <Wrapper dataSource={drinks} />
      </main>
    </>
  );
}

export default index;