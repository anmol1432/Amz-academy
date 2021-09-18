import React from 'react'
import "./index.css";

const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow fixed top-0 w-full" role="navigation" >
                <div className="container mx-auto p-5 flex flex-wrap items-center md:flex-no-wrap">
                    <div className="mr-4 md:mr-8 lg:ml-12">
                        <img src="https://m.media-amazon.com/images/G/01/jee-ready/Amazon_Academy_Logo-Violet-1x._TTH_png" classNameName="" width="194" alt="" />
                    </div>

                    <div className="w-full md:w-auto md:flex-grow md:flex md:items-center justify-between">
                        <ul className="flex lg:mr-8 md:border-0">
                            <li id="Link" className="block px-4 py-1 md:p-2 lg:px-4 font-semibold border-purple-800" >
                                Home
                            </li>
                            <li id="Link">
                                <span className="block px-4 py-1 md:p-2 lg:px-4 font-semibold border-purple-800" >Pricing</span>
                            </li>
                        </ul>
                        <ul className="flex lg:w-4/12">
                            <button className=" bg-purple-800 text-center px-6 py-3 rounded-lg text-white font-semibold">
                                Sign Up for Free
                            </button>
                            <button className="text-center px-4 py-3 rounded-lg text-purple-800 font-semibold lg:ml-4" style={{ backgroundColor: '#e7e7ff' }}>
                                Sign in
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
