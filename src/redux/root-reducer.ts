import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';

import { ReduxState } from '@/interfaces/redux';

const rootReducer = (history: History) =>
    combineReducers<ReduxState>({
        router: connectRouter(history)
    });

export default rootReducer;
