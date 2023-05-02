import React from 'react';
import './Header.css';
import { BusinessCenterRounded, HomeRounded, NotificationsRounded, Search, SupervisorAccountRounded, TextsmsRounded } from '@mui/icons-material';
import HeaderOption from './HeaderOption';

function Header() {
  return (
    <div className='header'>

      {/* Left part of the header */}
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" 
        alt="" 
        />

        <div className="header__search">
          {/* Search icon */}
          <Search />
          <input type="text" />
          
        </div>
      </div>

      {/* Right part of the header */}
      <div className="header__right">
        <HeaderOption Icon={HomeRounded} title='Home'/>
        <HeaderOption Icon={SupervisorAccountRounded} title='My Network'/>
        <HeaderOption Icon={BusinessCenterRounded} title='Jobs'/>
        <HeaderOption Icon={TextsmsRounded} title='Messaging'/>
        <HeaderOption Icon={NotificationsRounded} title='Notifications'/>
        <HeaderOption avatar='https://media.licdn.com/dms/image/D4D35AQEZGau_CXBAbA/profile-framedphoto-shrink_100_100/0/1650353307849?e=1683612000&v=beta&t=rbeRcRQHQWZzZKIu_8trtZ93ycsklezjLIVxJe5c1vM' 
        title='Me'/>
      </div>
    </div>
  )
}

export default Header;
