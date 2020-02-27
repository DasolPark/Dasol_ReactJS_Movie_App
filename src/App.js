import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import Year from './routes/Year';
import Navigation from './components/Navigation';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/year" exact={true} component={Year}></Route>
      </HashRouter>
    );
  }
}

export default App;
