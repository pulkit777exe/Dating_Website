import { useState } from "react";
import { Approach } from "../page/approach";
import { Footer } from "../page/footer";
import { Hero } from "../page/hero";
import { Work } from "../page/work";
export default function App(){
  const [navColor,setNavColor] = useState(false);
  
  return <div>
    <Hero/>
    <Approach setNavColor={setNavColor}/>
    <Work setNavColor={setNavColor}/>
    <Footer setNavColor={setNavColor}/>
  </div>
}