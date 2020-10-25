import React, {useState, useEffect} from 'react';
import Proptypes from "prop-types";
import './1000-1920px.style.scss';
import './500-1000px.style.scss';
import './0-500px.style.scss';
import MovableContainer from '../MovableContainer/MovableContainer.component';
import Steps from '../../Confirmation Route/Steps/Steps.compounent';
import ContinueShopping from '../../Confirmation Route/ContinueShopping/ContinueShopping.compounent';
import Cart from '../Cart/Cart.component';
import FormSquareBig from '../FormSquareBig/FormSquareBig.compounent';
import DescriptionBig from '../DescriptionBig/DescriptionBig.component';
import Scroll from '../Scroll/Scroll.component';



const ShoppingCart = ({shoppingCart, changeShoppingCart }) => {


    // this state is used to sume items in the desciption component
    const [sume, setSume] = useState(0);

    //let sume all the items prices
    const [total, setTotal] = useState(
        shoppingCart.map(item => item.price).reduce((a, b) =>  a + b, 0).toFixed(2)
        );
    // obtaining the taxes for the whole purchase
    const [taxes, setTaxes] = useState(0.00);
    // calculating the shipping cost
    const [shipping, setShipping] = useState(0.00);
    //getting the total purchase price
    const [purchase, setPurchase] = useState(0.00);


    useEffect(() => {
        let a = total * 7 / 100
        setTaxes(a.toFixed(2))
        ///////////////////////
        let b = total * 1.5 / 100
        setShipping(b.toFixed(2))
        //////////////////////
        let c = total * 108.5 / 100 
        setPurchase(c.toFixed(2))
    },[total,shoppingCart]);

    // this state is for write autonaticaly the card details on click
    const [write, setWrite] = useState(false)

    useEffect(() => {
        if (shoppingCart.length === 0) {
            setWrite(false)
        }
    },[shoppingCart]);

    

    return (
        <section className='shopping-cart'>

            <ContinueShopping 
            />

            <Scroll />

            <Steps 
            />
            <DescriptionBig
            shoppingCart={shoppingCart} 
            sume={sume}
            />
            
            < MovableContainer
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            sume={sume}
            setSume={setSume}
            setTotal={setTotal}
            total={total}
            taxes={taxes}
            shipping={shipping}
            purchase={purchase}
            setWrite={setWrite}
            write={write}
            />
            <Cart 
            shoppingCart={shoppingCart}
            changeShoppingCart={changeShoppingCart}
            sume={sume}
            setSume={setSume}
            setTotal={setTotal}
            total={total}
            />

            <FormSquareBig 
            total={total}
            taxes={taxes}
            shipping={shipping}
            purchase={purchase}
            setWrite={setWrite}
            write={write}
            />
        </section>
    )
};

// component documentation

ShoppingCart.propTypes = {
    shoppingCart: Proptypes.array.isRequired,
    changeShoppingCart: Proptypes.func.isRequired,
  };

export default ShoppingCart;