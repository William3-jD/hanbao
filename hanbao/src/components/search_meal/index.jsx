import React, { Component } from 'react'
import { SearchOutlined} from '@ant-design/icons';

import './index.css'


export default class Searchmeal extends Component {

  inputChangeMeal = (e) => {
    const keyword = e.target.value.trim()
    this.props.onChangeMeal(keyword)
    // console.log(keyword)
    // document.addEventListener()
  }

  render() {
    return (
      <div className='Searchmeal'>
          <div className='search'>
            <input onChange={this.inputChangeMeal} className='searchInput' type="text" placeholder='请输入关键字'/>

            <SearchOutlined className='searchIcon'/>
          </div>
      </div>
    )
  }
}
