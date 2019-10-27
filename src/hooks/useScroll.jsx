
import React from 'react';

export const UseScroll = () => {

    const handleClick = () => {
        let node = document.getElementById("scroll");
        window.scrollTo(node.x, node.y)
    };

     const component = (props) => {
         return (
             <div onClick={handleClick} id={"scroll"}>
                 {props.children}
             </div>
         );
     };

    return [component, handleClick];

};