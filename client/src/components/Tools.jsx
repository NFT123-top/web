import React from 'react';
import tools from '../data/tools';
import Card1 from '../commons/Card1';
import collectionList from '../data/collection';

const ToolsItem = ({ item }) => (
  <a href={item.herfUrl} type="_blank" className="" >
    <img className="w-auto h-12" src={item.imgUrl} alt="" />
    <span className=" text-gray-700"> {item.name} </span>
  </a>
);

const Tools = () => {
  return (
    <div className="mx-4 pt-3">
      <h2 className="text-2xl pb-2 text-gray-900">NFT Tools </h2>
      <div className="flex gap-6">
        {tools.map((item) => (
          <ToolsItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Tools;