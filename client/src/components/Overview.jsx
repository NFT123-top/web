import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid'
import market from "../data/market";
import tools from "../data/tools";
import music from "../data/music";
import game from "../data/game";
import collection from "../data/collection";
import metaverse from "../data/metaverse";
import art from "../data/art";
import ip from "../data/ip";
import defi from "../data/defi";
import sport from '../data/sport';
import analysis from '../data/analysis';
import infrastructure from '../data/infrastructure'


const overviewData =
{
  marketCell: { id: 1, title: 'NFT Market', element: market },
  infrastructureCell: { id: 1, title: 'Infrastructure', element: infrastructure},
  collectionCell: { id: 2, title: 'Collectibles', element: collection },
  gameCell: { id: 2, title: 'Games', element:game },
  socialCell: { id: 2, title: 'Socail', element: [{}] },
  sportsCell: { id: 2, title: 'Sport', element: sport },
  musicCell: { id: 2, title: 'Music', element: music },
  artCell: { id: 2, title: 'Science & Art', element: art},
  ipCell: { id: 2, title: 'Hot IP', element: ip },
  utilityCell: { id: 2, title: 'Utility', element:tools},
  analysisCell: { id: 2, title: 'Analysis', element: analysis },
  defiCell: { id: 2, title: 'Defi', element: defi },
  metaverseCell: { id: 2, title: 'Metaverse', element: metaverse},

};

function Element(props) {
  const element = props.element;
  return (
    <div className="flex flex-wrap border-2 rounded-md p-8 gap-8">
      {/* <ChevronUpIcon className='bg-red-500 w-16 text-white rounded-full'></ChevronUpIcon> */}
      {
        element.map((item) => (
          <a href={item.hrefUrl} target="_blank">
            <div className="flex flex-col items-center w-14">
              <img className="hover:scale-105 rounded-full" src={item.imgUrl} alt="" />
              <span className="text-gray-600 text-sm text-center font-thin h-6 overflow-hidden">{item.name}</span>
            </div>
          </a>
        ))
      }
    </div>
  )
};

function EachCell(props) {
  const cell = props.cell;
  return (
    <div className="flex flex-col items-center relative mx-2 my-4">
      <h3 className='absolute -top-[18px] px-4 py-2 bg-slate-200 rounded-tl-md'>{cell.title}</h3>
      <Element element={cell.element}></Element>
    </div>)
};

const Overview = () => {
  return (
    <div className="mx-3 my-10">
      <blockquote className="text-2xl font-semibold italic text-center p-6">
        The overview &nbsp;&nbsp;
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
          <span className="relative text-white">NFT Ecosysytem</span>
        </span>
        &nbsp;&nbsp; for top projects
      </blockquote>
      <div className="sm:grid sm:grid-cols-2">
        <EachCell cell={overviewData.marketCell}></EachCell>
        <EachCell cell={overviewData.collectionCell}></EachCell>
      </div>
      <div className="sm:grid sm:grid-cols-5">
        <div className="flex flex-col col-span-2">
          <EachCell cell={overviewData.gameCell}></EachCell>
          <EachCell cell={overviewData.musicCell}></EachCell>
          <EachCell cell={overviewData.sportsCell}></EachCell>
        </div>
        <div className="col-span-3">
          <div className="flex flex-col">
            <div className="">
              <div className="flex flex-row justify-center">
                <div className="flex flex-col justify-between">
                  <EachCell cell={overviewData.socialCell}></EachCell>
                  <EachCell cell={overviewData.defiCell}></EachCell>
                </div>
                <div className="flex flex-col">
                  <div className="">
                    <EachCell cell={overviewData.metaverseCell}></EachCell>
                  </div>
                  <div className="flex flex-row">
                    <EachCell cell={overviewData.ipCell}></EachCell>
                    <EachCell cell={overviewData.artCell}></EachCell>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <EachCell cell={overviewData.utilityCell}></EachCell>
              <EachCell cell={overviewData.analysisCell}></EachCell>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-3">
        <EachCell cell={overviewData.infrastructureCell}></EachCell>
        {/* <EachCell cell={overviewData.utilityCell}></EachCell>
        <EachCell cell={overviewData.analysisCell}></EachCell> */}
      </div>
    </div>
  );
};

export default Overview;