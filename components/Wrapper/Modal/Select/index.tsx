import Select from 'react-select';
import styles from "./select.module.scss";
import makeAnimated from 'react-select/animated';
import { useId } from 'react';

const SelectDropdown = ({ options, label, ref, setLocalFilter }: any) => {
    const animatedComponents = makeAnimated();

    const handleChange = (options: any) => {
        setLocalFilter(options)
    }

    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <Select
                instanceId={useId()}
                ref={ref}
                isMulti
                onChange={handleChange}
                options={options}
                closeMenuOnSelect={false}
                components={animatedComponents}
                className={styles.select}
            />
        </div>
    );
}

export default SelectDropdown;