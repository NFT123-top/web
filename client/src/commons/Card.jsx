import React from 'react'
let img = "../../img/logo.svg"

// export default [
//   {
//     index: 1,
//     name: 'OpenSea',
//     desc: 'dwead ,sw d asdfa dadfas dafsd  asd fasdf',
//     imgUrl: 'https://opensea.io/static/images/logos/opensea.svg',
//     hrefUrl: 'https://opensea.io/',
//     imageAlt: 'OpenSea is the world\'s first and largest NFT marketplace, Discover, collect, and sell extraordinary NFTs.'
//   },
// ]

export default function ({_market}) {
  // console.log(_market);
  return (
 
      <div className="flex items-center rounded-lg shadow-lg overflow-hidden">
        <img className="h-32 w-32 flex-shrink-0" src={_market.imgUrl} alt={_market.hrefUrl} />
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800">{_market.name}</h3>
          <p className="text-gray-600">{_market.desc}</p>
          <div className=" mt-4">
            <p>{_market.imageAlt}</p>
          </div>
        </div>
      </div>
 
  )
}
