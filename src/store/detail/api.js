import { BASE_URL } from '../apiConfig';

const getProductDetail = ({ id }) =>
  fetch(`${BASE_URL}/api/product/${id}`)
    .then((response) => response.json())
    .catch((reason) => {
      throw new Error(
        `Error in product list request${reason ? `:${reason}` : ''}`
      );
    });

export default getProductDetail;
