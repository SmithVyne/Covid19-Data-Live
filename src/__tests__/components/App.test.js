import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../../components/App';
import Reducer from '../../reducer';

describe('Tests the app functions', () => {
  const store = createStore(Reducer);

  const { getByRole, getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  
  it('First displays the home page with a nav bar', async () => {
    await waitFor(() => {
      expect(getByRole('navigation')).toBeInTheDocument();
    });
  });
});
