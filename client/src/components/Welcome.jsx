import React from 'react';
import img from "../../img/logo-color-sm.svg"
import img1 from "../../img/logo-color.svg"
import bgimg from '../../img/homebeijing.jpeg';

let content_1 = "Ecosystem of NFTs information service plantform";
let content_2 = "Collect the most poplular projects of all types in the NFTs world.";

const typeStyle = () => {
  return(
    ""
  )
}

const Welcome = () => {
  return (
    <div className="text-white pt-4" >
      <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center gap-16">
        <div className="flex flex-col lg:items-start justify-center gap-3 p-4">
          <div className="flex flex-1 justify-center items-center flex-row">
            {/* <img className="w-12" src={img} alt="" /> */}
            <p className="text-4xl font-semibold">{content_1}</p>
          </div>
          <div className="flex my-6 max-w-screen-md">{content_2}</div>
          <div className="grid grid-cols-3 gap-x-12 gap-y-6 font-semibold place-content-center">
            <span className="type-text bg-fuchsia-600">Markets</span>
            <span className="type-text bg-green-600">Collections</span>
            <span className="type-text bg-rose-600">Games</span>
            <span className="type-text bg-blue-600">Sports</span>
            <span className="type-text bg-yellow-600">Musics</span>
            <span className="type-text bg-teal-600">Shopping</span>
            <span className="type-text bg-orange-600">Arts</span>
            <span className="type-text bg-indigo-600">Domains</span>
            <span className="type-text bg-purple-600">Social</span>
            {/* <button className="type-text">
              Save changes
            </button>
            <button className="btn-second"> Save changes</button> */}
          </div>
        </div>
        <div className="pb-8">
          <div className="pb-4 text-xl">
            Stastics in Plantform
          </div>
          <div className="flex gap-4">
            {/* <img className=" " src={img1} alt="" /> */}
            <div className="pr-1 flex flex-col items-end">
              <span className=" text-blue-200 text-sm">Markets</span>
              <div className="flex items-center space-x-1">
                <span className="text-white text-2xl">53</span>
                <span className="bg-blue-300 rounded-md px-1 text-sm font-thin" >3D</span>
                <span className=" text-green-400 font-bold">+2</span>
              </div>
            </div>
            <div className=" pr-1 flex flex-col items-end">
              <span className=" text-blue-200 text-sm">Collections</span>
              <div className="flex items-center space-x-1">
                <span className="text-white text-2xl">1423</span>
                <span className="bg-blue-300 rounded-md px-1 text-sm font-thin" >24H</span>
                <span className=" text-green-400 font-bold">+32</span>
              </div>
            </div>
            <div className=" pr-1 flex flex-col items-end">
              <span className=" text-blue-200 text-sm">Artists</span>
              <div className="flex items-center space-x-1">
                <span className="text-white text-2xl">153</span>
                <span className="bg-blue-300 rounded-md px-1 text-sm font-thin" >3D</span>
                <span className=" text-green-400 font-bold">+35</span>
              </div>
            </div>
            <div className=" pr-1 flex flex-col items-end">
              <span className=" text-blue-200 text-sm">Tools</span>
              <div className="flex items-center space-x-1">
                <span className="text-white text-2xl">13</span>
                <span className="bg-blue-300 rounded-md px-1 text-sm font-thin" >3D</span>
                <span className=" text-green-400 font-bold">+0</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};


export default Welcome;