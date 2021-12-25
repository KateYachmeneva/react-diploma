import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import SearchForm from '../searchForm/SearchForm.jsx';
import CartControl from '../cart/CartControl.jsx';
import img from '../../img/header-logo.png';

const links = [
  { title: 'Главная', alias: '/' },
  { title: 'Каталог', alias: '/catalog' },
  { title: 'О магазине', alias: '/about' },
  { title: 'Контакты', alias: '/contacts' },
];

function Header({ location }) {
  return (
    <React.Fragment>
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img src={img} alt="Bosa Noga" />
              </a>
              <div className="collapase navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                  {links.map((link) => (
                    <li
                      key={nanoid()}
                      className={`nav-item${
                        location.pathname === link.alias ? ' active' : ''
                      }`}
                    >
                      <Link
                        className="nav-link"
                        to={`/${process.env.PUBLIC_URL}${link.alias}`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div>
                  <div className="header-controls-pics">
                    <SearchForm header="true" prefix="header-controls" />
                    <CartControl />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
export default withRouter(Header);
