

function Hero(){
    return(
        <>

        <div className=" flex flex-col justify-center items-center p-4 sm:p-8 max-w-7xl mx-auto  mt-10 text-center">
            <div className="animate-[slideDown_2s_linear_0.8]">
                <div className="text-6xl sm:text-7xl md:text-9xl font-bold max-[427px]:text-5xl ">
                <p>CREATIVE <br />PORTFOLIO</p>
            </div>
            </div>
            

            <p className="text-base sm:text-lg md:text-xl mt-4 max-w-md">
                A platform built to help students craft
                visually stunning, personalized portfolios  
                that impress mentors, recruiters, and clients.
            </p>    
        </div>


        <div className=" flex flex-col md:flex-row justify-between items-center p-8 max-w-7xl mx-auto ml-20 mr-20 gap-y-5 ">
            <a href="" className=" bg-white text-black px-4 py-2   rounded-md hover:scale-110 cursor-pointer transition duration-500">START YOURS</a>
            <a href="" className=" bg-white text-black px-4 py-2   rounded-md hover:scale-110 cursor-pointer transition duration-500">SEE EXAMPLE</a>
            <a href="" className=" bg-white text-black px-4 py-2   rounded-md hover:scale-110 cursor-pointer transition duration-500">SHOW MORE</a>
            <a href="" className=" bg-white text-black px-4 py-2   rounded-md hover:scale-110 cursor-pointer transition duration-500">BUILD MORE</a>
            

        </div>

        </>

        
    );

}

export default Hero