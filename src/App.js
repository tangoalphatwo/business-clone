import React, { useEffect, dispatch } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { selectUser, login, logout } from './features/userSlice';
import Login from './Login';
import { useSelector } from 'react-redux';
import { auth } from './Firebase';

function App() {

  // redux useSelector hook, gets user from redux
  const user = useSelector(selectUser);

  // react useEffect hook for persistant auth
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      } else {
        //user logged out
        dispatch(logout());
      }
    })
  })

  return (
    <div className="app">

      {/* {header component} */}
      <Header />

      {/* if no user render login component */}
      {!user ? <Login /> : (
        // else render the rest of the app
        <div className='app__body'>
        {/* {left sidebar componenet} */}
        <Sidebar />

        {/* {center feed componenet} */}
        <Feed />

        {/* {right widgets componenet} */}
        <Widgets />

        </div>
      )}
      
    </div>
  );
}

export default App;
