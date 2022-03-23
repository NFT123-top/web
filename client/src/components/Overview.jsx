import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid'
import market from "../data/market";

const overviewData =
{
  marketCell: { id: 1, title: 'NFT Market', element: market },
  basicCell1: { id: 2, title: 'asdf', element: [{ name: '1211', imgUrl: 'https://pbs.twimg.com/profile_images/1488544287746924551/islnGZQP_400x400.png' }] }
};

function Element(props) {
  const element = props.element;
  return (
    <div className="flex flex-wrap border-2 rounded-md pt-5 pb-3 px-2 gap-2">
      {/* <ChevronUpIcon className='bg-red-500 w-16 text-white rounded-full'></ChevronUpIcon> */}
      {
        element.map((item) => (
          <a href="#">
            <div className="flex flex-col items-center w-16 hover:bg-gray-100 hover:shadow-md">
              <img src={item.imgUrl} alt="" />
              <div className="text-gray-600 text-sm text-center font-thin ">{item.name}</div>
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
      <h3 className='absolute -top-[12px]  px-4 bg-slate-200 rounded-sm opacity-100'>{cell.title}</h3>
      <Element element={cell.element}></Element>
    </div>)
};

const Overview = () => {
  return (
    <div className="">
      <div className="px-3 pt-5 grid grid-cols-2">
        <EachCell cell={overviewData.marketCell}></EachCell>
        <EachCell cell={overviewData.marketCell}></EachCell>
      </div>
      <div className="px-3 grid grid-cols-5 ">
        <div className="flex flex-col">1
          <EachCell cell={overviewData.marketCell}></EachCell>
          <EachCell cell={overviewData.marketCell}></EachCell>
          <EachCell cell={overviewData.marketCell}></EachCell>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col">
            <div className="">
              <div className="flex flex-row">
                <div className="flex flex-col">3
                  <EachCell cell={overviewData.marketCell}></EachCell>
                  <EachCell cell={overviewData.marketCell}></EachCell>

                </div>
                <div className="flex flex-col">5
                  <div className="">6
                    <EachCell cell={overviewData.marketCell}></EachCell>
                  </div>
                  <div className="flex flex-row">7
                    <EachCell cell={overviewData.marketCell}></EachCell>
                    <EachCell cell={overviewData.marketCell}></EachCell>
                    <EachCell cell={overviewData.marketCell}></EachCell>
                  </div>
                </div>

              </div>

            </div>
            <div className="flex flex-row">1
              <EachCell cell={overviewData.marketCell}></EachCell>
              <EachCell cell={overviewData.marketCell}></EachCell>

            </div>

          </div>
        </div>

      </div>
      <div className="px-3 pb-5 grid grid-cols-3">
        <EachCell cell={overviewData.marketCell}></EachCell>
        <EachCell cell={overviewData.marketCell}></EachCell>
        <EachCell cell={overviewData.marketCell}></EachCell>
      </div>
    </div>
  );
};

export default Overview;