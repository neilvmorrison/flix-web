import { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import clsx from 'clsx';

const useStyles = createUseStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 55px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flexStart',
  },
  searchBox: {
    marginTop: 90,
  },
  resultsBox: {
    background: '#fff',
    width: 480,
    padding: 24,
    listStyle: 'none',
    borderRadius: '0 0 8px 8px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  },
  resultsItem: {
    padding: '8px 0',
  },
  input: {
    background: '#fff',
    padding: 24,
    border: 'none',
    borderRadius: 8,
    width: 480,
    fontSize: '2rem',
  },
  inputWithResults: {
    borderRadius: '8px 8px 0 0',
  },
}));

const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState([]);
  const classes = useStyles();
  const handleBlur = async (event) => {
    const { data } = await axios.get(`/titles/search/${event.target.value}`);
    setSearchResults(data.Search);
  };
  return (
    <main className={classes.root}>
      <div className={classes.searchBox}>
        <input
          className={clsx(
            classes.input,
            !!searchResults.length && classes.inputWithResults
          )}
          placeholder='Search for a title...'
          onBlur={handleBlur}
        />
        {!!searchResults.length && (
          <ul className={classes.resultsBox}>
            {searchResults.map((result) => (
              <li className={classes.resultsItem}>
                <Link to={result.imdbID}>{result.Title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default SearchContainer;
