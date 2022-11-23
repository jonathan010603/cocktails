import { Dispatch, SetStateAction, useId } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { IFilters } from '../../../data/types';
import styles from './FiltersSelect.module.css';

interface IProps {
  setFilters: Dispatch<SetStateAction<IFilters[]>>;
}

const FiltersSelect = ({ setFilters }: IProps) => {
  const animatedComponents = makeAnimated();

  const handleChange = (options: any) => {
    setFilters(options);
  };

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
    { value: 'Goat', label: 'Goat' },
  ];

  return (
    <div className={styles.container}>
      <Select
        instanceId={useId()}
        isMulti
        onChange={handleChange}
        options={categories}
        closeMenuOnSelect={false}
        components={animatedComponents}
        className={styles.select}
        styles={{
          
        }}
      />
    </div>
  );
};

export default FiltersSelect;
