import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage.jsx';
import Catalog from './components/catalog/Catalog.jsx';
import About from './components/about/About.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Header from './components/header/Header.jsx';
import ItemDetails from './components/catalog/itemdetails/ItemDetails.jsx';
import NotFound from './components/notFound/NotFound.jsx';
import Footer from './components/footer/Footer.jsx';
import Cart from './components/cart/Cart.jsx';
import img from './img/banner.jpg';

export default function App() {
  return (
    <>
      <Router basename={'/react-diploma'}>
        <Header />
        <main className="container">
          <div className="row">
            <div className="col">
              <div className="banner">
                <img src={img} className="img-fluid" alt="К весне готовы!" />
                <h2 className="banner-header">К весне готовы!</h2>
              </div>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/catalog" component={Catalog} />
                <Route exact path="/catalog/:id" component={ItemDetails} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/404" component={NotFound} />
                <Redirect from="*" to="/404" />
              </Switch>
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}
