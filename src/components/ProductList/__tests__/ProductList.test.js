import { render, screen } from '@testing-library/react';
import list from '../../__mocks__/mockList';
import TestProviders from '../../../setupTests';
import ProductList from '../ProductList';
import { act } from 'react-dom/test-utils';

const SEARCH_MOCK = 'Search mock';
const ITEM_MOCK = 'Item mock';
const getProductListMock = (dispatch) => () => Promise.resolve(list);
const useSelectorMock = (callback) =>
  callback({
    product: {
      list: {
        isLoading: false,
        productList: list,
      },
    },
  });

jest.mock('../Search', () => () => <div>{SEARCH_MOCK}</div>);
jest.mock('../Item', () => () => <div>{ITEM_MOCK}</div>);
jest.mock('../../../store/list/api', () => ({
  ...jest.requireActual('../../../store/detail/api'),
  getProductList: getProductListMock,
}));
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: useSelectorMock,
}));
describe('ProductList tests', () => {
  test('shows search', async () => {
    await act(async () => render(<ProductList />, { wrapper: TestProviders }));
    const searchMock = screen.getByText(SEARCH_MOCK);
    expect(searchMock).toBeInTheDocument();
  });
  test('shows item', async () => {
    await act(async () => render(<ProductList />, { wrapper: TestProviders }));
    const itemListMock = screen.getAllByText(ITEM_MOCK);
    expect(itemListMock.length).toBe(list.length);
  });
});
