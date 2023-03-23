import logo from '../../images/logo.png';
import '../App.css';
import BreadCrumb from './BreadCrumb';
import Cart from './Cart';
import routes from '../../config/routes';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledHeader = styled.header(() => ({
  backgroundColor: '#282c34',
  minHeight: '64px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '16px',
  color: 'white',
}));
const StyledHeaderItem = styled.div(() => ({
  display: 'flex',
  padding: '0 3vmin',
}));
const StyledBreadcrumbContainer = styled(StyledHeaderItem)(() => ({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: '1',
  alignItems: 'center',
  justifyContent: 'start',
}));
const StyledAppLogo = styled.img(() => ({
  height: '30px',
}));

const Header = () => (
  <StyledHeader>
    <StyledHeaderItem>
      <NavLink to={routes.PRODUCTS.path}>
        <StyledAppLogo src={logo} alt="logo" />
      </NavLink>
    </StyledHeaderItem>
    <StyledBreadcrumbContainer>
      <BreadCrumb />
    </StyledBreadcrumbContainer>
    <StyledHeaderItem>
      <Cart />
    </StyledHeaderItem>
  </StyledHeader>
);

export default Header;
