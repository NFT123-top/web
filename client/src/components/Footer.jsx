import React from 'react';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-200 w-full py-4 px-8 divide-y-2">
      <div className="flex items-start justify-between gap-8 pb-8">
        <div className="flex flex-col gap-1">
          <img className="w-12 h-auto" src="../../img/logo-color-sm.svg" alt=""></img>
          <span className="text-sm">This is advertisement senctense asd asfa</span>
          <div className="flex flex-row gap-2">
            <a href="https://twitter.com/TiThinker" target="_blank" ><FaTwitter fontSize={20} className="" /></a>
            <a href="https://twitter.com/TiThinker" target="_blank" ><FaDiscord fontSize={20} className="" /></a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <div className="grid grid-cols-1 place-content-start gap-2">
            <span>Market</span>
            <span className=" text-gray-600 text-sm">Mdfet</span>
            <span className=" text-gray-600 text-sm">Markasdfet</span>
            <span className=" text-gray-600 text-sm">Markasdfet</span>
            <span className=" text-gray-600 text-sm">Marfet</span>
          </div>
          <div className="grid grid-cols-1 place-content-start gap-2">
            <span>Market</span>
            <span className=" text-gray-600 text-sm">Markasdet</span>
            <span className=" text-gray-600 text-sm">Markfet</span>
            <span className=" text-gray-600 text-sm">Madfet</span>
            <span className=" text-gray-600 text-sm">Markasdfet</span>
          </div>
          <div className="grid grid-cols-1 place-content-start gap-2">
            <span>Market</span>
            <span className=" text-gray-600 text-sm"><a href="#">Marsdfakasdfet</a></span>
            <span className=" text-gray-600 text-sm">Marsdfet</span>
            <span className=" text-gray-600 text-sm">Markasdfet</span>
            <span className=" text-gray-600 text-sm">Markasfet</span>
          </div>
        </div>
      </div>
      <div className="pt-4 grid grid-cols-2 text-sm">
        <p>@aksdkfasd a2022</p>
        <p>All rights reversed @company name</p>
      </div>
    </footer>
  );
};

export default Footer;