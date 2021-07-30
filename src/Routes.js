import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import DaeungLogin from './pages/daeung/Login/Login';
import JaehyunLogin from './pages/jaehyun/Login/JaehyunLogin';
import JiseonLogin from './pages/jiseon/Login/Login';
import KayoungLogin from './pages/kayoung/Login/Login';
import TaekjunLogin from './pages/taekjun/Login/Login';

import DaeungMain from './pages/daeung/Main/Main';
import JaehyunMain from './pages/jaehyun/Main/JaehyunMain';
import JiseonMain from './pages/jiseon/Main/Main';
import KayoungMain from './pages/kayoung/Main/Main';
import TaekjunMain from './pages/taekjun/Main/Main';
import App from './App';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/DaeungLogin" component={DaeungLogin} />
          <Route exact path="/JaehyunLogin" component={JaehyunLogin} />
          <Route exact path="/JiseonLogin" component={JiseonLogin} />
          <Route exact path="/KayoungLogin" component={KayoungLogin} />
          <Route exact path="/TaekjunLogin" component={TaekjunLogin} />

          <Route exact path="/DaeungMain" component={DaeungMain} />
          <Route exact path="/JaehyunMain" component={JaehyunMain} />
          <Route exact path="/JiseonMain" component={JiseonMain} />
          <Route exact path="/KayoungMain" component={KayoungMain} />
          <Route exact path="/TaekjunMain" component={TaekjunMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
