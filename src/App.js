import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import Trending from './Components/Trending/Trending';
import Top_seller from './Components/Top_seller/Top_seller';
import Auction from './Components/Auction/Auction';
import Featured from './Components/Featured/Featured';
import Create_sell from './Components/Create_sell/Create_sell';
import Author from './Components/Author/Author';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div className="">
      <Header />
      <Landing />
      <Trending />
      <Top_seller />
      <Auction />
      <Featured />
      <Create_sell />
      <Author />
      <Footer />
    </div>
  );
}

export default App;
