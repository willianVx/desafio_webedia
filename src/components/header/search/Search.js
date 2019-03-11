import React, { Component } from 'react';
import './search_style.css';

class Search extends Component{

  constructor(props){
  	super(props);
  	this.onFocus = this.onFocus.bind(this);
  	this.onBlur = this.onBlur.bind(this);
  }

  onFocus(){
  	this.props.whenPutInFocus(true);
  }  

  onBlur(){
  	this.props.whenPutInFocus(false);
  }

  render(){
    return(
    <div className="search_container" onFocus={ this.onFocus } onBlur={ this.onBlur }>
  		<input type="text" placeholder="Pesquisa..."/>
      <div className="search_icon"></div>
		  <div className="search"></div>
	  </div>
	  )
  }
}

export default Search;