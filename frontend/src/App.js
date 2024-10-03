import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import Raga from './components/Raga';
import Tala from './components/Tala';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menu" component={Menu} />
        <Route path="/raga" component={Raga} />
        <Route path="/tala" component={Tala} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
