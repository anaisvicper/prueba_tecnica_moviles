import { render, screen } from '@testing-library/react';
import productMock from '../../__mocks__/mockProduct';
import TestProviders from '../../../setupTests';
import ProductDetail from '../ProductDetail';
import { act } from 'react-dom/test-utils';

const DESCRIPTION_MOCK = 'Description mock';
const ACTIONS_MOCK = 'Actions mock';
const getProductDetailMock = () => Promise.resolve(productMock);

jest.mock('../Description', () => () => <div>{DESCRIPTION_MOCK}</div>);
jest.mock('../Actions', () => () => <div>{ACTIONS_MOCK}</div>);
jest.mock('../../../store/detail/api', () => ({
  getProductDetail: getProductDetailMock,
}));

describe('ProductDetail tests', () => {
  test('shows image', async () => {
    await act(async () =>
      render(<ProductDetail />, { wrapper: TestProviders })
    );
    const productImg = screen.getByAltText(
      `${productMock.brand} phone model ${productMock.model}`
    );
    expect(productImg).toHaveAttribute('src');
  });
  test('shows description', async () => {
    await act(async () =>
      render(<ProductDetail />, { wrapper: TestProviders })
    );
    const descriptionMock = screen.getByText(DESCRIPTION_MOCK);
    expect(descriptionMock).toBeInTheDocument();
  });
  test('shows actions', async () => {
    await act(async () =>
      render(<ProductDetail />, { wrapper: TestProviders })
    );
    const actionMock = screen.getByText(ACTIONS_MOCK);
    expect(actionMock).toBeInTheDocument();
  });
});
