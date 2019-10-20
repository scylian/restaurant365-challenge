import React from 'react';
import './App.css';

// Components
import Req1 from './components/Req1/req1';
import Req2 from './components/Req2/req2';
import Req3 from './components/Req3/req3';

function App() {
  return (
    <div className="App">
      <h3>Requirement 1: Support maximum of 2 numbers using a comma delimiter.</h3>
      <Req1/>
      <h3>Requirement 2: Remove the maximum constraint for numbers.</h3>
      <Req2/>
      <h3>Requirement 3: Support a newline character as an alternative delimiter.</h3>
      <Req3/>
    </div>
  );
}

export default App;
