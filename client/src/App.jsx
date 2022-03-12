import { Navbar, Welcome, MarketList, CollectionList, Footer } from './components';
import './index.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <MarketList />
      <CollectionList first=" world" />
      <br />
      <Footer />
    </div>

  )
}

export default App
