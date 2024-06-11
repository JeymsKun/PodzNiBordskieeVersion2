import React from 'react';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import Welcome from '../components/Welcome';
import LatestTitle from '../components/LatestTitle';
import Latest from '../components/Latest';
import SearchHome from '../components/Search';
import BottomHome from '../components/Bottom';


function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <Slideshow />
      <LatestTitle />
      <Latest />
      <SearchHome />
      <BottomHome />
    </>
  );
}

export default Home;
