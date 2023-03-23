import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../App.css';
import { getProductDetail } from '../../store/detail/api';
import Loading from '../Loading';
import Actions from './Actions';
import Description from './Description';
import Image from './Image';

const ProductDetail = () => {
  const [product, setProduct] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getProductDetail({ id })
      .then((productItem) => {
        setProduct(productItem);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

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
