import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [state, setState] = useState(0);
  const handleClick = () => {
    debugger
    setState(prev => prev + 1);
   }
  return (
    <>
      <button onClick={handleClick}>Update</button>
    </>
      
  );
}

export default App;
