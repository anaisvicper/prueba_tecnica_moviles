import '../App.css';

const Image = ({ product }) => {
  return (
    <div className="image-container">
      <img
        className="image"
        src={product.imgUrl}
        alt={`${product.brand} phone model ${product.model}`}
      />
    </div>
  );
};

export default Image;
