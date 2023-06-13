import { legacy_createStore as createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import counterReducer from '../redux/reducers/counterReducer';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ counterReducer }), initialState),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

export default renderWithRedux;
