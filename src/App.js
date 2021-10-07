import React from "react";
import './App.css';
import Banner from "./componets/banner/Banner";
import NavBar from "./componets/navbar/NavBar";
import RowPost from "./componets/rowpost/RowPost";
import { imgActions, imgOriginals } from './urls'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={imgOriginals} title='Netflix Originals' />
      <RowPost url={imgActions} title='Action' isSmall />
    </div>
  );
}

export default App;
