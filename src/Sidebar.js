import React from 'react'
import {Avatar} from '@mui/material'
import './Sidebar.css'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {

    // redux useSelector hook, gets user from redux
    const user = useSelector(selectUser);

  // header icons as a function
  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
        <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>

        {/* sidebar top component top half */}
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt='' />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        {/* sidebar top comonent bottom half */}
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                {/*  */}
                <p>Profile Views</p>
                <p className='sidebar__statNum'>1,000</p>
            </div>
            <div className='sidebar__stat'>
                <p>Post Views</p>
                <p className='sidebar__statNum'>2,000</p>
            </div>
        </div>

        {/* sidebar bottom component */}
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {/* sets hashtag menu itmes with funtion */}
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar