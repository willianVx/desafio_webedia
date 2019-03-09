import React, { Component } from 'react';
import Search from './search/Search';
import Menu from './menu/Menu';
import Logo from '../utils/logo.js';

class Header extends Component{
  render(){
    return(
      <header>
        <div>
      	  <Menu />
      	  <Logo />
      	  <Search />
      	</div>
      </header>
	)
  }
}

export default Header;