import React, { useEffect, useState } from 'react';
import './Feed.css'
import { CalendarViewDay, CreateRounded, EventNoteRounded, Image, SubscriptionsRounded } from '@mui/icons-material';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app'

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name:'Otto Christopher',
      description: 'This is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }

  return (
    <div className='feed'>
      <div className="feed__inputContainer">

        <div className="feed__input">
          <CreateRounded />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
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
      {posts.map(({id, data: {name, description, message, photoUrl}}) => (
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}


      
    </div>
  )
}

export default Feed
