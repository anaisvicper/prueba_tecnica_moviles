import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import ProductDetail from './ProductDetail';
import ProductsList from './ProductsList';
import routes from '../config/routes';

const AppBase = () => (
  <div className="App">
    <Header />
    <div className="full-space">
      <Outlet />
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppBase />}>
        {/* Redirect to list */}
        <Route index element={<Navigate to={routes.PRODUCTS.path} />} />
        {/* Product list */}
        <Route path={routes.PRODUCTS.path} element={<ProductsList />} />
        {/* Product detail */}
        <Route path={routes.PRODUCT_DETAIL.path} element={<ProductDetail />} />
        {/* Redirect to list */}
        <Route path="*" element={<Navigate to={routes.PRODUCTS.path} />} />
      </Route>
    </Routes>
  );
}

export default App;
