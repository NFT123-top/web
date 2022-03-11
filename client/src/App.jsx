import { Navbar, Welcome, MarketList, CollectionList } from './components';
import './index.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <MarketList />
      <blockquote className="text-2xl font-semibold italic text-center text-slate-900 p-6">
        When you look &nbsp;&nbsp;
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-rose-600 relative inline-block">
          <span className="relative text-white">annoyed</span>
        </span>
        &nbsp;&nbsp; all the time, people think that you're busy.
      </blockquote>
      <CollectionList first=" world" />
    </div>

  )
}

export default App
