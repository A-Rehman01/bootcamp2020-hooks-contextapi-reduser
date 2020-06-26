import React, { useState } from 'react';
import './App.css';
import {Child} from './Child';
import {Child2} from './Child2';
import {Parent} from './Parent';
import {Contextcounter}  from './Contextcounter';

function App() {
  let count=useState(0);
  return (

    <Contextcounter.Provider value={count}>
      <Parent></Parent>
      <Child></Child>
      
    </Contextcounter.Provider>
  );
}

export default App;
