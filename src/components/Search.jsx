import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search books..."
        style={styles.searchInput}
      />
      <button onClick={handleSearch} style={styles.searchButton}>Search</button>
    </div>
  );
};

const styles = {
    searchContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px 0',
    },
    searchInput: {
      padding: '10px',
      borderRadius: '5px 0 0 5px',
      border: '1px solid #ccc',
      flexGrow: 5,
      maxWidth: '300px',
    },
    searchButton: {
      padding: '10px 20px',
      border: 'none',
      borderRadius: '0 5px 5px 0',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    },
    searchButtonHover: {
      backgroundColor: 'green',
      transform: 'scale(1.05)',
    },
  };


export default Search;
