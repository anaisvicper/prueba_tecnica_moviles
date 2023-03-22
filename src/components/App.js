import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import routes from '../config/routes';
import ErrorBoundary from './ErrorBoundary';

const AppBase = () => (
  <div className="App">
    <Header />
    <ErrorBoundary>
      <div className="full-space">
        <Outlet />
      </div>
    </ErrorBoundary>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<AppBase />}>
          {/* Redirect to list */}
          <Route index element={<Navigate to={routes.PRODUCTS.path} />} />
          {/* Product list */}
          <Route path={routes.PRODUCTS.path} element={<ProductList />} />
          {/* Product detail */}
          <Route
            path={routes.PRODUCT_DETAIL.path}
            element={<ProductDetail />}
          />
          {/* Redirect to list */}
          <Route path="*" element={<Navigate to={routes.PRODUCTS.path} />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
