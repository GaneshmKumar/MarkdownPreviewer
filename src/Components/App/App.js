import React, { Component } from 'react';
import Markdown from '../Markdown/Markdown';
import './App.scss';

class App extends Component {
  render () {
    return (
      <div className="container">
        <header>header</header>
        <Markdown />
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
