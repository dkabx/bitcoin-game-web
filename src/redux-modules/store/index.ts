import { createStore, compose } from 'redux';

import history from 'common/utils/history';

import rootReducer from './rootReducer';
import { StoreConfig } from './Types';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux sagas is a middleware that we apply to the store
export const configStore = (): StoreConfig => {
  const store = createStore(rootReducer(history));
  return { store };
};
