import { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../../contexts/globalctx";
import styles from "./modal.module.scss";
import SelectDropdown from "./Select";

const categories = [
    { value: 'Beef', label: 'Beef' },
    { value: 'Chicken', label: 'Chicken' },
    { value: 'Dessert', label: 'Dessert' },
    { value: 'Lamb', label: 'Lamb' },
    { value: 'Miscellaneous', label: 'Miscellaneous' },
    { value: 'Pasta', label: 'Pasta' },
    { value: 'Pork', label: 'Pork' },
    { value: 'Seafood', label: 'Seafood' },
    { value: 'Side', label: 'Side' },
    { value: 'Starter', label: 'Starter' },
    { value: 'Vegan', label: 'Vegan' },
    { value: 'Vegetarian', label: 'Vegetarian' },
    { value: 'Breakfast', label: 'Breakfast' },
    { value: 'Goat', label: 'Goat' }
]

const areas = [
    { value: 'American', label: 'American' },
    { value: 'British', label: 'British' },
    { value: 'Canadian', label: 'Canadian' },
    { value: 'Chinese', label: 'Chinese' },
    { value: 'Croatian', label: 'Croatian' },
    { value: 'Dutch', label: 'Dutch' },
    { value: 'Egyptian', label: 'Egyptian' },
    { value: 'French', label: 'French' },
    { value: 'Greek', label: 'Greek' },
    { value: 'Indian', label: 'Indian' },
    { value: 'Irish', label: 'Irish' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Jamaican', label: 'Jamaican' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Kenyan', label: 'Kenyan' },
    { value: 'Malaysian', label: 'Malaysian' },
    { value: 'Mexican', label: 'Mexican' },
    { value: 'Moroccan', label: 'Moroccan' },
    { value: 'Polish', label: 'Polish' },
    { value: 'Portuguese', label: 'Portuguese' },
    { value: 'Russian', label: 'Russian' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Thai', label: 'Thai' },
    { value: 'Tunisian', label: 'Tunisian' },
    { value: 'Turkish', label: 'Turkish' },
    { value: 'Unknown', label: 'Unknown' },
    { value: 'Vietnamese', label: 'Vietnamese' }
]

const Modal = () => {
    const [localFilter, setLocalFilter] = useState([]);
    const ctx = useContext(GlobalContext);

    const handleClick = () => {
        ctx.setGlobalFilter(localFilter);
        ctx.setFilterOpen(false);
        document.body.style.overflow = 'unset';
    }

    return (
        <div
            id="outsideModal" className={styles.container}
            style={{ display: ctx.filterModal ? "flex" : "none" }}
        >
            <div className={styles.modal}>
                <img id="closeModal" className={styles.close} src="/close.svg" />
                <SelectDropdown
                    options={categories}
                    setLocalFilter={setLocalFilter}
                />
                <button
                    className={styles.apply}
                    onClick={() => handleClick()}
                >
                    Apply
                </button>
            </div>
        </div>
    );
}

export default Modal;