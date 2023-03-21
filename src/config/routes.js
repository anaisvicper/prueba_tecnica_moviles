/**
 * Function to prevent errors when creating a route.
 * @param {string} name literal that will be showed
 * @param {string} path the route used by react-route
 * @return { {name: string; path: string}}
 */
const createRoute = (name, path) => ({
  name,
  path,
});

/**
 * App routes
 */
const routes = {
  PRODUCTS: createRoute('Productos', 'products'),
  PRODUCT_DETAIL: createRoute('Detalle producto', 'products/:id'),
};

export default routes;
