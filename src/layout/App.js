import React from 'react';
import '../styles/App.css';
import {testAction} from "../actions/test";
import {connect} from "react-redux";
import {actionCreator} from "../sagas/sagas";


const styles = {
    textAlign: "center"
};

const App = (props) => {

    const handleClick = () => {
        props.testAction();
        props.actionCreator();
    };

    console.log("Props:", props);
    return (
        <div style={styles}>
            <h1>React Redux Starter</h1>
            <button onClick={handleClick}>Click me!</button>
            <h1>Store value: {props.test}</h1>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        test: state.testReducer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        testAction: () => dispatch(testAction()),
        actionCreator: () => dispatch(actionCreator())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
