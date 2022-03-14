import React from 'react';
import img from "../../img/logo-color-sm.svg"
import img1 from "../../img/logo-color.svg"
import bgimg from '../../img/homebeijing.jpeg';

let content_1 = "Ecosystem of NFTs information service plantform";
let content_2 = "Collect the most valueable Websites, News, Projects and so on in NFTs world";

const Welcome = () => {
  return (
    <div className="text-white" >
      <div className="flex flex-col sm:flex-row items-center justify-center ">
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
        <div className="flex justify-end  items-center">
          {/* <img className=" " src={img1} alt="" /> */}
          <div className=" pr-1 flex flex-col items-end">
              <span>All Projects</span>
              <span>1309</span>
          </div>
          <div className=" pr-1 flex flex-col items-end">
              <span>All Projects</span>
              <span>1309</span>
          </div>
          <div className=" pr-1 flex flex-col items-end">
              <span>All Projects</span>
              <span>1309</span>
          </div>
          <div className=" pr-1 flex flex-col items-end">
              <span>All Projects</span>
              <span>1309</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Welcome;