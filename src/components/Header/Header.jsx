import logo from '../../images/logo.png';
import '../../App.css';
import BreadCrumb from '../BreadCrumb';
import Cart from '../Cart';

const Header = () => (
  <header className="header">
    <div className="header-item">
      <img src={logo} className="App-logo" alt="logo" />
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
