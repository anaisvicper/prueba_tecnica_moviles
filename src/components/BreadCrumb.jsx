import { NavLink, generatePath, useParams } from 'react-router-dom';
import '../App.css';
import useGetActiveRouteAndTree from '../hooks/useGetActiveRouteAndTree';

const BreadCrumb = () => {
  const { activeRouteTree } = useGetActiveRouteAndTree();
  const params = useParams();
  return activeRouteTree.map((route, index) => {
    const isNotLast = index !== activeRouteTree.length - 1;
    const routeParamValues = route.params.reduce(
      (acc, routeParam) => ({ ...acc, [routeParam]: params[routeParam] }),
      {}
    );
    const toPath = generatePath(route.path, routeParamValues);
    return (
      <NavLink key={route.path} to={toPath}>
        <span>{route.name}</span>
        {isNotLast ? <span> {' > '} </span> : ''}
      </NavLink>
    );
  });
};

export default BreadCrumb;
