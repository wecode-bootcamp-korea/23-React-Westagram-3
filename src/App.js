import React from 'react';
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/jiseonLogin">jiseon</Link>
        </div>
        <div>
          <Link to="/daeungLogin">daeung</Link>
        </div>
        <div>
          <Link to="/jiseonLogin">kayoung</Link>
        </div>
        <div>
          <Link to="/taekjunLogin">taekjun</Link>
        </div>
        <div>
          <Link to="/jaehyunLogin">Jaehyun</Link>
        </div>
      </div>
    );
  }
}

export default App;
