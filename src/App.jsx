import { useEffect,useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router";
import SignUp from "../page/signup";
import { Home } from "../page/home";

export default function App(){
      
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/user/signup" element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>      
  )
}