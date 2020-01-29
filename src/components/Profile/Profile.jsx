import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
      </div>
      <img src='https://planetofhotels.com/blog/wp-content/uploads/Laguna-i-plyazh-Al%60-Mamzar.jpg'></img>
      <div>
        Ava+Description
        </div>
      <MyPosts />
    </div>
  );
}

export default Profile;