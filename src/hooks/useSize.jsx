import React, {useState, useEffect} from 'react';

export const UseSize = props => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setWidth(window.outerWidth);
            setHeight(window.outerHeight);
        });
        return () => {
            window.removeEventListener("resize", null);
        }
    });

    return (
        <div>
            {width} , {height}
        </div>
    )
};