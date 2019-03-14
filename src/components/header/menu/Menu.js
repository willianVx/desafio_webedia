import React, { Component } from 'react';
import './menu_style.css';
import 'bootstrap-4-grid/css/grid.css';
import { NavLink } from 'react-router-dom';

class Menu extends Component{

  constructor(props){
    super(props);
    this.state = {  
      MobileMenuButton : 'topnav_container',
      display: props.display 
    }
    this.handleMobileMenu = this.handleMobileMenu.bind(this);
  } 

  handleMobileMenu(){
    if(this.state.MobileMenuButton === 'topnav_container'){
      this.setState({
        MobileMenuButton: 'topnav_container topnav_container_active' 
      })
    }else{
      this.setState({
        MobileMenuButton: 'topnav_container'
      });
    }
  }

  render(){
    let mobileController = this.state.MobileMenuButton;
    let styleDisplay = {display : this.props.display};
    return(
      
      <div style={styleDisplay} className='menu_container div_trasition'>
        
        <div className="topnav_mobile_button" onClick={this.handleMobileMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={mobileController}>

        <div className='topnav_itens container'>

         <ul>
           <li><NavLink to="/">Notícias em destaque</NavLink></li>
           <li><NavLink to="/brasil">Notícias do Brasil</NavLink></li>
           <li><NavLink to="/eua">Notícias do EUA</NavLink></li>
           <li><NavLink to="/argentina">Notícias da Argentina</NavLink></li>
           <li><NavLink to="/franca">Notícias da França</NavLink></li>
         </ul>

        </div>

        <button className="topnav_button_active" onClick={this.handleMobileMenu}>X</button>

        </div>

    </div>
    )
  }
}

export default Menu;