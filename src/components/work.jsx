

function Work(){
    return(
        <>
         <div className="flex flex-col items-center p-8 max-w-7xl mx-auto mt-24">
            <h1 className="text-2xl max-[427px]:text-xl font-bold tracking-[0.4em] text-white">
                WORK
            </h1>

            <div className="mt-10 w-full grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-2 gap-25  text-white rounded-[30px] px-4 py-6 text-center">
                <div className="text-lg font-semibold  bg-white text-black px-25 py-30  rounded-md ">WORK 1</div>
                <div className="text-lg font-semibold  bg-white text-black px-25 py-30  rounded-md ">WORK 2</div>
                <div className="text-lg font-semibold  bg-white text-black px-25 py-30  rounded-md ">WORK 3</div>
                <div className="text-lg font-semibold  bg-white text-black px-25 py-30  rounded-md ">WORK 4</div>
            </div>
        </div>
        </>
    );
}

export default Work