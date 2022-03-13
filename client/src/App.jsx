import { Navbar, Welcome, MarketList, CollectionList, Tools, Footer } from './components';
import './index.css';

function App() {
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <MarketList />
      <CollectionList first=" world" />
      <Tools />
      <br />
      <Footer />
    </div>

  )
}

export default App
