import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../../App.css';
import getProductDetail from '../../store/detail/api';
import Loading from '../Loading';
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
      <div>
        <Image product={product} />
      </div>
      <Description product={product} />
    </div>
  ) : (
    'Producto no encontrado'
  );
};

export default ProductDetail;
