import { BrowserRouter,Routes,Route } from "react-router";
import { useEffect,useState } from "react";
import SignUp from "../page/signup";
import { Hero } from "../page/hero";
import { Approach } from "../page/approach"
import { Work } from "../page/work";
import { Footer } from "../page/footer";
import { ErrorPage } from "../page/errorUrl";
export function LoadingPage(){
    return (<>
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
    </>)
}