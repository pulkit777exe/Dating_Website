export function Navbar() {
    return (
      <div className="font-sans fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[70px] w-full py-3 px-6 md:px-10 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
        
        <div className="flex gap-x-8 items-center" id="pagelinks">
          <ul className="flex gap-x-6 text-white text-lg font-semibold">
            <li className="hover:text-gray-300 cursor-pointer">Mission</li>
            <li className="hover:text-gray-300 cursor-pointer">Careers</li>
            <li className="hover:text-gray-300 cursor-pointer">Labs</li>
          </ul>
        </div>
  
        <div id="logo" className="flex items-center justify-center w-full -translate-x-16">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Hinge_Logo.png" 
            alt="Hinge Logo" 
            width={100} 
            className="h-[50px] md:h-[60px] object-contain" 
          />
        </div>
  
        <div id="impact-page">
          <ul className="flex gap-x-6 text-white text-lg font-semibold">
            <li className="hover:text-gray-300 cursor-pointer">Impact</li>
          </ul>
        </div>
      </div>
    );
}
  