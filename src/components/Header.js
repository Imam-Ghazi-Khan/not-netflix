import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store=>store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(()=>{
      })
      .catch((error)=>{
        navigate("/error");
      })
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        if(user){
            //user is signed in
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          navigate("/browse");
        }else{
          //user is signed out
          dispatch(removeUser());
          navigate("/");
        }
    });

    //unsubscribe when component unmounts
    return ()=>unsubscribe();
},[]);


  return (
    <div className='fixed top-0 right-0 w-full px-8 py-2 bg-gradient-to-b from-black z-40 md:flex justify-between align-middle'>
        <img
            className='w-32 relative top-3 right-4'
            src={LOGO}
            alt='logo'
        />
        {
        user 
        && 
        <div className='md:static absolute top-0 right-2 flex my-6 justify-between'>
          <p className='md:visible invisible py-2 px-4 text-white'>Hey {user.displayName}!</p>
          <button onClick={handleSignOut} className='py-2 px-4 bg-red-600 rounded text-white font-bold text-sm'>Sign Out</button>
        </div>
        }
    </div>
  )
}

export default Header;