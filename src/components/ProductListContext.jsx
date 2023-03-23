import { createContext, useState } from 'react';

export const ProductListContext = createContext();

/**
 *
 * @param {{list: ProductListItem[], filterBy: (keyof ProductListItem)[]}}
 */
const ProductListContextProvider = ({ list = [], filterBy = [], children }) => {
  const [filteredList, setFilteredList] = useState(list);

  const handleFilter = (searchValue) => {
    const regex = new RegExp(searchValue, 'ig');
    const newFilteredList = list.filter((item) =>
      filterBy.reduce(
        (previousCoincidence, filterItem) =>
          previousCoincidence || item[filterItem].search(regex) !== -1,
        false
      )
    );
    setFilteredList(newFilteredList);
  };

  const value = { list, filteredList, handleFilter };
  return (
    <ProductListContext.Provider value={value}>
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListContextProvider;
