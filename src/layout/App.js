import React from 'react';
import '../styles/App.css';
import {testAction} from "../actions/test";
import {connect} from "react-redux";


const styles = {
    textAlign: "center"
};

const App = (props) => {

    const handleClick = () => {
        console.log(props);
        props.testAction();
    };

    return (
        <div style={styles}>
            <h1>React Redux Starter</h1>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
};

const mapStateToProps = (store) => {
    return {
        test: store.test,
    }
};

const mapDispatchToProps = {testAction};

export default connect(mapStateToProps, mapDispatchToProps)(App);
