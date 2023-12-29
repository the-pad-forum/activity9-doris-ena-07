'use client'

import React, { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import styles from './Albums.module.css';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums = () =>{
  const [albums, setAlbums] = useState<Album[]>([]);
  const [currentPage, setCurrentPage]=useState<number>(1)
  const [showPage, setShowpage] = useState<boolean>(false)
  const itemsPerPage = 12;
  const totalPages = Math.ceil(albums.length / itemsPerPage);
  const visibleData = albums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data as Album[]));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10 pt-2">
        {visibleData.map(album => (
          <div key={album.id} className={'card w-full bg-white shadow-lg shadow-indigo-500/40 h-[300px] overflow-hidden'}>
            <img 
              src="https://media.istockphoto.com/id/1446382435/vector/vinyl-record-retro-art.jpg?s=612x612&w=0&k=20&c=D_WaBL6mShb_Doi7E1MhaFfMjrS2tBTdUb48csUq9Kk=" 
              alt="Shoes" 
              className="w-full h-[200px]" 
            />

            <div className="card-body">
              <h3 className='card-title text-indigo-900 text-lg font-semibold'>{capitalizeFirstCharacter(album.title)}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-row items-center gap-4 text-black justify-center pb-8'>
        <button className={`bg-indigo-500 px-2 py-1 border-indigo-400 border-solid border-[1px] rounded-md ${currentPage === 1? 'text-black/30' :'text-white'}`} onClick={handlePrevPage}>Prev.</button>
        <p>{currentPage}</p>
        <button className={` bg-indigo-500 px-2 py-1 border-indigo-400 border-solid border-[1px] rounded-md ${currentPage === totalPages? 'text-black/30' :'text-white'}`} onClick={handleNextPage}>Next</button>
      </div>
    </>
  );

};

export default Albums;