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
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "reactstrap/es/Navbar";
import Nav from "reactstrap/es/Nav";
import {HashRouter, Link, Route} from "react-router-dom";

const store = configureStore();

const NavBarWrapper = () => {
    return (
        <Navbar className={"navbar"} expand={"md"}>
            <i className="fas fa-home navbar-item icon"/>
            <Nav>
                <Link className={"navbar-item "} to={"/profile"}>Profile</Link>
                <Link className={"navbar-item"} to={"/gallery"}>Gallery</Link>
            </Nav>
        </Navbar>
    )
};

const Routes = () => {
    return (
        <>
            <Route exact path={"/"} component={App}/>
            <Route path={"/profile"} render={() => <div>profile</div>} />
            <Route path={"/gallery"} render={() => <div>gallery</div>} />
        </>
    )
};

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <NavBarWrapper/>
            <Routes/>
        </HashRouter>
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
