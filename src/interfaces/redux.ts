import { RouterState } from 'connected-react-router';

export interface ReduxState {
    router: RouterState;
}

export type DispatchType = (action: ActionType) => ActionType;

export interface ActionType {
    type: string;
    payload?: any;
}
