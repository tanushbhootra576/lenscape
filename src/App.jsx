import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandignNew from './componets/LandingCompo/LandingNew';
import About from './componets/About/About';
import Gallery from './componets/Gallery/Gallery';
import NavBar from './componets/NavBar/NavBar';
import SidePanel from './componets/SidePanel/SidePanel';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <NavBar toggle={toggleMenu} />
      <SidePanel isOpen={menuOpen} toggle={toggleMenu} />
      <Routes>
        <Route path="/" element={<LandignNew />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
