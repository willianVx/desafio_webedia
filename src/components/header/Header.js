import React, { Component } from 'react';
import Search from './search/Search';
import Menu from './menu/Menu';
import Logo from '../utils/logo.js';
import 'bootstrap-4-grid/css/grid.css';
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
    let screen = document.documentElement.clientWidth;
    if (screen >= 601) {
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
            <div className='header_top container'>
                <Logo display={switch_display} />
                <Search whenPutInFocus={this.handle_display} />
            </div>
        </div>
      </header>
    )
  }
}

export default Header;