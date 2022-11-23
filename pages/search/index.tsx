import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import SearchInput from '../../components/ui/SearchInput';
import styles from '../../styles/Search.module.css';

const SearchPageIndex = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { query } = router.query;
  const [errorState, setErrorState] = useState<boolean>(false);

  useEffect(() => {
    if (typeof query === 'string' && inputRef.current !== null) {
      inputRef.current.value = query;
    }
  }, []);

  const clickedSearch = async () => {
    inputRef.current !== null && inputRef.current.value.trim().length > 0
      ? router.push(`/search/${inputRef.current.value}`)
      : setErrorState(true);
  };

  return (
    <main className={styles.container}>
      <SearchInput handleClick={clickedSearch} reference={inputRef} />
    </main>
  );
};

export default SearchPageIndex;
