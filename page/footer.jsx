export function Footer(){
    return <div className="bg-[#1a1a1a] text-[#fffefd] ">
        <div className="flex  ml-[300px] mr-[300px]">
            <div className="">
                <div className="text-2xl mt-[40px]">Press</div>
                <div className="text-6xl mt-[30px]">Hinge in the headlines.</div>
                <div className="text-xl mt-[30px]">See our press releases,media coverage,and press kits.</div>
                <button className=" mt-[40px] rounded-2xl bg-white min-w-[250px] text-black text-2xl">
                    Visit our newsroom
                </button>
        </div>
        </div>
        <div className="flex justify-around">
            <div className="ml-[300px] mt-[200px] mr-[300px]">
                <div className="mb-[20px]">
                    <img src="https://hinge.co/_next/image?url=%2Flogos%2Fhinge.gif&w=96&q=75" alt="Hinge Logo" width={"100px"}/>
                </div>
            <div className="flex gap-[100px]">
                <div className="">
                    <h3 className="text-2xl bold">Index</h3>
                    <li>Mission</li>
                        <li>Careers</li>
                        <li>Labs</li>
                        <li>Press</li>
                        <li>Success Stories</li>
                        <li>Contact</li>
                </div>
                <div className="">
                        <h3 className="text-2xl bold">Resources</h3>
                        <li>Safe Dating Tips</li>
                        <li>FAQ</li>
                        <li>Trust & Safety</li>
                </div>
                <div className="">
                        <h3 className="text-2xl bold">Legal</h3>
                        <li>Security</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <li>Cookie Policy</li>
                        <li>Consumer Health Data
                            Privacy Policy
                        </li>
                        <li>Your Privacy Choices</li>
                        <li>Colorado Safety Policy 
                            Information</li>
                </div>
                </div>
            </div>
        </div>
    </div>
} 