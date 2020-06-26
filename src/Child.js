import React, { useContext } from 'react';
import { Contextcounter } from './Contextcounter';

export const Child = () => {
    let count = useContext(Contextcounter);
    return (
        <div>
            <h2>Counter is : {count}</h2>

            <button onClick={() => { count[1](++count[0]) }} > Increment</button>
        </div>
    );
}