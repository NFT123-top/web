import React from 'react';
// import PropTypes from 'prop-types';

const CollectionList = props => {
  return (
    <div className="mx-4 ">
      Top 10 {props.first}
      <div className="grid grid-cols-2 mt-1 gap-6 ">
        <div className="max-w-full mx-auto p-4 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className=" " src="https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s130" alt="Man looking at item at a store" />
            </div>
            <div className="p-1">
              <div className="uppercase tracking-wide text-sm text-fuchsia-600 font-semibold">Mutant Ape Yacht Club</div>
              <a href="#" className="block mt-1 text-md leading-tight font-medium text-blue-600 hover:underline">Finding customers for your new business</a>
              <p className="mt-2 text-sm text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

CollectionList.propTypes = {

};

export default CollectionList;