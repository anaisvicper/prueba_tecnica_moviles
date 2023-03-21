import '../../App.css';
import mockList from './mock';
import Item from './Item';
import ProductListContextProvider, {
  ProductListContext,
} from '../ProductListContext';
import Search from '../Search';
import { useContext } from 'react';

const ProductListContainer = () => {
  return (
    <ProductListContextProvider list={mockList} filterBy={['brand', 'model']}>
      <ProductList></ProductList>
    </ProductListContextProvider>
  );
};
const ProductList = () => {
  const { filteredList } = useContext(ProductListContext);
  return (
    <div className="product-list-container">
      <Search placehoderFields="marca y modelo" />
      <div className="product-list">
        {filteredList.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default ProductListContainer;
