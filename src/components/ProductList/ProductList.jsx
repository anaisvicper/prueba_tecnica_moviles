import '../App.css';
import Item from './Item';
import ProductListContextProvider, {
  ProductListContext,
} from './ProductListContext';
import Search from './Search';
import Loading from '../Loading';
import { useContext, useEffect, useState } from 'react';
import getProductListApi from '../../store/list/api';

const getProductList = async () => {
  try {
    const productList = await getProductListApi();
    return productList;
  } catch (error) {
    console.log(error);
  }
};

const ProductListContainer = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductList()
      .then((productList) => {
        setList(productList);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return list?.length > 0 ? (
    <ProductListContextProvider list={list} filterBy={['brand', 'model']}>
      <ProductList></ProductList>
    </ProductListContextProvider>
  ) : (
    'No hay resultados'
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
