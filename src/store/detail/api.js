import { BASE_URL } from '../apiConfig';

export const getProductDetail = ({ id }) =>
  fetch(`${BASE_URL}/api/product/${id}`)
    .then((response) => response.json())
    .catch((reason) => {
      throw new Error(
        `Error in product list request${reason ? `:${reason}` : ''}`
      );
    });

export const addProductToCart = ({ id, colorCode, storageCode }) => {
  const data = { id, colorCode, storageCode };

  return fetch(`${BASE_URL}/api/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((reason) => {
      throw new Error(
        `Error in product list request${reason ? `:${reason}` : ''}`
      );
    });
};

export default { getProductDetail, addProductToCart };
