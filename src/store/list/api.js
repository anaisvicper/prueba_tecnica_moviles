import { BASE_URL } from '../apiConfig';

const getProductList = () =>
  fetch(`${BASE_URL}/api/product`)
    .then((response) => response.json())
    .catch((reason) => {
      throw new Error(
        `Error in product list request${reason ? `:${reason}` : ''}`
      );
    });

export default getProductList;
