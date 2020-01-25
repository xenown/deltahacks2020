import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Land from './Land.js'
import Search from './Search.js'
import Survey from './Survey.js'
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React Routing</h1>
          </header>
          <Switch>
            <Route exact path="/" component={Land}/>
            <Route path="/search" component={Search}/>
            <Route path="/survey" component={Survey}/>
          </Switch>
        </div>
    );
  }
}

export default App;
