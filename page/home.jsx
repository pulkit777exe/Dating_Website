import { Approach } from "../components/approach";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Work } from "../components/work";

export function Home(){
    return (
        <>
            <Hero/>
            <Approach/>
            <Work/>
            <Footer/>
        </>
    )
}