import React, { Component } from 'react';
import Search from './search/Search';
import Menu from './menu/Menu';
import Logo from '../utils/logo.js';
import './style_header.css';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      switch_display: 'block'
    }
    this.handle_display = this.handle_display.bind(this);
  }

  handle_display(focus){
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
          <Logo display={switch_display} />
          <Search whenPutInFocus={this.handle_display} />
        </div>
      </header>
    )
  }
}

export default Header;