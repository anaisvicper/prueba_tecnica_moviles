import '../../App.css';
import Description from './Description';
import Image from './Image';
import mockProduct from './mock';

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <div>
        <Image product={mockProduct} />
      </div>
      <Description product={mockProduct} />
    </div>
  );
};

export default ProductDetail;
