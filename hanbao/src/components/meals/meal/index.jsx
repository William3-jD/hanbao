import React, { Component } from 'react'
import Count from '../../count'
import './index.css'

export default class Meal extends Component {

  render() {

    const {meal, noDesc} = this.props

    return (

      <div className='meal'>
            <div className='imgBox'>
                <img src={meal.img} alt="" />
            </div>

            <div className='noDesc'>

                  <h2 className='mealTitle'>{meal.title}</h2>
                  {noDesc? null : <p className='mealDesc'>{meal.desc}</p>}

                  <div className='priceWrap'>

                    <span className='mealPrice'>{meal.price}</span>

                    <Count 
                      meal={meal}
                      
                    />

                  </div>
              </div>
                
        
      </div>
    )
  }
}
