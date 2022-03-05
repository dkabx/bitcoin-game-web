import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// create a root reducer
const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
  });

export default rootReducer;
