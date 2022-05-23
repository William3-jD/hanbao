import React, { Component } from 'react'

import CartContext from '../store/cart-context'

import { MinusOutlined,  PlusOutlined} from '@ant-design/icons';

import './index.css'

export default class Count extends Component {
  
  // ctx = () => {
  //    return useContext(CartContext)
  // }
  // static ctx = useContext(CartContext)

  static contextType = CartContext

  onAddButtonHeandl = () => {
    const {meal} = this.props

    this.context.onAddHandle(meal)
    
  }

  onSubButtonHeandl = () => {
    const {meal} = this.props

    this.context.onSubHandle(meal)
  }

  

  render() {

    const {meal} = this.props
    return (
        <div >
          {
              (meal.count && meal.count !== 0 ) ? (
                  <>
                      <button 
                        className='countSub countbutton'
                        onClick={this.onSubButtonHeandl}
                      ><MinusOutlined /></button>

                      <span className='count'>{meal.count}</span>

                  </>
              ) : null
          }
          
          <button 
            className='countAdd countbutton'
            onClick={this.onAddButtonHeandl}
          > <PlusOutlined /></button>

        </div>
    )
  }
}
