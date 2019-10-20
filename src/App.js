import React from 'react';
import './App.css';

// Components
import Req1 from './components/Req1/req1';
import Req2 from './components/Req2/req2';

function App() {
  return (
    <div className="App">
      <h3>Requirement 1: Support maximum of 2 numbers using a comma delimiter.</h3>
      <Req1/>
      <h3>Requirement 2: Remove the maximum constraint for numbers.</h3>
      <Req2/>
    </div>
  );
}

export default App;
