import React, { Component } from 'react'
import Meal from './meal'

import './index.css'


export default class Meals extends Component {
  render() {
    const {mealsData} = this.props
    return (
      <div className='meals'>
          {
            mealsData.map((item)=>{
              return <Meal 
                        key={item.id}
                        meal={item}
                        
                      />
            })
          }
          
          
      </div>
    )
  }
}
