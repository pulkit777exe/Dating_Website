import { useState } from "react";

export function Navbar({blackText}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-sans fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[70px] w-full py-3 px-6 md:px-10 bg-white/10 backdrop-blur-md rounded-lg shadow-lg mt-[10px]">
      
      <div className="hidden md:flex gap-x-6 items-center" id="pagelinks">
        <ul className="flex gap-x-6 text-white text-lg font-semibold">
          <li className={`hover:text-black cursor-pointer transition-all ease duration-300 ${blackText ? 'text-black' : 'text-white'}`}>Mission</li>
          <li className={`hover:text-black cursor-pointer transition-all ease duration-300 ${blackText ? 'text-black' : 'text-white'}`}>Careers</li>
          <li className={`hover:text-black cursor-pointer transition-all ease duration-300 ${blackText ? 'text-black' : 'text-white'}`}>Labs</li>
        </ul>
      </div>

      <div id="logo" className="flex items-center justify-center w-full">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Hinge_Logo.png" 
          alt="Hinge Logo" 
          width={100} 
          className="h-[50px] md:h-[60px] md:-translate-x-16 object-contain translate-x-6" 
        />
      </div>

      <div id="impact-page" className="hidden md:flex">
        <ul className="flex gap-x-6 text-white text-lg font-semibold">
          <li className={`hover:text-black cursor-pointer transition-all ease duration-300 ${blackText ? 'text-black' : 'text-white'}`}>Impact</li>
        </ul>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white text-3xl transition-all ease duration-300 ease">
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      <div
        className={`md:hidden absolute top-[70px] left-0 right-0 transition-all duration-300 ease ${
          menuOpen ? 'bg-[#1e1e1e] backdrop-blur-md opacity-100 translate-y-0' : 'bg-transparent opacity-0 translate-y-[-20px]'
        } text-white backdrop-blur-md rounded-lg shadow-lg`}
      >
        <ul className="flex flex-col items-center gap-y-4 py-4">
          <li className="text-lg font-semibold hover:text-black cursor-pointer transition-all ease duration-300">Mission</li>
          <li className="text-lg font-semibold hover:text-black cursor-pointer transition-all ease duration-300">Careers</li>
          <li className="text-lg font-semibold hover:text-black cursor-pointer transition-all ease duration-300">Labs</li>
          <li className="text-lg font-semibold hover:text-black cursor-pointer transition-all ease duration-300">Impact</li>
        </ul>
      </div>
    </div>
  );
}
