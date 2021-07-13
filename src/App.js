import { Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/HomePage';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import NewArticle from './components/NewArticle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;
