"use client"

import React, { useState, useEffect, FC } from 'react';
import styles from './Posts.module.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsProps {
  view: string; // Change 'string' to the actual type of your 'view' prop
  setView: React.Dispatch<React.SetStateAction<string>>}; // Change 'string' to the actual type of your 'view' prop

  const Posts:React.FC<PostsProps> = ({view, setView}) =>{
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage]=useState<number>(1)
  const [showPage, setShowpage] = useState<boolean>(false)



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

const itemsPerPage = 12;
const totalPages = Math.ceil(posts.length / itemsPerPage);

const visibleData = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};
const getPageNumbers = () => {
  const pageNumbers = [];
  const visiblePages = 1; // Adjust the number of vi
}

return (
  <>
  <div className='flex flex-col space-y-3'>
    {visibleData.map(post => (
      <div key={post.id}>
        <h3 className='text-slate-800 text-[16px] font-semibold uppercase'>{capitalizeFirstCharacter(post.title)}.</h3>
        <p className='text-sm text-slate-800'>{capitalizeFirstCharacter(post.body)}</p>
      </div>
    ))}

  </div>
   <div className='flex flex-row items-center gap-4 text-black mt-5 '>
   <button className={`${currentPage === 1? 'text-black/30' :'text-black'}`} onClick={handlePrevPage}>Prev.</button>
   <p>{currentPage}</p>
   <button className={`${currentPage === totalPages? 'text-black/30' :'text-black'}`} onClick={handleNextPage}>Next</button>
 </div>
 </>
);
  
};

export default Posts;