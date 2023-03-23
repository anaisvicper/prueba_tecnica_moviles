// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import ToastContextProvider from './components/ToastContext';
import store from './store/store';

const TestProviders = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <ToastContextProvider>{children}</ToastContextProvider>
    </BrowserRouter>
  </Provider>
);

export default TestProviders;
