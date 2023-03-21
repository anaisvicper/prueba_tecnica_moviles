import logo from '../../images/logo.png';
import '../../App.css';
import BreadCrumb from '../BreadCrumb';
import Cart from '../Cart';
import routes from '../../config/routes';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header-item">
      <NavLink to={routes.PRODUCTS.path}>
        <img src={logo} className="App-logo" alt="logo" />
      </NavLink>
    </div>
    <div className="breadcrumb-container header-item">
      <BreadCrumb />
    </div>
    <div className="header-item">
      <Cart />
    </div>
  </header>
);

export default Header;
