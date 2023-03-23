import '../App.css';
import cart from '../../images/cart.png';
import { useSelector } from 'react-redux';

const Cart = () => {
  const { countInApi } = useSelector((state) => state.product.detail);
  return (
    <div>
      <img src={cart} className="cart" alt="cart" />
      <div>{countInApi}</div>
    </div>
  );
};

export default Cart;
