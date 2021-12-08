import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './components/Menu/Menu';
import HomePage from './components/HomePage/HomePage';
import Catalog from './components/Catalog/Catalog ';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';


export default function App() {
  return (
    <>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route  path="/"  component={HomePage} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/catalog/:id" component={ItemDetails} />
          <Route  path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path = "/404" component = {notFound}/>
        <Redirect from='*' to='/404'/>
                </Switch>
      </div>
    </Router>
    </>
  );
}
<header class="container">
      <div class="row">
        <div class="col">
          <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="/">
            <img src="./img/header-logo.png" alt="Bosa Noga">
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
                  <!-- Do programmatic navigation on click to /cart.html -->
                  <div class="header-controls-pic header-controls-cart">
                    <div class="header-controls-cart-full">1</div>
                    <div class="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" class="header-controls-search-form form-inline invisible">
                  <input class="form-control" placeholder="Поиск">
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <main class="container">
      <div class="row">
        <div class="col">
          <div class="banner">
            <img src="./img/banner.jpg" class="img-fluid" alt="К весне готовы!">
            <h2 class="banner-header">К весне готовы!</h2>
          </div>
          <section class="top-sales">
            <h2 class="text-center">Хиты продаж!</h2>
            <div class="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <section class="catalog">
            <h2 class="text-center">Каталог</h2>
            <div class="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </div>
      </div>
    </main>
    <footer class="container bg-light footer">
      <div class="row">
        <div class="col">
          <section>
            <h5>Информация</h5>
            <ul class="nav flex-column">
              <li class="nav-item"><a href="/about.html" class="nav-link">О магазине</a></li>
              <li class="nav-item"><a href="/catalog.html" class="nav-link">Каталог</a></li>
              <li class="nav-item"><a href="/contacts.html" class="nav-link">Контакты</a></li>
            </ul>
          </section>
        </div>
        <div class="col">
          <section>
            <h5>Принимаем к оплате:</h5>
            <div class="footer-pay">
              <div class="footer-pay-systems footer-pay-systems-paypal"></div>
              <div class="footer-pay-systems footer-pay-systems-master-card"></div>
              <div class="footer-pay-systems footer-pay-systems-visa"></div>
              <div class="footer-pay-systems footer-pay-systems-yandex"></div>
              <div class="footer-pay-systems footer-pay-systems-webmoney"></div>
              <div class="footer-pay-systems footer-pay-systems-qiwi"></div>
            </div>
          </section>
          <section>
            <div class="footer-copyright">2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и аксессуаров.
              Все права защищены.<br>Доставка по всей России!
            </div>
          </section>
        </div>
        <div class="col text-right">
          <section class="footer-contacts">
            <h5>Контакты:</h5>
            <a class="footer-contacts-phone" href="tel:+7-495-790-35-03">+7 495 79 03 5 03</a>
            <span class="footer-contacts-working-hours">Ежедневно: с 09-00 до 21-00</span>
            <a class="footer-contacts-email" href="mailto:office@bosanoga.ru">office@bosanoga.ru</a>
            <div class="footer-social-links">
              <div class="footer-social-link footer-social-link-twitter"></div>
              <div class="footer-social-link footer-social-link-vk"></div>
            </div>
          </section>
        </div>
      </div>
    </footer>