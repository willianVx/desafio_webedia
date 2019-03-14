import React, { Component } from 'react';
import 'bootstrap-4-grid/css/grid.css';
import './Topnews_style.css';

class TopNews extends Component{

  constructor(props){
    super(props);

    this.state={
      country:  this.props.news || 'br',
      page: 1,
      total_pages: 0,
      articles: null,
      paginationBarState: 'top_news_pagination_page_1'
    }
    this.fetchData = this.fetchData.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
    let myHeaders = new Headers();

    let country = this.state.country;
    let page = this.state.page;

    let myInit = { method: 'GET',
                   headers: myHeaders,
                   mode: 'cors',
                   cache: 'default' };

    
    var fetch_query;

    if (this.props.search_value) {
      fetch_query = 'https://newsapi.org/v2/everything?' +
      'q=' + this.props.search_value + '&' +
      'pageSize=7&' +
      'page=' + page + '&' +
      'apiKey=e57869d5c03b48e78801cef6dae61741';
    }else{
      fetch_query = 'https://newsapi.org/v2/top-headlines?' +
      'country=' + country + '&' +
      'pageSize=7&' +
      'page=' + page + '&' +
      'apiKey=e57869d5c03b48e78801cef6dae61741';
    }

    fetch(fetch_query, myInit)
    .then(response =>{
      return response.json();
    })
    .then(data => {
      if (data.status === "ok") {
        let articles = data.articles;
        let total_results = data.totalResults;
        let total_pages = Math.round(total_results / 7);

        this.setState({
          total_pages: total_pages,
          articles: articles
        });
      }
    });
  }

  setPage(page){

    let paginationBarState = ()=> {
      if (page === 1) {
        return 'top_news_pagination_page_1'
      }
      if (page === this.state.total_pages) {
        return 'top_news_pagination_lastPage'
      }else{
        return 'top_news_pagination'
      }
    }

    this.setState({page: page, paginationBarState: paginationBarState()}, 
      () => {
        this.fetchData();
      }
    );

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
              <p className='top_news_author'>{getAuthor(articles[key].author)}</p>
            </div>
          </div>
          )
      });

    }

    let formatNumberPage = (number) =>{
      let strPage = number.toString();
      if(strPage.length === 1) {
        return '0' + number;
      }else{
        return number;
      }
    }

    let getPage = (option) => {
      let currentPage = this.state.page;
      let total_pages = this.state.total_pages;

      let p = {
        firtPage: function(){
          if (currentPage === 2) {
            return this.lastPage();
          }else{
            return 1;
          }
        },
        lastPage: function(){
          if (currentPage === 1) {
            return 5;
          }else{
            return total_pages;
          }
        },
        currentPage: function(){
          if (currentPage === 1) {
            return 3
          }
          if(currentPage === total_pages){
            return currentPage - 2;
          }else{
            return currentPage
          }
        },
        prevPage: function(){
          if (currentPage === 1) {
            return 2;
          }
          if (currentPage === total_pages) {
            return currentPage -3;
          }else{
            return currentPage - 1;
          }
        },
        nextpage: function(){
          if (currentPage === 1) {
            return 4;
          }
          if(currentPage === total_pages) {
            return currentPage - 1;
          }else{
            return currentPage + 1;
          }
        }
      }
      return p[option]();
    }

    let paginationBarState = this.state.paginationBarState;

      return(
        <section className='container top_news_container'>
          <div className='row'>
          {Render_news_card}
          </div>
          <div className='row'>
            <div className={paginationBarState}>
              <span onClick={() => this.setPage(getPage('firtPage'))}>{formatNumberPage(getPage('firtPage'))}</span>
              <span onClick={() => this.setPage(getPage('prevPage'))}>{formatNumberPage(getPage('prevPage'))}</span>
              <span onClick={() => this.setPage(getPage('currentPage'))}>{formatNumberPage(getPage('currentPage'))}</span>
              <span className='top_news_button' onClick={() => this.setPage(getPage('nextpage'))}>{formatNumberPage(getPage('nextpage'))}</span>
              <span onClick={() => this.setPage(getPage('lastPage'))}>{formatNumberPage(getPage('lastPage'))}</span>
            </div>
          </div>
        </section>
      )

    }

}
export default TopNews;