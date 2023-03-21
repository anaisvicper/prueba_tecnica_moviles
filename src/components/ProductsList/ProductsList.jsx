import '../../App.css';
import mockList from './mock';
import Item from './Item';

const ProductsList = () => {
  return (
    <div className="product-list-container">
      <div>Lista de productos</div>
      <div className="product-list">
        {mockList.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
