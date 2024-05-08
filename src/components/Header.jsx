import React, { useState } from 'react';
import Navbar from './Navbar';
import BurgerIcon from './BurgerIcon';

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const handleNavbar = () => setNavbar(prev => !prev);

  return (
    <div className="navbar">
      <BurgerIcon handleNavbar={handleNavbar} />
      <Navbar navbar={navbar} />
    </div>
  )
}

export default Header;
