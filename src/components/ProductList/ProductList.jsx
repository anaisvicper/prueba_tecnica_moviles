import '../App.css';
import './ProductList.css';
import Item from './Item';
import ProductListContextProvider, {
  ProductListContext,
} from './ProductListContext';
import Search from './Search';
import Loading from '../Loading';
import { useContext, useEffect } from 'react';
import { getProductList } from '../../store/list/listSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContext } from '../ToastContext';
import styled from '@emotion/styled';

const StyledProductListContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  overflow: 'auto',
  backgroundColor: 'lightgray',
}));

const ProductListContainer = () => {
  const { isLoading: loading, productList: list } = useSelector(
    (state) => state.product.list
  );
  const dispatch = useDispatch();
  const { handleMessage, handleSeverity, possibleSeverity } =
    useContext(ToastContext);

  useEffect(() => {
    dispatch(getProductList()).catch((error) => {
      handleMessage(`Ha ocurrido un error ${error}`);
      handleSeverity(possibleSeverity.error);
    });
    // We don't want this to update for each change in the Toast Provider
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
    <StyledProductListContainer>
      <Search placehoderFields="marca y modelo" />
      <div className="product-list">
        {filteredList.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </StyledProductListContainer>
  );
};

export default ProductListContainer;
