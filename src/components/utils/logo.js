import React, { Component } from 'react';
import brand_webedia from '../img/brand_webedia.png';
import './utils.css';

class Logo extends Component{
  constructor(props){
  	super(props);
  	this.state = {
  		display: props.display
  	}
  }
  render(){
  	let styleDisplay = {display : this.props.display}

    return(
      	<img style={styleDisplay} className='brand_webedia' src={brand_webedia} alt='Logo webedia' />
	  )
  }
}

export default Logo;