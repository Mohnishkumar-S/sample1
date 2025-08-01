

function Navbar(){
    return(
        <>
        <header className="flex justify-between items-center p-8 max-w-7xl mx-auto">
            <h1 className="text-5xl  max-[427px]:text-4xl font-bold  ">Launchflow</h1>
            <nav className="hidden md:flex gap-x-6">
                <a href="" className="hover:text-gray-300 transition duration-300 hover:scale-105">HOME</a>
                <a href="" className="hover:text-gray-300 transition duration-300 hover:scale-105 ">ABOUT</a>
                <a href="" className="hover:text-gray-300 transition duration-300 hover:scale-105 ">CONTACT</a>
            </nav>
            <button className=" max-[343px]:hidden  bg-white text-black px-4 py-2   rounded-md hover:scale-110 cursor-pointer transition duration-500">SIGN IN </button>

        </header>
        </>
                  
                
           

    );
}

export default Navbar