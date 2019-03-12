import React, { Component } from 'react';
import 'bootstrap-4-grid/css/grid.css';
import './TopNews_style.css';

class TopNews extends Component{

  render(){
    return(
      <section className='container top_news_container'>
      {this.props.news}
        <div className='row'>

          <div className='col-lg-5 top_news_card card_shadow'>
            <div className='top_news_img'></div>
            <div className='top_news_info'>
              <p>27/10/1989</p>
              <h2>Lorem inpsum</h2>
              <p>Lorem inpsum doler sit amotn wfjhkjhjkdfhsdjhfskjdh</p>
              <p>Por: Lorem Inpsum</p>
            </div>
          </div>

          <div className='col-lg-5 top_news_card card_shadow'>
            <div className='top_news_img'></div>
            <div className='top_news_info'>
              <p>27/10/1989</p>
              <h2>Lorem inpsum</h2>
              <p>Lorem inpsum doler sit amotn wfjhkjhjkdfhsdjhfskjdh</p>
              <p>Por: Lorem Inpsum</p>
            </div>
          </div>

          <div className='row top_news_warap_card'>

            <div className='top_news_card'>
              <div className='top_news_img'></div>
              <div className='top_news_info'>
                <p>27/10/1989</p>
                <h2>Lorem inpsum</h2>
                <p>Lorem inpsum doler sit amotn wfjhkjhjkdfhsdjhfskjdh</p>
                <p>Por: Lorem Inpsum</p>
              </div>
            </div>


            <div className='top_news_card'>
              <div className='top_news_img'></div>
              <div className='top_news_info'>
                <p>27/10/1989</p>
                <h2>Lorem inpsum</h2>
                <p>Lorem inpsum doler sit amotn wfjhkjhjkdfhsdjhfskjdh</p>
                <p>Por: Lorem Inpsum</p>
              </div>
            </div>


            <div className='top_news_card'>
              <div className='top_news_img'></div>
              <div className='top_news_info'>
                <p>27/10/1989</p>
                <h2>Lorem inpsum</h2>
                <p>Lorem inpsum doler sit amotn wfjhkjhjkdfhsdjhfskjdh</p>
                <p>Por: Lorem Inpsum</p>
              </div>
            </div>

          </div>

        </div>
      </section>
	  )
  }

}

export default TopNews;