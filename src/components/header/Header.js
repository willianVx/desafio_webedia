import React, { Component } from 'react';
import Search from './search/Search';
import Menu from './menu/Menu';
import Logo from '../utils/logo.js';
import './style_header.css';
import 'bootstrap-4-grid/css/grid.css';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      switch_display: 'block'
    }
    this.handle_display = this.handle_display.bind(this);
  }

  handle_display(focus){
    let screenSize = document.documentElement.clientWidth;
    console.log(screenSize);
    if (screenSize >= 601) {
      return;
    }
    if (focus) {
      this.setState({
        switch_display:'none'
      });
    }else{
      this.setState({
        switch_display:'block'
      });
    }
  }

  render(){
    let switch_display = this.state.switch_display;

    return(
      <header>
        <div className='header_container'>
          <Menu display={switch_display}/>
          <div>
      	   <Logo display={switch_display} />
      	   <Search whenPutInFocus={this.handle_display} />
          </div>
      	</div>
      </header>
	  )
  }
}

export default Header;