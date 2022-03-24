import React from 'react'
let imglogo = "../../img/logo-color-sm.svg"

// const card = [{
//   name: 'Mutant Ape Yacht Club',
//   desc: 'dwead ,sw d asdfa    aaaaaaaaaadf asd fasdf',
//   floorPrice: '16.98',
//   volumeTrade: '257.5k',
//   chainType:'../../img/category/eth.svg',
//   imgUrl: "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s130",
//   hrefUrl: 'https://opensea.io/collection/mutant-ape-yacht-club',
//   imageAlt: 'The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale.  '
// }];


export default function ({ card}) {
  // console.log(card);
  return (

    <a href={card.hrefUrl} target="_blank">
      <div className="flex flex-row items-center px-4 py-2 space-x-3 cursor-pointer select-none
         hover:bg-gray-100">
        {/* <div className="w-10 text-2xl font-bold text-right text-gray-400">#{card.order}
        </div>
        <div className="">
          <img src={card.imgUrl} className="w-16 h-auto rounded-full" alt="" />
        </div>
        <div className="">
          <div className="text-base font-bold text-blue-600">{card.volumeTrade}

          </div>
          <div className="text-sm font-bold text-rose-600">{card.floorPrice} ETH

          </div>
        </div> */}
      </div>
    </a>

  )
}
