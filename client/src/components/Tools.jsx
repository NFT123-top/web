import React from 'react';
import tools from '../data/tools';

const ToolsItem = ({ item }) => (
  <a href={item.hrefUrl}  target="_blank" className="hover:cursor-pointer" >
    <img className="w-auto h-12" src={item.imgUrl} alt="123" />
    <span className=" text-gray-700"> {item.name} </span>
  </a>
);

const Tools = () => {
  return (
    <div className="mx-4 pt-3">
      <h2 className="text-2xl pb-2 text-gray-900">NFT Tools </h2>
      <div className="flex flex-wrap gap-6">
        {tools.map((item) => (
          <ToolsItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Tools;