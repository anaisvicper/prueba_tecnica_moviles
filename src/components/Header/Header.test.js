import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TestProviders from '../../setupTests';
import Header from './Header';

const BREAD_CRUMB_MOCK = 'BreadCrumb mock';
const CART_MOCK = 'Cart mock';

jest.mock('../BreadCrumb', () => () => BREAD_CRUMB_MOCK);
jest.mock('../Cart', () => () => CART_MOCK);

describe('Header tests', () => {
  test('shows logo', () => {
    render(<Header />, { wrapper: TestProviders });
    const logoImg = screen.getByAltText('logo');
    expect(logoImg).toHaveAttribute('src');
  });
  test('shows breadcrumbs', () => {
    render(<Header />, { wrapper: TestProviders });
    const breadCrumbMock = screen.getByText(BREAD_CRUMB_MOCK);
    expect(breadCrumbMock).toBeInTheDocument();
  });
  test('shows cart', () => {
    render(<Header />, { wrapper: TestProviders });
    const cartMock = screen.getByText(CART_MOCK);
    expect(cartMock).toBeInTheDocument();
  });
});
