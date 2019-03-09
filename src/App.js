import React, { Component } from 'react';
import Header from './components/header/Header';
import TopNews from './components/top_news/TopNews';
import Footer from './components/footer/Footer.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <TopNews/>
        <Footer />
      </div>
    );
  }
}

export default App;
