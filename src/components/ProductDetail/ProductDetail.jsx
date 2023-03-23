import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import '../App.css';
import { getProductDetail } from '../../store/detail/detailSlice';
import Loading from '../Loading';
import Actions from './Actions';
import Description from './Description';
import Image from './Image';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContext } from '../ToastContext';

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
  }, [id, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return product ? (
    <div className="product-detail">
      <div className="product-detail-item">
        <Image product={product} />
      </div>
      <div className="product-detail-item">
        <div>
          <Description product={product} />
          <Actions product={product} />
        </div>
      </div>
    </div>
  ) : (
    'Producto no encontrado'
  );
};

export default ProductDetail;
