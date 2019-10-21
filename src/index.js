import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import loggerMiddleware from "./middleware/logger"
import thunkMiddleware from "redux-thunk";
import monitorReducerEnhancer from "./enhancers/monitorReducer";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')

);

serviceWorker.unregister();

function configureStore() {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    return createStore(rootReducer, undefined, composedEnhancers);
}
