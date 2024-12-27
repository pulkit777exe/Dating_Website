import { Navbar } from "./navbar";

export function Hero(){
    return <div>
        <Navbar/>
    <div className="text-6xl font-bold flex-grow">
        <img src="https://images.hinge.co/489574db9ccfa50bf87e440f8a3be065d958a97f-2304x1536.jpg?w=1920&q=75" alt="" className="flex justify-center items-center w-full h-full"/>
        <div className="flex text-white absolute top-[400px] left-[100px]">
        The dating app <br/>
        designed to be deleted
        <div className="text-lg relative top-[55px]">
            TM
        </div>
        <button className="absolute top-40 text-xl rounded-full bg-black text-white w-[100px] h-[40px] hover:bg-white hover:text-black duration-500" >Sign In</button>
        </div>
    </div>
</div>
    
}