import React from "react";

type Props = {};

interface NavbarProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>
}; 

const Navbar:React.FC<NavbarProps> = ({view, setView}) => {
  return (
    <div className="bg-white opacity-2 shadow-md flex flex-row items-center gap-x-3 justify-end fixed h-[80px] w-[100%] left-0 top-0 z-10 px-6">
      <button 
        className={`nav-item ${view === 'Albums' && 'active'}`} 
        onClick={()=>setView('Albums')}
      >Albums</button>

      <button 
        className={`nav-item ${view === 'Users' && 'active'}`} 
        onClick={()=>setView('Users')}
      >Users</button>

      <button 
        className={`nav-item ${view === 'Posts' && 'active'}`} 
        onClick={()=>setView('Posts')}
      >Posts</button>
    </div>
  );
};

export default Navbar;