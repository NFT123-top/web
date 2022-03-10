import React from 'react';

let content_1 = "All of the icons we use in Tailw ";
let content_2 = "All of the icoasd ad asd asghgf ns we usegasd asd aasdfasd asd asd1212g sd adsasd a in Tailw ";
let img = "../../img/logo.svg"
const Welcome = () => {
  return (
    <div className="p-1 flex flex-col sm:flex-row items-center justify-start ">
      <div className="flex flex-col items-start sm:w-3/5 justify-center gap-4 p-1 sm:ml-8">
        <div className="flex text-black flex-1 justify-start items-center flex-row">
          <img className="w-12" src={img} alt="" />
          <p>{content_1}</p>
        </div>
        <div className="flex my-4 max-w-screen-md">{content_2}</div>
        <div className="flex flex-row gap-2">
          <button className=" bg-sky-400 text-white rounded-full text-xl cursor-pointer
          hover:bg-sky-700 hover:-translate-y-1 transform transition font-semibold  px-3 ">text mark</button>
          <button className=" bg-gray-400 text-white rounded-full text-xl cursor-pointer
          hover:bg-sky-700 hover:-translate-y-1 transform transition font-semibold  px-3 ">text mark</button>
        </div>
      </div>
      <div className="flex justify-center p-1">
        <img className=" " src={img} alt="" />
      </div>
    </div>
  );
};


export default Welcome;