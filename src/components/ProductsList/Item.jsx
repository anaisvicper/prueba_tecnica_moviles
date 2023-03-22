import { generatePath } from 'react-router';
import { Link } from 'react-router-dom';
import '../../App.css';
import routes from '../../config/routes';
import Image from '../ProductDetail/Image';

const CURRENCY = '€';
// const list: {
//     id: string;
//     brand: string;
//     model: string;
//     price: string;
//     imgUrl: string;
// }[]
const Item = ({ item: { id, brand, model, price, imgUrl } }) => {
  return (
    <div className="product-list-item-container">
      <Link
        className="product-list-item"
        to={generatePath(`/${routes.PRODUCT_DETAIL.path}`, { id })}
      >
        <Image product={{ id, brand, model, imgUrl }} />
        <div>
          <span>{brand}</span>
          <span> · </span>
          <span>{model}</span>
        </div>
        <div className="price">
          {price} {CURRENCY}
        </div>
      </Link>
    </div>
  );
};
export default Item;
