import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleSignInSignUpButton = () => {
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    
    if(!isSignInForm){
      //Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
    else{
      //Sign In 
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
    }
  }

  return (
    <div>
        <Header/>
        <div className='fixed'>
            <img
                className='h-screen w-screen object-cover' 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='background'
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-11/12 md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-40'></input>}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-40'></input>
            <input ref={password} type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-40'></input>
            <p className='text-red-600 font-bold' onClick={toggleSignInForm}>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full' onClick={handleSignInSignUpButton}>{isSignInForm? "Sign In":"Sign Up"}</button>
            <p className=' cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;