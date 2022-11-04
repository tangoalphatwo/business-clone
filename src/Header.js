import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import { logout } from './features/userSlice';

function Header() {

  // redux dispatch hook
  const dispatch = useDispatch();

  // logout function calls redix hook
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className='header'>

        {/* Breaks apart header into compenents */}
        <div className='header__left'>
            {/* sets logo in header */}
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Alpaca_%2831562329701%29.jpg' alt='' />

            {/* sets search bar*/}
            <div className='header__search'>
                <SearchIcon />
                <input placeholder='Search' type='text' />
            </div>
        </div>

        {/* right part of header component */}
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messaging' />
            <HeaderOption Icon={NotificationIcon} title='Notifications' />
            <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>
        </div>
    </div>
  )
}

export default Header