import React from 'react';
import './App.scss';
import Header from './layouts/Header/Header';
import Socials from './layouts/Socials/Socials';
import About from './sections/About/About';
import SupportChannel from './sections/SupportChannel/SupportChannel';
import banner from './assets/canni-banner.jpg';
import RecentVideos from './sections/RecentVideos/RecentVideos';
import MerchStore from './sections/MerchStore/MerchStore';
import Footer from './layouts/Footer/Footer';
import Stats from './layouts/Stats/Stats';

function App() {
  return (
    <div className="App" >
      <div className="hero" id="home">
        <Header />
        <h1 className="styled-title">STAY HUNGRY</h1>
        <Socials />
      </div>
      <About />
      <Stats />

      <SupportChannel />
      <div className="banner">
        <img src={banner} alt="Southern Cannibal banner"/>
      </div>
      
      <RecentVideos />
      <MerchStore />
      <Footer />
    </div>
  );
}

export default App;
