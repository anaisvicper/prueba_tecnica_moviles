import '../App.css';

const Image = ({ product }) => {
  return (
    <div>
      <img
        src={product.imgUrl}
        alt={`${product.brand} phone model ${product.model}`}
      />
    </div>
  );
};

export default Image;
