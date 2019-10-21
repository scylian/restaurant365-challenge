import React from 'react';
import './App.css';

// Components
import Req1 from './components/Req1/req1';
import Req2 from './components/Req2/req2';
import Req3 from './components/Req3/req3';
import Req4 from './components/Req4/req4';
import Req5 from './components/Req5/req5';
import Req6 from './components/Req6/req6';
import Req7 from './components/Req7/req7';
import Req8 from './components/Req8/req8';

function App() {
  return (
    <div className="App">
      <h3>Requirement 1: Support maximum of 2 numbers using a comma delimiter.</h3>
      <Req1/>
      <h3>Requirement 2: Remove the maximum constraint for numbers.</h3>
      <Req2/>
      <h3>Requirement 3: Support a newline character as an alternative delimiter.</h3>
      <Req3/>
      <h3>Requirement 4: Deny negative numbers by throwing an exception that includes all of the negative numbers provided.</h3>
      <Req4/>
      <h3>Requirement 5: Make any value greater than 1000 an invalid number.</h3>
      <Req5/>
      <h3>Requirement 6: Support 1 custom delimiter of a single character.</h3>
      <h4>Format: <code style={{backgroundColor:'#ccc'}}>{'//{delimiter}'}\n{'{numbers}'}</code></h4>
      <Req6/>
      <h3>Requirement 7: Support 1 custom delimiter of any length.</h3>
      <h4>Format: <code style={{backgroundColor:'#ccc'}}>{'//[{delimiter}]'}\n{'{numbers}'}</code></h4>
      <Req7/>
      <h3>Requirement 8: Support multiple delimiters of any length.</h3>
      <h4>Format: <code style={{backgroundColor:'#ccc'}}>{'//[{delimiter1}][{delimiter2}]...'}\n{'{numbers}'}</code></h4>
      <Req8/>
    </div>
  );
}

export default App;
