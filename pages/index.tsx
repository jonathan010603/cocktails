import React, { useState } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { SearchDrinks } from "../services/app.service";
import Head from "next/head";
import styles from "./index.module.scss";
import Header from "../components/Header";
import Hero from "../components/hero";
import Search from "../components/Search";
import Wrapper from "../components/Wrapper";
import Filter from "../components/Filter";

const index = () => {
  const { promiseInProgress } = usePromiseTracker();
  const [idleState, setIdle] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [input, setInput] = useState("");

  const getDrinks = () => {
    input.length > 0
      ? SearchDrinks(input).then(data => setDrinks(data))
      : alert("Deu não")
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Search changeInput={setInput} clicked={getDrinks} />
        {drinks.length > 0 && <Filter resultCount={drinks.length} />}
        <Wrapper dataSource={drinks} />
        {!(drinks.length > 0)
          && <img src={'/logo_red.svg'} className={styles.bigLogo} />
        }
      </main>
    </>
  );
}

export default index;