import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../contexts/globalctx";
import styles from "./filter.module.scss";

type props = {
    cardsAmount: number
}

const Filter = ({cardsAmount}: props) => {
    const ctx = useContext(GlobalContext);
    const filterRef = useRef<any>(null);

    const activateModal = () => {
        ctx.setFilterOpen(true);
        document.body.style.overflow = 'hidden';
    }

    const handleClickOutside = (e: any) => {
        if (
            e.target.id === "outsideModal"
            || e.target.id === "closeModal"
        ) {
            ctx.setFilterOpen(false);
            document.body.style.overflow = 'unset';
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    })

    return (
        <>
            <div className={styles.container}>
                {cardsAmount > 0 && `${cardsAmount} results`}
                <span
                    ref={filterRef}
                    className={styles.filter}
                    onClick={() => activateModal()}
                >
                    Filters
                    <img className={styles.img} src="/expand.svg" />
                </span>
            </div>

        </>
    );
}

export default Filter;