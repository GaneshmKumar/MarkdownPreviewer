import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Markdown from '../Markdown/Markdown';
import Footer from '../Footer/Footer';
import './App.scss';

class App extends Component {
  render () {
    return (
      <div className="container">
        <NavBar />
        <Markdown />
        <Footer />
      </div>
    );
  }
}

export default App;
