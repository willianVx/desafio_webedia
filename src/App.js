import React, { Component } from 'react';
import Header from './components/header/Header';
import TopNews from './components/top_news/TopNews';
import Footer from './components/footer/Footer.js';
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

class App extends Component {

	constructor(props){

		super(props);
		this.state = {
			search_value: ''
		}
		this.updateSearchValue = this.updateSearchValue.bind(this);
	}

	updateSearchValue(value){
		this.setState({
			search_value: value
		})
	}

  render() {
    return (
      <Router>
	      <div className="App">

	        <Header updateSearchValue={this.updateSearchValue} />

	        <Route exact path="/" render={(props) => <TopNews {...props} news={'br'} />} />
	        <Route path="/brasil" render={(props) => <TopNews {...props} news={'br'} />} />
	        <Route path="/eua" render={(props) => <TopNews {...props} news={'us'} />} />
	        <Route path="/argentina" render={(props) => <TopNews {...props} news={'ar'} />} />
	        <Route path="/franca" render={(props) => <TopNews {...props} news={'fr'} />} />
					<Route path='/webedia/vagas' component={() => { window.location = 'https://github.com/frontendbr/vagas/issues/855'; return null;} }/>

					<Route path="/search" render={(props) => <TopNews {...props} news={'null'} search_value={this.state.search_value} />} />

	        <Footer />

	      </div>
      </Router>
    );
  }
}

export default App;