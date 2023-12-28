'use client'

import React, { useState, useEffect, FC } from 'react';
import styles from './Albums.module.css';

interface Album {
  userId: number;
  id: number;
  title: string;
}

interface AlbumsProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>}; // Change 'string' to the actual type of your 'view' prop

const Albums:React.FC<AlbumsProps> = ({view, setView}) =>{
  const [albums, setAlbums] = useState<Album[]>([]);
  const [currentPage, setCurrentPage]=useState<number>(1)
  const [showPage, setShowpage] = useState<boolean>(false)

  function capitalizeFirstCharacter(str: string){
    if (str.length===0){return ''}
    const first=str[0].toUpperCase()
    return str.replace(str.charAt(0),first)
  }


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data as Album[]));
  }, []);

  const itemsPerPage = 12;
const totalPages = Math.ceil(albums.length / itemsPerPage);

const visibleData = albums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
      {visibleData.map(album => (
        <div key={album.id} className={'card w-full bg-white shadow-lg shadow-indigo-500/40'}>
          <div className="card-body">
          <h3 className='card-title text-indigo-900 text-lg font-semibold'>{capitalizeFirstCharacter(album.title)}</h3>
          </div>
        </div>
      ))}
    </div>
    <div className='flex flex-row items-center gap-4 text-black '>
      <button className={`bg-indigo-500 px-2 py-1 border-indigo-900 border-solid border-[1px] ${currentPage === 1? 'text-black/30' :'text-white'}`} onClick={handlePrevPage}>Prev.</button>
      <p>{currentPage}</p>
      <button className={` bg-indigo-500 px-2 py-1 border-indigo-900 border-solid border-[1px] ${currentPage === totalPages? 'text-black/30' :'text-white'}`} onClick={handleNextPage}>Next</button>
    </div>
    </>
  );

};

export default Albums;