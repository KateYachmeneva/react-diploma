import React from 'react';

const Header = () => (<header class="container">
<div class="row">
  <div class="col">
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="/">
      <img src="./img/header-logo.png" alt="Bosa Noga"/>
      </a>
      <div class="collapase navbar-collapse" id="navbarMain">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Главная</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/catalog.html">Каталог</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about.html">О магазине</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacts.html">Контакты</a>
          </li>
        </ul>
        <div>
          <div class="header-controls-pics">
            <div data-id="search-expander" class="header-controls-pic header-controls-search"></div>
            {/* <!-- Do programmatic navigation on click to /cart.html --> */}
            <div class="header-controls-pic header-controls-cart">
              <div class="header-controls-cart-full">1</div>
              <div class="header-controls-cart-menu"></div>
            </div>
          </div>
          <form data-id="search-form" class="header-controls-search-form form-inline invisible">
            <input class="form-control" placeholder="Поиск"/>
          </form>
        </div>
      </div>
    </nav>
  </div>
</div>
</header>);
export default Header;
