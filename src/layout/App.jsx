import React from 'react';
import '../styles/style.css';
import {connect} from "react-redux";
import {UseSize} from "../hooks/useSize";
import {UseScroll} from "../hooks/useScroll";
import {UseLoader} from "../hooks/useLoader";

const App = (props) => {

    const [ScrollTo, callback] = UseScroll();

    return (
        <div className={"text-center"}>
            <h1>
                <UseLoader loading={true}>
                    <ScrollTo>
                        <UseSize/>
                    </ScrollTo>
                </UseLoader>
            </h1>
        </div>
    );
};


export default connect(null, null)(App);
