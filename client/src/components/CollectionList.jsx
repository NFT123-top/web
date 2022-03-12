import React from 'react';
import Card1 from '../commons/Card1';
import collectionList from '../data/collection';
// import PropTypes from 'prop-types';

const CollectionList = props => {
  return (
    <div className="mx-4 ">
      <blockquote className="text-2xl font-semibold italic text-center text-slate-900 p-6">
        When you look &nbsp;&nbsp;
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
          <span className="relative text-white">annoyed</span>
        </span>
        &nbsp;&nbsp; all the time, people think that you're busy.
      </blockquote>
      Top 10 {props.first}
      <div className="flex flex-row flex-wrap justify-center">
        <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 ml-4 bg-card">
          <h2 className="mb-3 px-4 text-lg font-extrabold text-blue-600 ">Total Volume</h2>
          {collectionList.map((card1) => (
            <Card1 card={card1} key={card1.order} />
          ))}
        </div>
        <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 ml-4 bg-card">
          <h2 className="mb-3 px-4 text-lg font-extrabold text-blue-600 ">7 Days Hot</h2>
          {collectionList.map((card1) => (
            <Card1 card={card1} key={card1.order} />
          ))}
        </div>
        <div className="pt-4 pb-3 mt-4 border border-gray-300 rounded-lg shadow-md dark:border-gray-800 ml-4 bg-card">
          <h2 className="mb-3 px-4 text-lg font-extrabold text-blue-600 ">7 Days New</h2>
          {collectionList.map((card1) => (
            <Card1 card={card1} key={card1.order} />
          ))}
        </div>

      </div>
    </div>
  );
};

CollectionList.propTypes = {

};

export default CollectionList;