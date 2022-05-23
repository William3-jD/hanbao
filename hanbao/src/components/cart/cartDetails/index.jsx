import React, { Component } from 'react'
import Meal from '../../meals/meal'
import Confirm from '../confirm'

import MaskLayer from '../../UI/masklayer'

import CartContex from '../../store/cart-context'

import { DeleteOutlined} from '@ant-design/icons';

import './index.css'

export default class Cartdetails extends Component {

    state={
        showConfirm:false
    }
    //显示请空请求框
    onConfirm = (e) => {
        e.stopPropagation();
        this.setState({
            showConfirm:true
        })
    }
    onClear = (e) => {
        // e.stopPropagation();
        this.setState({
            showConfirm:false
        })
    }
    onOk = (e) => {
        
        this.context.clearCart()
        this.setState({
            showConfirm:false
        })
    }

    static contextType = CartContex

  render() {

      const{showConfirm} = this.state
      
    return (
        <MaskLayer onClick={this.onClear}>

            {showConfirm && <Confirm onClear={this.onClear} onOk={this.onOk}/>}

          <div className='Cartdetails' onClick={e => e.stopPropagation()}>

                <div className='Cartdetails_header'>

                    <h2 className='CartTitle'>餐品详情</h2>
                    <div className='ClearCartdetails' onClick={this.onConfirm}>
                        <DeleteOutlined />
                        <span>清空购物车</span>
                    </div>

                </div>

                <div className='CartdetailsList'>
                    {
                        this.context.mealsCart.map((item) => {
                            return <Meal 
                                        noDesc
                                        key={item.id} 
                                        meal={item}
                                    />
                        })
                    }
                </div>

          </div>
        </MaskLayer>
    )
  }
}
