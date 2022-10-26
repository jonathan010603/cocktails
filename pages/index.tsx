import React, { useState } from "react";
import { SearchDrinks } from "../services/app.service";
import Head from "next/head";
import styles from "./index.module.scss";
import Header from "../components/Header";
import Hero from "../components/hero";
import Search from "../components/Search";
import Wrapper from "../components/Wrapper";

const index = () => {
  const [drinks, setDrinks] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const getDrinks = () => {
    input.length > 0
      ? SearchDrinks(input)
        .then(data => {
          setDrinks(data)
          drinks.length === 0 && setError(true);
        })
      : setError(true);
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Search changeInput={setInput} clicked={getDrinks} errorState={error} changeError={setError} />
        <Wrapper dataSource={drinks} />
        {!(drinks.length > 0)
          && <img src={'/logo_red.svg'} className={styles.bigLogo} />
        }
      </main>
    </>
  );
}

export default index;