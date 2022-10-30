import Select from 'react-select';
import styles from "./select.module.scss";

const SelectDropdown = ({ options, label }: any) => {
    
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <Select
                id="selectCategory"
                defaultValue={[options[0]]}
                isMulti
                options={options}
                className={styles.select}
            />
        </div>
    );
}

export default SelectDropdown;