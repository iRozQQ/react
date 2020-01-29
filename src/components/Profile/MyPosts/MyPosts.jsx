import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>

      
      <div className={s.posts}>
          </div>
      <Post message='Привет, как ты?' Like='15'/>
      <Post message='Это мой первый пост' Like='20'/>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>

  );
}

export default MyPosts;