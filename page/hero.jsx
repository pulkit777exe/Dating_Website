import { Navbar } from "./navbar";
import { useNavigate } from "react-router";

export function Hero() {
  const navigate = useNavigate();
  
  function clickhandler() {
    navigate("/signup")
  }

  return (
    <div className="relative">
      <Navbar />
      <div className="relative w-full h-full">
        <img
          src="https://images.hinge.co/489574db9ccfa50bf87e440f8a3be065d958a97f-2304x1536.jpg?w=1920&q=75"
          alt="Hero Image"
          className="w-full h-auto object-cover"
        />
        <div className="absolute top-[25%] left-[10%] md:left-[15%] text-white px-4 md:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            The dating app <br />
            designed to be deleted
            <h1 className="text-lg sm:text-xl relative top-4">TM</h1>
          </h1>    
        <button
            onClick={clickhandler}
            className="mt-6 text-lg rounded-full hover:shadow-2xl bg-black text-white w-[120px] h-[40px] sm:items-center sm:w-[150px] sm:h-[50px] hover:bg-white hover:text-black transition-all duration-300"
          >
            Sign In
        </button>
        </div>
      </div>
    </div>
  );
}
