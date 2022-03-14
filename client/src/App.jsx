import { Navbar, Welcome, MarketList, CollectionList, Tools, Footer } from './components';
import './index.css';

function App() {
  return (
    <div className="">
      <div className="gradient-bg-welcome">
        
      <Navbar />
      <Welcome />
      </div>
      <MarketList />
      <CollectionList first=" world" />
      <Tools />
      <br />
      <Footer />
    </div>

  )
}

export default App
