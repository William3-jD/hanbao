import React, { Component } from 'react'

import Cartdetails from './cartDetails'
import Checkout from './checkout'
import CartContext from '../store/cart-context'
import cartIcon from '../../asset/bag.png'

import './index.css'


export default class Cart extends Component {

  state = {
    showCart: false,
    showCheckout: false,
  }

  onToggleCartDetails = () => {
    if(this.context.totalAmount === 0){
      this.setState({
        showCart: false
      })
      return
    }
      
    this.setState({
      showCart: !this.state.showCart
    })

  }

  oncheckout = (e) => {
    // e.stopPropagation()
    if(this.context.totalAmount === 0)return
    this.setState({
      showCheckout: true,

    })
  
  }
  quitCheckout = (e) => {
    this.setState({
      showCheckout: false,

    })
  }


  static contextType = CartContext
  render() {

    const {showCart, showCheckout} = this.state

    return (
      
      <div className='cartBox' onClick={this.onToggleCartDetails}>

          {showCheckout && <Checkout quitCheckout={this.quitCheckout}/>}

          {/* 购物车详情 */}
          {(showCart && this.context.totalAmount !== 0)?  <Cartdetails/> : null}

          <div className='cartIconBox' >
              <img className='cartIcon' src={cartIcon} />
              {
                this.context.totalAmount === 0 ? null : <span className='totalAmount'>{this.context.totalAmount}</span>
              }
          </div>
          
          {
            this.context.totalAmount === 0 ? <p className='noMeal'>未选购商品</p> : <span className='totalPrices'>{this.context.totalPrices}</span>
          }

          <div 
          onClick={this.oncheckout} 
          className={this.context.totalAmount === 0 ? 'noMealButton' : 'closeButton'}
          >去结算</div>

      </div>
      
    )
  }
}
