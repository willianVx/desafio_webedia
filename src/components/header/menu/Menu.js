import React, { Component } from 'react';
import './menu_style.css';

class Menu extends Component{

  constructor(props){
    super(props);
    this.state = {	
      MobileMenuButton : 'topnav' 
    }

    this.handleMobileMenu = this.handleMobileMenu.bind(this);
  }	

  handleMobileMenu(){
    if(this.state.MobileMenuButton === 'topnav'){
      this.setState({
      	MobileMenuButton: 'topnav responsive' 
      })
    }else{
      this.setState({
        MobileMenuButton: 'topnav'
      });
    }
  }

  render(){
  	//var mobileController = this.state.MobileMenuButton;
    return(
     	
     	<div>

	    	<div className='topnav_container'>

			  <div className='topnav_itens'>

			   <ul>
				   <li><a href="/TopNews">Notícias em destaque</a></li>
				   <li><a href="/TopNews/brasil">Notícias do Brasil</a></li>
				   <li><a href="/TopNews/eua">Notícias do EUA</a></li>
				   <li><a href="/TopNews/argentina">Notícias da Argentina</a></li>
				   <li><a href="/TopNews/franca">Notícias da França</a></li>
			   </ul>
			   
			  </div>
            
              <button>X</button>

			</div>

		</div>
	  )
  }
}

export default Menu;