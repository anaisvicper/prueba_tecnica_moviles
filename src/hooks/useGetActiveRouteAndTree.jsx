import routes from '../config/routes';
import { useLocation } from 'react-router-dom';

const regexMatchParam = /:[^/]*/g;
const regexStrToNotMatchParam = '[^:]*';

/**
 * `routes` paths parsed obtaining a match regex and params and added to each route
 */
const regRoutes = Object.values(routes).map(({ path, ...rest }) => {
  // Obtain the regex by matching the posible params and replacing it to detect a param value
  const regex = '/' + path.replaceAll(regexMatchParam, regexStrToNotMatchParam);
  // Obtain the params list in its basic form. For example: [':param', ':id']
  const [...rawParams] = path.matchAll(regexMatchParam);
  // Obtain the param name list. In the example: ['param', 'id']
  const params = rawParams?.map((rawParam) => rawParam[0].split(':')[1]);
  return { regex, params, path, ...rest };
});

const useGetActiveRouteAndTree = () => {
  let { pathname } = useLocation();
  // Get all the routes that matches.
  const unsortedActiveTree = regRoutes.filter(
    (regRoute) => pathname.match(regRoute.regex)?.length > 0
  );
  const tree = unsortedActiveTree.sort(
    (acc, route) => acc.path.split('/').length - route.path.split('/').length
  );
  // The one with more nodes will be the latest match which will be the active route
  const activeRoute = tree.length > 0 ? tree[tree.length - 1] : routes.PRODUCTS;
  return { activeRoute, activeRouteTree: tree };
};

export default useGetActiveRouteAndTree;
