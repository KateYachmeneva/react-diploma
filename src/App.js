import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import About from './components/About/About.jsx';
import Contacts from './components/Contacts/Contacts.jsx';
import Header from './components/Header/Header.jsx';
import ItemDetails from './components/Catalog/ItemDetails/ItemDetails.jsx';
import NotFound from './components/NotFound/NotFound.jsx';
import Footer from './components/Footer/Footer.jsx';
import Cart from './components/Cart/Cart.jsx';
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
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/catalog" component={Catalog}/>
          <Route exact path="/catalog/:id" component={ItemDetails}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/about" component={About}/>
          <Route path='/404' component={NotFound} />
        <Redirect from='*' to='/404' />

        </Switch>
            </div>
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
}
