import React, { Component } from 'react'
let img = "../../img/logo.svg"



export default class CardList extends Component {
  render() {
    return (
      <div className="mx-4 divide-y divide-fuchsia-300">
        <div className="">Market List</div>
        <div className="flex flex-wrap content-start">
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
        </div>
        <div className=" bg-gray-100 grid md:grid-cols-4 lg:grid-cols-8 items-center ">
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
          <div> <img src={img} alt="" /></div>
        </div>

      </div>
    )
  }
}
