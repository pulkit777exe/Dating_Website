import { useNavigate } from "react-router";
import { Navbar } from "./navbar";

export function ErrorPage(){
    const navigate = useNavigate();
    function navigateToHome(){
        navigate("/home")
    }
    function navigateToSignUp(){
        navigate("/signup")
    }
    return (
        <div className="max-w-screen">
            <Navbar blackText={true}/>
            <div className="flex justify-around items-center mt-32">

                <div>
                    <h1 className="text-5xl mb-8">
                        404
                    </h1>
                    <p className="text-4xl mb-8">Oops, we can't find a <br /> match for the page <br /> you're looking for.</p>
                    <div className="space-x-4">
                        <button className="text-lg text-white p-3 rounded-full bg-black hover:bg-white hover:text-black transition-all duration-300 shadow-lg" onClick={navigateToHome}>
                        Back to Home
                        </button>
                        <button className="text-lg text-white p-3 rounded-full bg-black hover:bg-white hover:text-black transition-all duration-300 shadow-lg" onClick={navigateToSignUp}>
                        Register Yourself
                        </button>
                    </div>
                </div>
                <div>
                    <img src="https://images.hinge.co/b40bd1b202c3a9cd45778d0692768200e636fd68-659x508.png?w=1920&q=75" alt="Error Hinge Image" className="max-w-xl"/>
                </div>
            </div>
        </div>
    )
}