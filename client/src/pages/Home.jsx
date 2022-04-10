import React from 'react'
import { Welcome, Overview, MarketList, CollectionList, Tools } from '../components';
import '../index.css';


export default function Home() {
  return (
    <div>
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
      <div className="max-w-screen-2xl center-item">
        <Overview />
      </div>
    </div>
  )
}
