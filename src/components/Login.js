import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img
                className='h-screen w-screen object-cover' 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='background'
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-11/12 md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In":"Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Name' className='p-4 my-4 w-full bg-gray-700 bg-opacity-40'></input>}
            <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 bg-opacity-40'></input>
            <input type='text' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 bg-opacity-40'></input>
            <button className='p-4 my-6 bg-red-700 w-full'>{isSignInForm? "Sign In":"Sign Up"}</button>
            <p className=' cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now":"Already registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login;