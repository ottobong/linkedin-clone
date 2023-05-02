import React from 'react';
import './Feed.css'
import { CreateRounded } from '@mui/icons-material';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">

        <div className="feed__input">
          <CreateRounded />
          <form action="">
            <input type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>

        <div className="feed__inputOption">
          <inputOption />
        </div>
      </div>
    </div>
  )
}

export default Feed
