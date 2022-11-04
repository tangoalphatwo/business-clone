import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TodayIcon from '@mui/icons-material/Today';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post.js';
import { db } from './Firebase.js';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {

  // redux useSelector hook, gets user from redux
  const user = useSelector(selectUser);

  // react useState hook for post inputs
  const [input, setInput] = useState('');
  // react useState hook for getting posts
  const [posts, setPosts] = useState([]);

  // useEffect hook fires when loaded or when dependency in last [] is used
  useEffect(() => {
    //gets realtime listener as snapshot and updates state
    db.collection('posts')
    .orderBy('timeStamp', 'desc')
    .onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }))));
  }, []);

  // post button funtionality
  const sendPost = e => {
    // prevents page refresh
    e.preventDefault();

    // pushes to the posts collection
    db.collection('posts').add({
      //
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || user.email[0],
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // resets input to empty
    setInput('');
  };

  return (
    <div className='feed'>

      {/* feed header */}
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            {/* sets value as the input piece of state */}
            {/* onChange releases input piece of state from static empty string */}
            <input value={input} onChange={e => setInput(e.target.value)} type='text' placeholder='Start a post'/>
            <button onClick={sendPost} type='submit'>Post</button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#7FC15E' />
          <InputOption Icon={TodayIcon} title='Event' color='#E7A33E' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#C0CBCD' />
        </div>
      </div>

      {/* feed posts */}
      {/* renders posts on screen */}
      <div className='feed__post'>
        {posts.map(({ id, data: { name, photoUrl, description, message }}) => (
        <Post 
        key={id}
        name={name}
        photoUrl={photoUrl}
        description={description}
        message={message}
        />
      ))}
      </div>

    </div>
  )
}

export default Feed