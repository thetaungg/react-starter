import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './root-reducer';

export const history = createBrowserHistory();

export const store = createStore(
    rootReducer(history),
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);
