import React, { useReducer } from 'react';
import { Counterreducer } from './Counterreducer';

export const Child2 =()=>{
    let [state,dispatch]=useReducer(Counterreducer,90)
    return(
        <div>
            <h4>Reducer is : {state}</h4>
            <button onClick={ ()=> dispatch('INCREMENT')   } >Increment from  Reducer</button>
        </div>
    );
}