import { RefObject } from 'react';
import styles from './SearchInput.module.css';

interface IProps {
  handleClick: () => void;
  reference: RefObject<HTMLInputElement>;
}

const SearchInput = ({ handleClick, reference }: IProps) => {
  return (
    <div className={styles.search}>
      <input placeholder='Search for a meal' className={styles.input} type="text" ref={reference} />
      <img
        className={styles.icon}
        src="/assets/search.png"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default SearchInput;
