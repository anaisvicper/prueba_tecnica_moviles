import '../App.css';
import routes from '../../config/routes';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addProductToCart } from '../../store/detail/detailSlice';
import ProductOptionSelect from './ProductOptionSelect';
import { useDispatch } from 'react-redux';

const CURRENCY = '€';
const Actions = ({ product }) => {
  const [selectedStorageCode, setSelectedStorageCode] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const options = product.options;
    if (!!options) {
      const { storages, colors } = options;
      if (storages?.length === 1) {
        setSelectedStorageCode(storages[0].code);
      }
      if (colors?.length === 1) {
        setSelectedColor(colors[0].code);
      }
    }
  }, [product]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!!selectedColor && selectedStorageCode) {
      const data = {
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorageCode,
      };
      dispatch(addProductToCart(data))
        .then(({ count }) => {
          console.log('Añadido al carrito', data);
          console.log('Elementos en carrito', count);
        })
        .catch((error) => {
          console.log(`No se ha podido añadir al carrito ${error}`);
        });
    }
  };

  return (
    <div className="product-detail-actions">
      <div className="full-space">
        <form onSubmit={handleSubmit}>
          <div className="row">
            {product?.options && (
              <ProductOptionSelect
                label="Almacenamiento"
                name="selectStorage"
                onChange={(newItem) => setSelectedStorageCode(newItem)}
                selectedValue={selectedStorageCode}
                list={product.options.storages}
              ></ProductOptionSelect>
            )}
          </div>
          <div className="row">
            {product?.options && (
              <ProductOptionSelect
                label="Colores"
                name="selectColor"
                onChange={(newItem) => setSelectedColor(newItem)}
                selectedValue={selectedColor}
                list={product.options.colors}
              ></ProductOptionSelect>
            )}
          </div>
          <div className="full-space">
            <div className="row">
              <div className="price">
                {product.price} {CURRENCY}
              </div>
              <button type="submit" className="action">
                Añadir al carrito
              </button>
            </div>
          </div>
        </form>
        <div className="product-detail-actions-goto">
          <NavLink to={`/${routes.PRODUCTS.path}`}>Volver al listado</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Actions;
