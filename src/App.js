import { Route } from 'react-router-dom'
import React, { Component, useState } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import NewArticle from './components/NewArticle';
import NewsList from './components/NewsList'
import NewsDetail from './components/NewsDetail'
import AddNews from './components/AddNews';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  function changeMode() {
    setDarkMode((prevState => !prevState))
  }


  return (
    <div className="App" id={darkMode ? "dark" : "light"}>
      <Navbar />
      <button id='mode-button' onClick={changeMode}>Change Mode</button>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/all-articles'>
        <ArticleList />
      </Route>
      <Route path='/articles/:id'>
        <ArticleDetail />
      </Route>
      <Route path='/new-article'>
        <NewArticle />
      </Route>
      <Route path='/all-news'>
        <NewsList />
      </Route>
      <Route path='/news/:id'>
        <NewsDetail />
      </Route>
      <Route path='/new-news'>
        <AddNews />
      </Route>
      <div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
