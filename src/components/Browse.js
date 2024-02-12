import React from 'react'
import Header from './Header';
import { auth } from './../utils/firebase'; 
import { signOut } from 'firebase/auth';

const Browse = () => {
  return (
    <div>
      <Header/>
      <img
          className='h-screen w-screen object-cover' 
          src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg'
          alt='background'
      />
    </div>
  )
}

export default Browse;