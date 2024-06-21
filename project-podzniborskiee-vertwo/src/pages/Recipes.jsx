import React from 'react';
import Header from '../components/Header';
import Search from '../components/SearchRecipes';
import Bottom from '../components/BottomRecipes';


function Recipes() {
  return (
    <>
      <Header />
      <Search />
      <Bottom />
    </>
  );
}

export default Recipes;
