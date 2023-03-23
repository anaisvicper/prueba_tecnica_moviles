import '../../App.css';
import routes from '../../config/routes';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addProductToCart } from '../../store/detail/api';

const CURRENCY = '€';
const Actions = ({ product }) => {
  const [selectedStorageCode, setSelectedStorageCode] = useState();
  const [selectedColor, setSelectedColor] = useState();
  useEffect(() => {
    if (product.options.storages.length === 1) {
      setSelectedStorageCode(product.options.storages[0].code);
    }
    if (product.options.colors.length === 1) {
      setSelectedColor(product.options.colors[0].code);
    }
  }, [product.options.storages, product.options.colors]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!!selectedColor && selectedStorageCode) {
      const data = {
        id: product.id,
        colorCode: selectedColor,
        storageCode: selectedStorageCode,
      };
      addProductToCart(data)
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
            <select
              className="row"
              name="selectStorage"
              placeholder="Almacenamiento"
              onChange={(e) => setSelectedStorageCode(e.target.value)}
              value={selectedStorageCode}
            >
              <option value="">Selecciona uno</option>
              {product.options.storages.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <select
              className="row"
              name="selectColor"
              placeholder="Colores"
              onChange={(e) => setSelectedColor(e.target.value)}
              value={selectedColor}
            >
              <option value="">Selecciona uno</option>
              {product.options.colors.map(({ code, name }) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="full-space">
            <div className="row">
              <div className="price">
                {product.price} {CURRENCY}
              </div>
              <button type="submit">Añadir al carrito</button>
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
