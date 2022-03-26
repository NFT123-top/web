import React from 'react';
import img from "../../img/logo-color-sm.svg"
import img1 from "../../img/logo-color.svg"
import bgimg from '../../img/homebeijing.jpeg';

let content_1 = "Ecosystem of NFTs information service plantform";
let content_2 = "Collect the most valueable Websites, News, Projects and so on in NFTs world";

const Welcome = () => {
  return (
    <div className="text-white pt-4" >
      <div className="flex flex-col sm:flex-row items-start justify-center gap-16">
        <div className="flex flex-col items-start sm:w-1/3 justify-center gap-3">
          <div className="flex flex-1 justify-center items-center flex-row md:max-w-md">
            {/* <img className="w-12" src={img} alt="" /> */}
            <p className="text-4xl font-semibold">{content_1}</p>
          </div>
          <div className="flex my-6 max-w-screen-md">{content_2}</div>
          <div className="grid grid-cols-3 gap-5 font-semibold place-content-center">
            <span className="btn-primary bg-fuchsia-600">Markets</span>
            <span className="btn-primary bg-green-600">Collections</span>
            <span className="btn-primary bg-rose-600">Games</span>
            <span className="btn-primary bg-blue-600">Sports</span>
            <span className="btn-primary bg-yellow-600">Musics</span>
            <span className="btn-primary bg-teal-600">Shopping</span>
            <span className="btn-primary bg-orange-600">Arts</span>
            <span className="btn-primary bg-indigo-600">Domains</span>
            <span className="btn-primary bg-purple-600">Social</span>
            {/* <button className="btn-primary">
              Save changes
            </button>
            <button className="btn-second"> Save changes</button> */}
          </div>
        </div>
        <div className="">
          <div className="pb-4 text-xl">
            Stastics in Plantform
          </div>
          <div className="flex justify-end items-start space-x-6 h-20 font-sans ">
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
          <div className="h-72 bg-yellow-50 justify-items-center items-center flex flex-col">
            <img className="h-64 w-64" src={img1} alt="" />
            <span className=" text-blue-600">This is a video of product</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Welcome;