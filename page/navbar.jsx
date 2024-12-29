import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[70px] w-full py-3 px-6 md:px-10 bg-white/10 backdrop-blur-md rounded-lg shadow-lg mt-[10px]">
      
      <div className="hidden md:flex gap-x-6 items-center" id="pagelinks">
        <ul className="flex gap-x-6 text-white text-lg font-semibold">
          <li className="hover:text-gray-300 cursor-pointer">Mission</li>
          <li className="hover:text-gray-300 cursor-pointer">Careers</li>
          <li className="hover:text-gray-300 cursor-pointer">Labs</li>
        </ul>
      </div>

      <div id="logo" className="flex items-center justify-center w-full">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Hinge_Logo.png" 
          alt="Hinge Logo" 
          width={100} 
          className="h-[50px] md:h-[60px] object-contain" 
        />
      </div>

      <div id="impact-page" className="hidden md:flex">
        <ul className="flex gap-x-6 text-white text-lg font-semibold">
          <li className="hover:text-gray-300 cursor-pointer">Impact</li>
        </ul>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl">
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-[70px] left-0 right-0 transition-all duration-300 ease-in-out ${
          menuOpen ? 'bg-[#1a1a1a] opacity-100 translate-y-0' : 'bg-transparent opacity-0 translate-y-[-20px]'
        } text-white backdrop-blur-md rounded-lg shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-y-4 py-4">
          <li className="text-lg font-semibold hover:text-gray-300 cursor-pointer">Mission</li>
          <li className="text-lg font-semibold hover:text-gray-300 cursor-pointer">Careers</li>
          <li className="text-lg font-semibold hover:text-gray-300 cursor-pointer">Labs</li>
          <li className="text-lg font-semibold hover:text-gray-300 cursor-pointer">Impact</li>
        </ul>
      </div>
    </div>
  );
}
