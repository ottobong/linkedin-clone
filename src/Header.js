import React from 'react';
import './Header.css';
import { Search } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <h1>This is a homepage</h1>

      {/* Left part of the header */}
      <div className="header__left">
        <img src="" alt="" />

        <div className="header__search">
          {/* Search icon */}
          <input type="text" />
          <Search />
        </div>
      </div>

      {/* Right part of the header */}
      <div className="header__right"></div>
    </div>
  )
}

export default Header;
