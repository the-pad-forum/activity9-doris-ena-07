import React from "react";

type Props = {};

interface NavbarProps {
    view: string; // Change 'string' to the actual type of your 'view' prop
    setView: React.Dispatch<React.SetStateAction<string>>}; // Change 'string' to the actual type of your 'view' prop

const Navbar:React.FC<NavbarProps> = ({view, setView}) =>{
  return <div className="bg-white shadow-md flex flex-row items-center justify-end gap-8 fixed h-[80px] w-[100%] left-0 top-0 z-10 px-6">
    <button className="cursor-pointer text-black" onClick={()=>setView('Albums')}>Albums</button>
    <button className="cursor-pointer text-black" onClick={()=>setView('Users')}>Users</button>
    <button className="cursor-pointer text-black" onClick={()=>setView('Posts')}>Posts</button>
  </div>;
};

export default Navbar;