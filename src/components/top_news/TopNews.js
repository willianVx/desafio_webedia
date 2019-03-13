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

    var getFormatedDate = function(date){
      let d = new Date(date);
      let day = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();
      return  day + '/' + month + '/' + year;
    }

    var getAuthor = function(author){
      if (author != null) {
        return 'Por: ' + author;
      }else{
        return '';
      }
    }

    if (articles != null) {

      var Render_news_card = Object.keys(articles).map(function(key){
        return (
          <div key={key.toString()} className='col-lg-5 top_news_card card_shadow'>
            <div className='top_news_img'>
              <img src={articles[key].urlToImage} alt='article' />
            </div>
            <div className='top_news_info'>
              <p>{getFormatedDate( articles[key].publishedAt )}</p>
              <h2>{articles[key].title}</h2>
              <p>{articles[key].description}</p>
              <p>{getAuthor(articles[key].author)}</p>
            </div>
          </div>
          )
      });

    }

    return(
      <section className='container top_news_container'>
        <div className='row'>
         {Render_news_card}
        </div>
        <div className='row'>
          <div className='top_news_pagination'>
            <span>01</span>
            <span>07</span>
            <span>08</span>
            <span>09</span>
            <span>18</span>
          </div>
        </div>
      </section>
	  )
  }

}

export default TopNews;