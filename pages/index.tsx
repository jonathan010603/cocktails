import React, { useContext, useEffect } from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Header, Hero, Search, Wrapper } from "../components";
import { GlobalContext } from "../contexts/globalctx";
import styles from "./index.module.scss";

const index = () => {
  const { promiseInProgress } = usePromiseTracker();
  const ctx = useContext(GlobalContext);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Search />
        <Wrapper />
        {
          ctx.meals.length === 0
          && !promiseInProgress
          && <img src={'/logo.svg'} className={styles.bigLogo} />
        }
      </main>
    </>
  );
}

export default index;