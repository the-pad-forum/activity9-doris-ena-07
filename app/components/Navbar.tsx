import React from "react";

type Props = {};

interface NavbarProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<sting>>
}; 

const Navbar:React.FC<NavbarProps> = ({view, setView}) => {
  const btnClasses='cursor-pointer transition-all duration-300 rounded-md py-1.5 px-3.5 text-indigo-900'

  const onMouseEnter = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = e.target as HTMLButtonElement;

    if (!element.classList.contains('bg-indigo-400')) {
      element.classList.add('text-indigo-400')
    }
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const element = e.target as HTMLButtonElement;

    element.classList.remove('text-indigo-400')
  }

  return (
    <div className="bg-white opacity-2 shadow-md flex flex-row items-center gap-x-3 justify-end fixed h-[80px] w-[100%] left-0 top-0 z-10 px-6">
      <button 
        className={`${btnClasses} ${view === 'Albums' && 'bg-indigo-400'}`} 
        onClick={()=>setView('Albums')}
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
      >Albums</button>

      <button 
        className={`${btnClasses} ${view === 'Users' && 'bg-indigo-400'}`} 
        onClick={()=>setView('Users')}
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
      >Users</button>

      <button 
        className={`${btnClasses} ${view === 'Posts' && 'bg-indigo-400'}`} 
        onClick={()=>setView('Posts')}
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={(e) => onMouseLeave(e)}
      >Posts</button>
    </div>
  );
};

export default Navbar;