import { useEffect,useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router";
import SignUp from "../page/signup";
import { Hero } from "../page/hero";
import { Approach } from "../page/approach"
import { Work } from "../page/work";
import { Footer } from "../page/footer";
export default function App(){
      
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(
            <>
            <Hero/>
            <Approach/>
            <Work/>
            <Footer/>
            </>
          )}/>
          <Route path="/user/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>      
  )
}