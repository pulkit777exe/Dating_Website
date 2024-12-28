import { Navbar } from "./navbar";
import { useState } from "react";
import { Loader } from "lucide-react";
import SignUp from "./signup";  // Import your SignUp component

export function Hero() {
  const [loading, setLoading] = useState(false); // State for loader
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Function to handle button click
  function clickhandler() {
    setLoading(true); // Start loading
    setTimeout(() => {
      setLoading(false); // Stop loading after 1 second
      setShowForm(true); // Show the form
    }, 1000); // Delay of 1 second before showing the form
  }

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Loader className="animate-spin w-12 h-12 text-yellow-500" />
        </div>
      ) : (
        <div className="text-6xl font-bold flex-grow">
          <img
            src="https://images.hinge.co/489574db9ccfa50bf87e440f8a3be065d958a97f-2304x1536.jpg?w=1920&q=75"
            alt=""
            className="flex justify-center items-center w-full h-full"
          />
          <div className="flex text-white absolute top-[400px] left-[100px]">
            The dating app <br />
            designed to be deleted
            <div className="text-xl relative top-[55px]">TM</div>
            <button
              onClick={clickhandler} 
              className="absolute top-40 text-lg rounded-full bg-black text-white w-[100px] h-[40px] hover:bg-white hover:text-black duration-500"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
      {showForm && <SignUp />}
    </div>
  );
}
