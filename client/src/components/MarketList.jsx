import React from 'react';
import Card from '../commons/Card';
import marketList from "../data/market";

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
    <div className="mx-4 divide-y divide-gray-300 pt-3">
      <h2 className="text-3xl pb-2 text-gray-900">MarketPlace </h2>
      <div className=" mt-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 ">
        {marketList.map((card) => (
          <Card card={card} key={card.name} />
        ))}
      </div>
    </div>
  )
}

export default MarketList;