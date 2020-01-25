import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrimarySearchAppBar from './Navbar.js'
import Land from './Land.js'
import Search from './Search.js'
import Survey from './Survey.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbarOpen: false,
      input: ""
    }
  }

  setText = (text) => {
    this.setState({
      input: text
    });
    console.log(this.state.input);
  }

  setSearchbarOpen = () => {
    this.setState({
      searchbarOpen: true
    });
  }

  setSearchbarClose = () => {
    this.setState({
      searchbarOpen: false
    });
  }

  render() {
    return (
      <div className="App">
        <PrimarySearchAppBar text={this.state.input} setText={this.setText} searchbarOpen={this.state.searchbarOpen} setSearchbarOpen={this.setSearchbarOpen} setSearchbarClose={this.setSearchbarClose}/>
        <Switch>
          <Route exact path="/"><Land /></Route>
          <Route path="/search" ><Search search={this.state.input}/></Route>
          <Route path="/survey" ><Survey /></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
