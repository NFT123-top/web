import React from 'react';
import Card from '../commons/Card';
import marketList from "../data/market";
let img = "../../img/logo.svg"


// const Card = ({ card }) => (
//   <div className="flex items-center rounded-lg shadow-lg overflow-hidden">
//   <img className="h-32 w-32 flex-shrink-0" src={card.imgUrl} alt={card.hrefUrl} />
//   <div className="px-6 py-4">
//     <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
//     <p className="text-gray-600">{card.desc}</p>
//     <div className=" mt-4">
//       <p>{card.imageAlt}</p>
//     </div>
//   </div>
// </div>
// );

const MarketList = () => {
  return (
    <div className="mx-4 divide-y divide-gray-300">
      <h2 className="text-lg text-gray-900">Market List</h2>
      <div className=" mt-1 grid grid-cols-3 gap-6 ">
        {marketList.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </div>
    </div>
  )
}

export default MarketList;