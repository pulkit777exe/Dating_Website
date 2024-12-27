export function Navbar(){
    return <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[70px] w-full py-2 px-10 bg-white/10 backdrop-blur-md rounded">
        <div className="flex gap-x-10" id="pagelinks">
            <ul className="flex justify-center items-center px-20 -translate-x-5">
                <li className="px-5 ">Mission</li>
                <li className="px-5 ">Carrers</li>
                <li className="px-5 ">Labs</li>
            </ul>
        </div>
        <div id="logo" className="flex items-center justify-center -translate-x-20 sm:w-full md:w-full lg:w-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Hinge_Logo.png" alt="Hinge Logo" width={100} className="min-h-[60px]"/>
        </div>
        <div id="impact-page">
            <ul className="px-20 flex gap-x-4">
                <li className="">Impact</li>
            </ul>
        </div>
    </div>
}