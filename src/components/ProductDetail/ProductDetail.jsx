import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import '../App.css';
import './ProductDetail.css';
import { getProductDetail } from '../../store/detail/detailSlice';
import Loading from '../Loading';
import Actions from './Actions';
import Description from './Description';
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContext } from '../ToastContext';
import styled from '@emotion/styled';

const StyledProductDetailItem = styled.div(() => ({
  flexDirection: 'column',
}));

const ProductDetail = () => {
  const { id } = useParams();
  const { isLoading: loading, productDetail: product } = useSelector(
    (state) => state.product.detail
  );
  const dispatch = useDispatch();
  const { handleMessage, handleSeverity, possibleSeverity } =
    useContext(ToastContext);

  useEffect(() => {
    dispatch(getProductDetail({ id })).catch((error) => {
      handleMessage(`Ha ocurrido un error ${error}`);
      handleSeverity(possibleSeverity.error);
    });
    // We don't want this to update for each change in the Toast Provider
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return product ? (
    <div className="product-detail">
      <StyledProductDetailItem>
        <Image product={product} />
      </StyledProductDetailItem>
      <StyledProductDetailItem>
        <div>
          <Description product={product} />
          <Actions product={product} />
        </div>
      </StyledProductDetailItem>
    </div>
  ) : (
    'Producto no encontrado'
  );
};

export default ProductDetail;
