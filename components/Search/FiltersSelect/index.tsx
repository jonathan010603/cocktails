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
        placeholder={'Filters'}
        instanceId={useId()}
        isMulti
        onChange={handleChange}
        options={categories}
        closeMenuOnSelect={false}
        components={animatedComponents}
        className={styles.select}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            width: '100%',
            alignSelf: 'flex-start',
            boxShadow: 'none',
            border: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }),
          container: (baseStyles) => ({
            ...baseStyles,
            width: '97%',
            margin: '0 auto 1vh auto',
            marginBottom: '3vh',
          }),
          indicatorsContainer: (baseStyles) => ({
            ...baseStyles,
            width: '25%',
            margin: '2vh auto 0 auto',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }),
          clearIndicator: (baseStyles) => ({
            ...baseStyles,
            margin: '0 2.5px 0 2.5px',
            color: '#f76565',
            border: '1px solid #f76565',
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            margin: '0 2.5px 0 2.5px',
            color: '#f76565',
            border: '1px solid #f76565',
          }),
          indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: 'transparent',
          }),
          multiValue: (baseStyles) => ({
            ...baseStyles,
            width: '100%',
            color: '#FFFFFF',
            backgroundColor: '#f76565',
          }),
          multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            color: '#FFFFFF',
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            display: 'none',
          }),
        }}
      />
    </div>
  );
};

export default FiltersSelect;
