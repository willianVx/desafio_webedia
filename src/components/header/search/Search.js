import React, { Component } from 'react';
import './search_style.css';

class Search extends Component{

  constructor(props){
    super(props);
    this.state = {search_value: ''};

  	this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
  }

  render(){
    return(
    <div className="search_container" onFocus={ this.onFocus } onBlur={ this.onBlur }>
      <form onSubmit={this.handleSubmit}>
    		<input type="text" placeholder="Pesquisa..." name = "search_value" value={this.state.search_value} onChange={this.handleChange} />
        <div className="search_icon" onClick={this.handleSubmit}></div>
  		  <div className="search" onClick={this.handleSubmit}></div>
      </form>
	  </div>
	  )
  }
  
}

export default Search;