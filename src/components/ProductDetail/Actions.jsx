import '../App.css';
import routes from '../../config/routes';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { addProductToCart } from '../../store/detail/detailSlice';
import ProductOptionSelect from './ProductOptionSelect';
import { useDispatch } from 'react-redux';
import { ToastContext } from '../ToastContext';
import styled from '@emotion/styled';
import Price from '../Price';

const StyledButton = styled('button')(() => ({
  border: '2px solid #282c34',
  borderRadius: '10%',
  backgroundColor: 'lightseagreen',
  color: 'white',
  '&:hover': {
    boxShadow: '3px 3px 10px 5px #282c34',
  },
}));
const StyledProductDetailActions = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingBottom: '16px',
}));
const StyledProductDetailActionsGoto = styled('div')(() => ({
  '& > a': { color: 'lightseagreen', textDecoration: 'underline' },
}));

const Actions = ({ product }) => {
  const [selectedStorageCode, setSelectedStorageCode] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const dispatch = useDispatch();
  const { handleMessage, handleSeverity, possibleSeverity } =
    useContext(ToastContext);

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
          handleMessage(
            `Añadido al carrito. ${
              !!count ? `Elementos en carrito ${count}` : ''
            }`
          );
          handleSeverity(possibleSeverity.success);
        })
        .catch((error) => {
          handleMessage(`No se ha podido añadir al carrito ${error}`);
          handleSeverity(possibleSeverity.error);
        });
    }
  };

  return (
    <StyledProductDetailActions>
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
              <Price price={product.price} />
              <StyledButton type="submit">Añadir al carrito</StyledButton>
            </div>
          </div>
        </form>
        <StyledProductDetailActionsGoto>
          <NavLink to={`/${routes.PRODUCTS.path}`}>Volver al listado</NavLink>
        </StyledProductDetailActionsGoto>
      </div>
    </StyledProductDetailActions>
  );
};

export default Actions;
