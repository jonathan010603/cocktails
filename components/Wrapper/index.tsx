import Card from "./Card";
import styles from "./wrapper.module.scss";
import { usePromiseTracker } from "react-promise-tracker";
import CircleLoader from "../../components/CircleLoader";
import Filter from "../Filter";
import { useState } from "react";
import Modal from "../Filter/Modal";

const Wrapper = ({ dataSource }: any) => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        <>
            {dataSource.length > 0
                && <Filter resultCount={dataSource.length} />
            }
            {promiseInProgress
                ? <CircleLoader /> :
                <div id="searchField" className={styles.container}>
                    {
                        dataSource.map((drink: any) => {
                            return <Card title={drink.strDrink} imgSrc={drink.strDrinkThumb} />
                        })
                    }
                </div>
            }
        </>
    );
}

export default Wrapper;