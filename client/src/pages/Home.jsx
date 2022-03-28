import React from 'react'
import { Welcome, Overview, MarketList, CollectionList, Tools} from '../components';
import '../index.css';

export default function Home() {
  return (
    <div>
      <div className="gradient-bg-welcome">
        
      <Welcome/>
      </div>
      <Overview />
    </div>
  )
}
