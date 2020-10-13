import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import logo from './Assets/Img/Logo/logosound.png'
import Products from './Assets/Img/Products';
import GrayColumn from './Components/Store Route/GrayColumn/GrayColumn.component';
import Store from './Components/Store Route/Store/Store.component';
import ShoppingCart from './Components/Cart Route/ShoppingCart/ShoppingCart.compounent';
import './App-0-500px.style.scss';
import './App-500-1000px.style.scss';
import './App-1000-1920px.style.scss';

function App() {

  // this state is the user´s shopping cart
  const [shoppingCart, changeShoppingCart] = useState([]);
  
  // put a red point over the cart icon if there are items in the shopping cart
  const [point, changePoint] = useState(false);

  // with this function we make the shopping cart point appears or disappears
  useEffect(() => {
    if (shoppingCart.length === 0) {
      changePoint(false);
    } else {
      changePoint(true);
    }
  }, [shoppingCart]);
  
  
  return (
    <Router>

    <div className="App">

      <header className='header'>

        <div className='header__logo'>
        <img className='header__logoImg' src={logo} alt="logo"/>
        </div>

        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__purchases'><p className='header__purchasesText'>Purchases</p></li>
            <Link to='/'>
            <li className='header__store'><p className='header__storeText'>Store</p></li>
            </Link>
            <Link to='/shoppingcart'>
            <li className='header__cart'><FontAwesomeIcon icon={faShoppingCart}/></li>
            </Link>
            <li className='header__search'><FontAwesomeIcon icon={faSearch}/></li>
            <Link to='/'>
            <li className='header__bag'><FontAwesomeIcon icon={faShoppingBag}/></li>
            </Link>
          </ul>
        </nav>

        <div className={point ? 'header__point' : 'header__point--modify'}> </div>
        
      </header>

      <Switch>
        <Route exact path='/'>
          <Store 
            Products={Products}
            changeShoppingCart={changeShoppingCart}
            shoppingCart={shoppingCart}
            />
          <GrayColumn />
        </Route>

        <Route  path='/shoppingcart'>
          <ShoppingCart   
          />
          <GrayColumn />
        </Route>
      </Switch>

    </div>
    </Router>
    
  );
}

export default App;
