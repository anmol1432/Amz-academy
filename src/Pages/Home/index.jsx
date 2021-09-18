import React from 'react'
import Navbar from "../../Components/Navbar/index";
import AlertMessage from "../../Components/AlertMessage/index";
import FloatButton from "../../Components/FloatingButton/index";
import "./index.css";


const Home = () => {
    return (
        <>
            <Navbar className="z-20" />
            <AlertMessage />
            <FloatButton />
            {/* first section */}
            <div id="sect-first">
                <div className=" flex flex-col w-5/12  pt-44 pl-16 ">
                    <h1 className="text-5xl" id="sect-first-text">Prepare for JEE/NEET with Sri Chaitanya Faculty</h1>
                    <h1 className="text-5xl" id="sect-sec-text">Introducing Repeater Batches</h1>
                    <div className="w-8/12">
                        <button className=" bg-purple-700 text-center px-6 py-4 rounded-lg text-white font-semibold w-full">
                            Schedule a free counselling session
                        </button>
                    </div>
                </div>
            </div>
            {/*second section  */}
            <div id="sect-sec" >
                <div className="p-6 flex justify-between">

                    <div className=" flex flex-col w-6/12  py-12  lg:ml-28">
                        <h1 className="text-3xl  font-medium">Live Lessons with our expert <br /> teachers</h1>
                        <p className="font-medium text-xl mt-4">Attend live online classes to learn, revise, <br /> analyse mock tests and prepare for JEE and <br /> NEET with experts</p>
                        <div className="card flex mt-12  items-center">
                            <img src="https://m.media-amazon.com/images/G/31/academy/images/tele-calling-icon.svg" className="h-20" alt="qwerty" />
                            <div className=" text-left ml-9">
                                <h1 className="text-2xl  font-medium">Engaging and Interactive Lessons</h1>
                                <p className=" text-xl text-gray-600 mt-2 ">Learn from experienced faculty to <br /> improve  understanding and retention of concepts</p>
                            </div>
                        </div>
                        <div className="card flex mt-12  items-center">
                            <img src="https://m.media-amazon.com/images/G/31/academy/images/tele-calling-icon.svg" className="h-20" alt="qwerty" />
                            <div className=" text-left ml-9">
                                <h1 className="text-2xl  font-medium">Real Time Doubt Solving</h1>
                                <p className=" text-xl text-gray-600 mt-2 ">Clear your concepts and doubts with <br /> teachers on live chat</p>
                            </div>
                        </div>
                    </div>

                    <div className="" style={{
                        margin: 'auto',
                        height:'62rem'
                    }}>
                        <img src="https://plp-assets.s3-eu-west-1.amazonaws.com/live-courses-banner-8Jun-webp.webp" className="h-4/6 " alt="qwerty" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
