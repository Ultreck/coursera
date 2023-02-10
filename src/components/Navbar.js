import React from 'react'
import {FaBars, FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="text w-full bg-white h-24 md:pl-16 py-5 border">
                  <div className="text flex w-full">
                        <div className="text flex lg:hidden w-full">
                              <span className="text-thin ml-5"><FaBars className='h-full text-slate-600 text-4xl font-normal'/></span>
                              <div className="text-blue-800 text-5xl font-bold w-3/4 text-center ml-3">Coursera</div>
                              <div className="text translate-x-14 text-2xl px-5"><FaSearch className='h-full text'/></div>
                            
                        </div>
                        <div className="text-blue-800 text-4xl font-bold hidden lg:flex">
                              Coursera
                        </div>
                        <div className="text  ml-10">
                              <button className="text-center h-full w-full px-6 rounded bg-blue-800 text-white font-bold text-lg py-3 hidden lg:flex">Explore <span className="text rotate-90 ml-2 mt-1">{">"}</span>
                              </button>
                        </div>
                        <div className="text ml-4 border w-1/3 rounded-r hidden lg:flex">
                              <input type="search" className="text border border-gray-700 h-full px-6 w-full outline-none" placeholder='What do you want to learn?'/>
                              <button className="text-white text-xl w-16 bg-blue-800 px-5 rounded-r"><FaSearch/></button>
                        </div>
                        <div className="text hidden lg:flex ml-10">
                              <ul className="text-lg flex gap-5">
                                    <a href="##" className="text hover:bg-slate-100 rounded-t px-2">
                                           <li className="text flex my-3 ">Online Degrees <span className="text rotate-90 ml-2">{">"}</span></li>
                                    </a>
                                    <a href="##" className="text">
                                           <li className="text flex  my-3  hover:underline hover:text-blue-700">Find your New Career</li>
                                    </a>
                                    <a href="##" className="text">
                                           <li className="text flex  my-3  hover:underline hover:text-blue-700">For Enterprise</li>
                                    </a>
                                    <a href="##" className="text">
                                           <li className="text flex  my-3  hover:underline hover:text-blue-700">For Universities</li>
                                    </a>
                                    <a href="##" className="text">
                                           <li className="text-blue-700 flex  my-3  hover:underline hover:text-blue-700">Log In</li>
                                    </a>
                              </ul>
                        </div>
                        <div className="text  ml-4">
                              <button className="text-center h-full w-full px-1 rounded bg-blue-800 text-white font-bold text-lg py-3 hidden lg:flex">Join for free
                              </button>
                        </div>
                  </div>
                 
            </div>
    </div>
  )
}

export default Navbar