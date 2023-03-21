import { render, screen } from '@testing-library/react';
import App from './App';
import routes from './config/routes';
import TestProviders from './setupTests';

describe('App tests', () => {
  test('show header checking by breadcrumb', () => {
    render(<App />, { wrapper: TestProviders });
    const linkElement = screen.getByText(routes.PRODUCTS.name);
    expect(linkElement).toBeInTheDocument();
  });
});
