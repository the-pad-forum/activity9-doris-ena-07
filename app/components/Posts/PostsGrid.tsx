'use client'

import React, { useState, useEffect, FC } from 'react';
import styles from './Posts.module.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

function capitalizeFirstCharacter(str: string){
    if (str.length===0){return ''}
    const first=str[0].toUpperCase()
    return str.replace(str.charAt(0),first)
}

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data as Post[]));
  }, []);

  return (
    <div className='container mx-auto px-5'>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 py-10">
        {posts.map(post => (
        <div key={post.id} className={'card w-full bg-white shadow-lg shadow-indigo-500/40'}>
         <div className="card-body">
         <h3 className='card-title text-indigo-900 text-lg uppercase font-bold'>{post.title}</h3>
          <p className='text-sm text-slate-800'>{capitalizeFirstCharacter(post.body)}</p>
         </div>
        </div>
      ))}
        </div>
      
    </div>
  );
};

export default Posts;