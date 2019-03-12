import React, { Component } from 'react';
import Header from './components/header/Header';
import TopNews from './components/top_news/TopNews';
import Footer from './components/footer/Footer.js';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
	      <div className="App">

	        <Header/>

	        <Route exact path="/" render={(props) => <TopNews {...props} news={'noticias-destaque'} />} />
	        <Route path="/brasil" render={(props) => <TopNews {...props} news={'noticias-brasil'} />} />
	        <Route path="/eua" render={(props) => <TopNews {...props} news={'noticias-eua'} />} />
	        <Route path="/argentina" render={(props) => <TopNews {...props} news={'noticias-argentina'} />} />
	        <Route path="/franca" render={(props) => <TopNews {...props} news={'noticias-franca'} />} />

	        <Footer />

	      </div>
      </Router>
    );
  }
}

export default App;
