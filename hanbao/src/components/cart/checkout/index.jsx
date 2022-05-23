import React, { useContext } from 'react';
import ReactDOM  from 'react-dom';

// import Meal from '../../meals/meal';
import CheckoutItems from './CheckoutItems';
import CheckoutFooter from './checkoutFooter';

import CartContext from '../../store/cart-context'

import { CloseOutlined } from '@ant-design/icons';

import './index.css'


const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {

    const ctx = useContext(CartContext)

    return ReactDOM.createPortal(

        <div className='Checkout'>

            <CloseOutlined className='CheckoutIcon' onClick={e => props.quitCheckout(e)}/>

            <div className='CheckoutBox'>
                <h2 className='CheckoutBoxTitle'>餐品详情</h2>

                {
                    ctx.mealsCart.map((item) => {
                        
                       return <CheckoutItems 
                                    key={item.id}
                                    meal={item}
                                />

                    })
                }
                
                
  
            </div>

            <div className='CheckoutPrices'>
                {ctx.totalPrices}
            </div>

            <CheckoutFooter/>

        </div>, 
    
    checkoutRoot);
}

export default Checkout;