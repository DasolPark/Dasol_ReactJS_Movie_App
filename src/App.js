import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './routes/Home';
import Year from './routes/Year';
import Detail from './routes/Detail';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/year" exact={true} component={Year}></Route>
        <Route path="/movie/:id" component={Detail}></Route>
      </HashRouter>
    );
  }
}

export default App;
