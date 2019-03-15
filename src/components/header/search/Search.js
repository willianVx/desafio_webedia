import React, { Component } from 'react';
import './search_style.css';
import {Redirect} from "react-router-dom";

class Search extends Component{

  constructor(props){
    super(props);
    this.state = {search_value: '', redirectToSearch: false};

    this.searchInput = React.createRef();

  	this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resStartRedirect = this.resStartRedirect.bind(this);
  }

  componentDidMount() {
    let screen = document.documentElement.clientWidth;
    if (screen <= 901) {
      return;
    }
    this.searchInput.current.focus();
  }

  onFocus(){
  	this.props.whenPutInFocus(true);
  }  

  onBlur(){
  	this.props.whenPutInFocus(false);
  }

  handleChange(event){
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.updateSearchValue(this.state.search_value);
    this.setState({
      redirectToSearch: true
    });
  }

  resStartRedirect(){
    this.setState({
      redirectToSearch:false
    })
  }

  render(){
    const redirectToSearch = this.state.redirectToSearch;
    if (redirectToSearch === true) {
      this.resStartRedirect();
      return <Redirect to="/search" />
    }
    return(
    <div className="search_container" onFocus={ this.onFocus } onBlur={ this.onBlur }>
      <form onSubmit={this.handleSubmit}>
    		<input ref={this.searchInput} type="text" placeholder="Pesquisa" name = "search_value" value={this.state.search_value} onChange={this.handleChange} />
        <div className="search_icon" onClick={this.handleSubmit}></div>
  		  <div className="search" onClick={this.handleSubmit}></div>
      </form>
	  </div>
	  )
  }
  
}

export default Search;