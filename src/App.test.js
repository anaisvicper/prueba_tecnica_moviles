import { render, screen } from '@testing-library/react';
import App from './App';

describe('App tests', () => {
  test('show loading', () => {
    render(<App />);
    const linkElement = screen.getByText('Cargando...');
    expect(linkElement).toBeInTheDocument();
  });
});
