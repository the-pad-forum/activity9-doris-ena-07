"use client"

import React, { useState, useEffect, FC } from 'react';
import styles from './Posts.module.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage]=useState<number>(1)
  const itemsPerPage = 12;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const visibleData = posts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data as Post[]));
  }, []);

  function capitalizeFirstCharacter(str: string){
    if (str.length===0){return ''}
    const first=str[0].toUpperCase()
    return str.replace(str.charAt(0),first)
  }

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
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 pt-2'>
        {visibleData.map(post => (
          <div key={post.id}>
            <div className="card bg-white shadow-xl h-[300px]">
              <div className="card-body">
                <h3 className='text-slate-800 text-2xl font-semibold capitalize'>{post.title}. </h3>

                <p className='text-slate-800'>{capitalizeFirstCharacter(post.body)}</p>
              </div>
            </div>
            {/* <h3 className='text-slate-800 text-2xl font-semibold capitalize'>{post.title}.</h3>
            <p className='text-slate-800'>{capitalizeFirstCharacter(post.body)}</p> */}
          </div>
        ))}

      </div>

      <div className='flex flex-row items-center pb-8 gap-4 text-black mt-5 justify-end'>
        <button className= {` bg-indigo-500 px-4 py-1 border-indigo-400 border-solid border-[1px] rounded-md ${currentPage === 1? 'text-black/30' :'text-white' }`} onClick={handlePrevPage}>Prev.</button>
        <p>{currentPage}</p>
        <button className={` bg-indigo-500 px-2 py-1 border-indigo-400 border-solid border-[1px] rounded-md ${currentPage === totalPages? 'text-black/30' :'text-white'}`} onClick={handleNextPage}>Next</button>
      </div>
    </>
  );
  
};

export default Posts;