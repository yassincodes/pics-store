import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";
import Artists from "./pages/Artists";
import ArtistCollection from "./pages/ArtistCollection";

function App() {
  return (
   
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Photos />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/artists/:artistName" element={<ArtistCollection />} />
        </Routes>
      </div>
 
  );
}

export default App;
