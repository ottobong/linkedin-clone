import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://wallpapers.com/images/hd/abstract-pastel-linkedin-banner-d4uikckcdgob8bo1.jpg" alt="" />
        <Avatar className='sidebar__avatar'/>
        <h2>Otto Christopher</h2>
        <h5>Product Designer | Software Engineer</h5>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">4,234</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">12,234</p>
        </div>
        
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem('softwareengineering')}
        {recentItem('react')}
        {recentItem('coding')}
        {recentItem('frontend')}
        {recentItem('webapp')}
      </div>

    </div>
  )
}

export default Sidebar
