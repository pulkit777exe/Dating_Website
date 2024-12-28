import { useEffect } from "react";
import {BrowserRouter,Routes,Route} from "react-router"
import { Approach } from "../page/approach";
import { Footer } from "../page/footer";
import { Hero } from "../page/hero";
import { Work } from "../page/work";
import { useState } from "react";
import { Loader } from "lucide-react";
import SignUp from "../page/signup";

export default function App(){
      const [ loading,setLoading ] = useState(true);
      useEffect(()=>{
        setTimeout(()=>{
          setLoading(false)
        },1000)
      },[]);


  // return (<div>
  //   {loading ? (
  //     <div className="flex items-center justify-center h-screen">
  //       <Loader className="animate-spin w-12 h-12 text-yellow-500" />
  //     </div>
  //   ) : ( <>
  //       <Hero/>
  //       <Approach/>
  //       <Work/>
  //       <Footer/>
  //     </>
  //   )}
  // </div>)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Hero/>
            <Approach/>
            <Work/>
            <Footer/>
          </>}/>
          <Route path="user/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>      
  )
}