import React from 'react';
import Card from  '../commons/Card.jsx';
import marketList from "../data/market";
let img = "../../img/logo.svg"


// const Card = ({ _market }) => (
//   <div className="flex items-center rounded-lg shadow-lg overflow-hidden">
//   <img className="h-32 w-32 flex-shrink-0" src={_market.imgUrl} alt={_market.hrefUrl} />
//   <div className="px-6 py-4">
//     <h3 className="text-lg font-semibold text-gray-800">{_market.name}</h3>
//     <p className="text-gray-600">{_market.desc}</p>
//     <div className=" mt-4">
//       <p>{_market.imageAlt}</p>
//     </div>
//   </div>
// </div>
// );

const MarketList = () => {
 
    return (
      <div className="mx-4 divide-y divide-fuchsia-300">
        <h2 className="text-lg text-gray-900">Market List</h2>
        <div className=" mt-6 grid gap-6  ">
          { marketList.map((_market) =>  (
            <Card _market={_market} key={_market.name}/>
          ))}
        </div>
   
      </div>
    )
}

export default MarketList;