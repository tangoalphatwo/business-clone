import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './Firebase';
import './Login.css'
import { login } from './features/userSlice';

function Login() {
    // react useStates for login form inputs
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // react-redux dispatch hook
    const dispatch = useDispatch();

    //login buttion functionality
    const loginToApp = (e) => {
        // prevents page refresh
        e.preventDefault();

        //
        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            // pushes user into redux store
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }));
        }).catch((error) => alert(error));
    };

    // register function
    const register = () => {
        // soft name validation
        if (!name) {
            return alert('Please enter a full name.');
        }

        // 
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name, // displayName is firebase keyword
                photoURL: pic
            })
            .then(() => {
                // pushes user into redux store
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: pic,
                }));
            });
        }).catch(error => alert(error));
    };

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/db/Alpaca_%2831562329701%29.jpg' alt='' />
            <div className='login__logoText'>
                <h1>Alpaca</h1>
                <h1>Business Chat</h1>
            </div>
        </div>

        <form>
            {/* sets value as the input piece of state */}
            {/* onChange releases input piece of state from static empty string */}
            <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name (Required if registering)' type="text"></input>
            <input value={pic} onChange={e => setPic(e.target.value)} placeholder='Profile Pic URL (optional)' type="text"></input>
            <input value={email} onChange={e => setEmail(e.target.value)}placeholder='Email' type="email"></input>
            <input value={password} onChange={e => setPassword(e.target.value)}placeholder='Password' type="password"></input>
            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>
            Not a member yet? {"  "}
            <span className='login__register' onClick={register} >Register Now</span>
        </p>
    </div>
  )
}

export default Login