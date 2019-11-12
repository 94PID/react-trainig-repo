import React, {useState} from 'react';

export const UseLoader = ({loading, children}) => {
    if (loading) {
        return <h1>spinner here!</h1>
    } else {
        return children;
    }
};