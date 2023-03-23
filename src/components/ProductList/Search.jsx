import '../App.css';
import { useContext, useState } from 'react';
import { ProductListContext } from './ProductListContext';
import styled from '@emotion/styled';

const StyledSearchContainer = styled.div(() => ({
  display: 'flex',
  flexGrow: '1',
  alignContent: 'flex-end',
  justifyContent: 'flex-end',
  padding: '16px',
}));
const StyledSearch = styled.input(() => ({
  display: 'flex',
  border: '2px solid #282c34',
  height: '40px',
  width: '200px',
}));

const Search = ({ placehoderFields = '' }) => {
  const [searchValue, setSearchValue] = useState('');
  const { handleFilter } = useContext(ProductListContext);

  const handleChange = (newValue) => {
    setSearchValue(newValue);
    handleFilter(newValue);
  };

  return (
    <StyledSearchContainer>
      <StyledSearch
        type="search"
        className="search"
        value={searchValue}
        placeholder={`Busca por ${placehoderFields}`}
        onChange={(e) => handleChange(e.target.value)}
      />
    </StyledSearchContainer>
  );
};

export default Search;
