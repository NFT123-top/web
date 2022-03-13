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
const button = {
  className="px-4 py-1 mt-2 text-sm text-blue-600 font-semibold rounded-full border 
         border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent 
         focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
}

export default function ({ card }) {
  // console.log(card);
  return (

    // <div className="rounded-lg shadow-lg overflow-hidden">
    //   <div className=" flex flex-1 items-center">
    //     <div className="px-2 py-1">
    //       <img className="h-12 w-12 rounded-full flex-shrink-0" src={card.imgUrl} alt={card.hrefUrl} />
    //       <h3 className="text-sm font-semibold text-gray-800">{card.name}</h3>
    //     </div>
    //     <p className="text-gray-600">{card.desc}</p>
    //   </div>
    //   <div className=" mt-2 text-sm">
    //     <p>{card.imageAlt}</p>
    //   </div> 
    // </div>
    <div className="p-4 bg-white rounded-xl shadow-lg ">
      <div className="max-w-sm mx-auto flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src={card.imgUrl} alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-lg font-medium text-black">{card.name}</div>
          <p className="text-slate-500 text-sm">{card.desc}</p>
        </div>
      </div>
      <div className="flex justify-between mx-8 my-2">
        {/* <button className="py-1 mt-2 text-sm text-white bg-purple-600 rounded-full hover:text-white 
        hover:bg-purple-600 hover:border-transparent 
         focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">HOT</button> */}
         <a href="" className=""></a>
        <button onclick="window.location.href={}" >Enter</button>
      </div>
    </div>
    )
}
// Card type 1
{/* <a href="https://www.nftworlds.com/" target="_blank" class="flex items-center m-4 gap-2">
  <img class="w-12 h-auto" src="https://s3.coinmarketcap.com/generated/nft/collections/raritysniper-nft-worlds.png" />
  <div class="text-gray-700 text-left font-sans font-semibold">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">NFT Worlds <br></span>
    <span class="mr-123 text-[12px] flex items-center gap-2">
      <img class="h-5 w-auto" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" alt="" />
      Ethereum
    </span>
  </div>
</a> */}