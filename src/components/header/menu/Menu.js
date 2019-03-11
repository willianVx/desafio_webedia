import React, { Component } from 'react';
import './menu_style.css';
import 'bootstrap-4-grid/css/grid.css';

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
           <li><a href="/TopNews">Notícias em destaque</a></li>
           <li><a href="/TopNews/brasil">Notícias do Brasil</a></li>
           <li><a href="/TopNews/eua">Notícias do EUA</a></li>
           <li><a href="/TopNews/argentina">Notícias da Argentina</a></li>
           <li><a href="/TopNews/franca">Notícias da França</a></li>
         </ul>

        </div>

        <button className="topnav_button_active" onClick={this.handleMobileMenu}>X</button>

        </div>

    </div>
    )
  }
}

export default Menu;