import React, { Component } from 'react'
import './index.css'

import CartContext from '../../../store/cart-context'

export default class CheckoutFooter extends Component {

    static contextType = CartContext
  render() {
    return (
        <div className='CheckoutFooter_Box'>

            

            
            
            <span className='CheckoutFooter_totalPrices'>{this.context.totalPrices}</span>
            

            <div className='CheckoutFooter_closeButton'>去支付</div>

        </div>
    )
  }
}
