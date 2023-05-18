import React from 'react';
import UserAvatar from '../assets/user.jpg';

const User = () => {
  return(
    <div className='user'>
      {/* <div className='avatar'> */}
        <img src={UserAvatar} alt='user img'/>
        <p>Source</p>
        <p className='favorite'>3</p>
      {/* </div> */}
    </div>
  )
}

export default User;