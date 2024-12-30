import { useEffect,useState } from "react";
import {BrowserRouter,Routes,Route,Navigate} from "react-router";
import SignUp from "../page/signup";
import { Hero } from "../page/hero";
import { Approach } from "../page/approach"
import { Work } from "../page/work";
import { Footer } from "../page/footer";
import { ErrorPage } from "../page/errorUrl";
export default function App(){
      
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/" || "/home"} element={(
            <>
            <Hero/> 
            <Approach blackText={true}/>
            <Work blackText={true}/>
            <Footer/>
            </>
          )}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>      
  )
}