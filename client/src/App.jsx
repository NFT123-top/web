import { Navbar, Welcome, Overview, MarketList, CollectionList, Tools, Footer } from './components';
import { Router, Link } from "wouter";

import useHashLocation from './hooks/WouterHash';
import PageRouter from "./components/Router.jsx";

import './index.css';


function App() {
  return (
    <Router hook={useHashLocation}>
      <Navbar />
      <main role="main" >
        <div className="">
          <PageRouter />
        </div>
      </main>
      <Footer />
    </Router>
    // <div className="">
    //   <div className="gradient-bg-welcome">
    //     <Navbar />
    //     <Welcome />
    //   </div>
    //   <Overview />
    //   {/* <MarketList />
    //   <CollectionList first=" world" />
    //   <Tools />
    //   <br /> */}
    //   <Footer />
    // </div>

  )
}

export default App
