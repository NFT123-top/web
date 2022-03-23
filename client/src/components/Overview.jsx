import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/solid'
import market from "../data/market";

const overviewData = [
  { cellId: 1, cellTitle: 'NFT market', elementsNum: 12, elementsData: [] },
];

const Element = ({ elementData }) => (
  <a href="#">
    <div className="flex flex-col items-center w-20 hover:bg-gray-100 hover:shadow-md">
      <ChevronUpIcon className='bg-red-500 w-16 text-white rounded-full'></ChevronUpIcon>
      <img src="" alt="" />
      <div className="text-gray-600 text-sm text-center font-thin ">titla a asd阿萨德 es</div>
    </div>
  </a>

);

const BasicCell = ({ cellData }) => (
  <div className="flex flex-col items-center relative mx-2 my-4">
    <h3 className='absolute -top-[12px]  px-4 bg-slate-200 rounded-sm opacity-100'>SXLEA Le title</h3>
    <div className="flex flex-wrap border-2 rounded-md pt-5 pb-3 px-2 gap-2">
      <Element></Element>
      <Element></Element>
      <ChevronUpIcon className='w-16'></ChevronUpIcon>
      <ChevronUpIcon className='w-16'></ChevronUpIcon>
      <ChevronUpIcon className='w-16'></ChevronUpIcon>
    </div>
  </div>
);



function FetchOverviewData() {

}


const Overview = () => {
  return (
    <div className="">

      <div className="px-3 pt-5 grid grid-cols-2">
        <BasicCell></BasicCell>
        <BasicCell></BasicCell>
      </div>
      <div className="px-3 grid grid-cols-5 ">
        <div className="flex flex-col">1
          <BasicCell className="" ></BasicCell>
          <BasicCell className="" ></BasicCell>
          <BasicCell className="" ></BasicCell>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col">
            <div className="">
              <div className="flex flex-row">
                <div className="flex flex-col">3
                  <BasicCell className="" ></BasicCell>
                  <BasicCell className="" ></BasicCell>

                </div>
                <div className="flex flex-col">5
                  <div className="">6
                    <BasicCell className="" ></BasicCell>
                  </div>
                  <div className="flex flex-row">7
                    <BasicCell className="" ></BasicCell>
                    <BasicCell className="" ></BasicCell>
                    <BasicCell className="" ></BasicCell>
                  </div>
                </div>

              </div>

            </div>
            <div className="flex flex-row">1
              <BasicCell className="" ></BasicCell>
              <BasicCell className="" ></BasicCell>

            </div>

          </div>
        </div>

      </div>
      <div className="px-3 pb-5 grid grid-cols-3">
        <BasicCell></BasicCell>
        <BasicCell></BasicCell>
        <BasicCell></BasicCell>
      </div>
    </div>
  );
};

export default Overview;