import React, { Component } from 'react';
import 'bootstrap-4-grid/css/grid.css';
import './TopNews_style.css';

class TopNews extends Component{

  constructor(props){
    super(props);

    this.state={
      country:  this.props.news || 'br',
      page: 1,
      articles: null
    }
  }

  componentDidMount() {

    let myHeaders = new Headers();

    let country = this.state.country;
    let page = this.state.page;

    let myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    fetch('https://newsapi.org/v2/top-headlines?' +
          'country=' + country + '&' +
          'pageSize=7&' +
          'page=' + page + '&' +
          'apiKey=e57869d5c03b48e78801cef6dae61741',myInit)
    .then(response =>{
      return response.json();
    })
    .then(data => {
      if (data.status === "ok") {
        var articles = data.articles
        this.setState({
          articles: articles
        });
      }
    });
  }

  render(){

    var articles = this.state.articles;

    console.log(articles);

    if (articles != null) {

      var Render_news_card = Object.keys(articles).map(function(key){
        console.log(articles[key]);
        return (
          <div key={key.toString()} className='col-lg-5 top_news_card card_shadow'>
            <div className='top_news_img'>
              <img src={articles[key].urlToImage} alt='article' />
            </div>
            <div className='top_news_info'>
              <p>{articles[key].publishedAt}</p>
              <h2>{articles[key].title}</h2>
              <p>{articles[key].description}</p>
              <p>Por: {articles[key].author}</p>
            </div>
          </div>
          )
      });

    }

    return(
      <section className='container top_news_container'>

      {Render_news_card}

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