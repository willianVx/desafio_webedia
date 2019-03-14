import React, { Component } from 'react';
import Logo from '../utils/logo.js';
import './footer_style.css';

class Footer extends Component{

  render(){
    return(
      <footer>
        <Logo link={'/webedia/vagas'} />
      </footer>
	  )
  }

}

export default Footer;