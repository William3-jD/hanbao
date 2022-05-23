import React, { Component } from 'react'

import MaskLayer from '../../UI/masklayer'

import './index.css'

export default class Confirm extends Component {

   
    
  render() {
    return (
        <MaskLayer onClick={e => this.props.onClear(e)}>
            <div className='Confirm'>
                <p className='ConfirmTitle'>确认清空购物车吗?</p>

                <div className='ConfirmBtn'>

                        <button 
                        onClick={e => this.props.onClear(e)}
                        className='ConfirmClear'
                        >取消</button>

                        <button 
                        onClick={e => this.props.onOk(e)}
                        className='ConfirmOk'
                        >确认</button>

                </div>
            </div>
      </MaskLayer>
    )
  }
}
