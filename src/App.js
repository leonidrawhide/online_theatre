import './App.css';
import {Routes, Route, Outlet, Link } from 'react-router-dom';
import MoviePage from './components/MoviePage';
import IndexPage from './components/IndexPage';
import logo from './img/lenya_kino-01.png'
import AdminPage from './components/AdminPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<HeaderLayout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path={'admin'} element={<AdminPage/>}/>
        <Route path={':id'} element={<MoviePage/>}/>
      </Route>
    </Routes>
  );
}

function HeaderLayout() {
  return (
    <div>
        <header className="header">
          <div class="header__contents">
            
            <Link to="/" className={'link'}>
              <div class="header__contents_img">
                <img src={logo} alt="Логотип кинотеатра"/>
              </div>
            </Link>
            <div class="header__contents_title">
              <h1>Онлайн-кинотеатр</h1>
            </div>
            <Link to="admin" className={'link header__contents_admin-link'}>
              <div>
                <h3>Админ панель</h3>
              </div>
            </Link>
          </div>
        </header>
      <Outlet/>
      <footer className="footer">
        <div class="footer__all-rights">
          <p>All rights reserved, 2021 <br /> Это учебный проект</p>
        </div>
      </footer>
    </div>
  )
}

export default App;