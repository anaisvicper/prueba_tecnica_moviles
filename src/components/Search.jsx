import '../App.css';
import { useContext, useState } from 'react';
import { ProductListContext } from './ProductListContext';

const Search = ({ placehoderFields = '' }) => {
  const [searchValue, setSearchValue] = useState('');
  const { handleFilter } = useContext(ProductListContext);

  const handleChange = (newValue) => {
    setSearchValue(newValue);
    handleFilter(newValue);
  };

  return (
    <div className="search-container">
      <input
        type="search"
        className="search"
        value={searchValue}
        placeholder={`Busca por ${placehoderFields}`}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
