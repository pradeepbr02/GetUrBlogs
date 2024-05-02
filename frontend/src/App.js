import {Routes , Route } from 'react-router-dom'
import './App.css';
import About from './Pages/About';
import Article from './Pages/Article';
import ArticleList from './Pages/ArticleList';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import NavBar from './Pages/NavBar';
import LoginPage from './Pages/LoginPage';
import CreateAccount from './Pages/CreateAccount';
function App() {
  return (
    <div className="App">
   
    <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="articles" element={<Article/>}/>
      <Route path="articlelist/:articleid" element={<ArticleList/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="createaccount" element={<CreateAccount/>}/>
     </Routes>
    </div>
  );
}

export default App;
