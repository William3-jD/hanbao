import React, { Component } from 'react'

import Count from '../../../count'
import CartContext from '../../../store/cart-context'

import './index.css'

export default class CheckoutItems extends Component {

    static contextType = CartContext
  render() {

    const {meal} = this.props

    return (
      <div className='CheckoutItems'>

            <div className='CheckoutItemsImg'>
                <img src={meal.img}  />
            </div>

            <div className='CheckoutItemsBox'>

                <h2 className='CheckoutItemsTitle'>{meal.title}</h2>

                <div className='CheckoutItemsDetail'>

                    <Count meal={meal}/>

                    <span className='CheckoutItemsPrices'>

                        {meal.price * meal.count}

                    </span>
                </div>
            </div>

      </div>
    )
  }
}
