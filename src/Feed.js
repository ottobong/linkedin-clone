import React, { useEffect, useState } from 'react';
import './Feed.css'
import { CalendarViewDay, CreateRounded, EventNoteRounded, Image, SubscriptionsRounded } from '@mui/icons-material';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot()
  }, [])

  const sendPost = (e) => {
    e.preventDefault();

    
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">

        <div className="feed__input">
          <CreateRounded />
          <form action="">
            <input type="text" />
            <button onClick={sendPost} type='submit'>Send</button>
          </form>
        </div>

        <div className="feed__inputOption">
          <InputOption 
          Icon={Image} 
          title='Photo' 
          color='#70b5f9'
          />
          <InputOption 
          Icon={SubscriptionsRounded} 
          title='Video' 
          color='#e7a33e'
          />
          <InputOption 
          Icon={EventNoteRounded} 
          title='Event' 
          color='#c0cbcd'
          />
          <InputOption 
          Icon={CalendarViewDay} 
          title='Write article' 
          color='#7fc15e'
          />


        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <Post />
      ))}

      <Post 
      name='Otto Christopher' 
      description='This is my description' 
      message='I built this clone'
      />
      
    </div>
  )
}

export default Feed
