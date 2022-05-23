import React, { Component } from 'react'

import CartContext from './components/store/cart-context'

import Searchmeal from './components/search_meal'
import Meals from './components/meals/'
import Cart from './components/cart'

import MaskLayer from './components/UI/masklayer'
import Checkout from './components/cart/checkout'



export default class App extends Component {

  state={
    mealsData:[
      {
          id: '1',
          title: '汉堡包',
          desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
          price: 12,
          img: '/img/meals/1.png'
      },
      {
          id: '2',
          title: '双层吉士汉堡',
          desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
          price: 20,
          img: '/img/meals/2.png'
      },
      {
          id: '3',
          title: '巨无霸',
          desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
          price: 24,
          img: '/img/meals/3.png'
      }, {
          id: '4',
          title: '麦辣鸡腿汉堡',
          desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
          price: 21,
          img: '/img/meals/4.png'
      }, {
          id: '5',
          title: '板烧鸡腿堡',
          desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
          price: 22,
          img: '/img/meals/5.png'
      }, {
          id: '6',
          title: '麦香鸡',
          desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
          price: 14,
          img: '/img/meals/6.png'
      }, {
          id: '7',
          title: '吉士汉堡包',
          desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
          price: 12,
          img: '/img/meals/7.png'
      }
    ],
    //搜索暂存数据
    holdMealsData:[],
    
    cartData: {    
      //购物车总价
      totalPrices:0,
      //购物车总数
      totalAmount:0,
      //购物车物品存放
      mealsCart:[]
    },
    
    
  }
  //克隆原数据到暂存数据
  cloneMealsData = () => {
    this.setState({
      holdMealsData: this.state.mealsData
    })
  }
    
  onAddHandle = (meal) => {

    const {cartData} = this.state

    const newCartData = {...cartData}
    //判断newCart里有没有重复商品
    if(newCartData.mealsCart.indexOf(meal) === -1){
      //添加商品信息
      newCartData.mealsCart.push(meal)
      //添加商品数量
      meal.count = 1
      
    }else{
      meal.count +=1
    }

    newCartData.totalPrices += meal.price

    newCartData.totalAmount += 1

    this.setState( {  
      cartData: newCartData
    })
    

  }

  onSubHandle = (meal) => {
    const {cartData} = this.state

    const newCartData = {...cartData}

    meal.count -=1
    
    if(meal.count === 0){
      newCartData.mealsCart.splice(newCartData.mealsCart.indexOf(meal), 1)
    }

    newCartData.totalPrices -=  meal.price

    newCartData.totalAmount -= 1

    this.setState( {
      cartData: newCartData
    })
  }

//搜索功能
  onChangeMeal = (keyword) => {
    const {mealsData} = this.state
    const newMealsData = mealsData.filter(item => item.title.indexOf(keyword) !== -1)

    this.setState({
      holdMealsData: newMealsData
    })
    if(!keyword){
      this.setState({
        holdMealsData: this.state.mealsData
      })
    }
  }

//清空购物车
  clearCart = () => {
    const {cartData} = this.state

    const newCartData = {...cartData}
    
    newCartData.mealsCart.forEach(item => item.count = 0)
    newCartData.totalAmount = 0
    newCartData.totalPrices = 0
    newCartData.mealsCart = []
    

    this.setState({
      cartData: newCartData
    })
  }

  componentDidMount(){
    //挂载 Meals（商品）
    this.cloneMealsData()
    
  }



  render() {
    const {cartData} = this.state
    const onAddHandle = this.onAddHandle
    const onSubHandle = this.onSubHandle
    const clearCart = this.clearCart
   
    return (
      <CartContext.Provider value={{...cartData, onAddHandle, onSubHandle, clearCart}}>
      <div>
        <Searchmeal onChangeMeal={this.onChangeMeal}/>
        <Meals 
          mealsData={this.state.holdMealsData}
          
        />
        <Cart/>
        {/* <Checkout/> */}
        {/* <MaskLayer/> */}
      </div>
      </CartContext.Provider>
    )
  }
}
