import React from 'react'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import About from '../LayOut/About'
import Portfolio from '../LayOut/Portfolio'
import Contant from '../LayOut/Contant'

export default function NavBar() {
  return (
    <>


      <nav class="bg-cyan-950 navbar navbar-expand-lg  position-fixed ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">

            <Link to={"Home"}> <h1 className=' text-white font-extrabold text-3xl  p-8'>START FREAMWORK</h1></Link>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className='flex justify-end me-5 p-4  items-center'>
              <li className='ps-3 pe-3 m-2 text-white font-bold '><NavLink to="About" >ABOUT</NavLink></li>
              <li className='ps-3 pe-3 m-2 text-white font-bold '><NavLink to="Portfolio">PORYFOLIO</NavLink></li>
              <li className='ps-3 pe-3 m-2 text-white font-bold '><NavLink to="Contant"> CONTANT</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>


    </>
    // <div className='bg-cyan-950 flex justify-between  '><Link  to={"Home"}> <h1 className=' text-white font-extrabold text-3xl  p-10'>START FREAMWORK</h1></Link>
    // <ul className='flex justify-end me-5 p-4  items-center'>
    //   <li className='ps-3 pe-3 m-2 text-white font-bold '><NavLink to="About" >ABOUT</NavLink></li>
    //   <li className='ps-3 pe-3 m-2 text-white font-bold '><NavLink to="Portfolio">PORYFOLIO</NavLink></li>
    //   <li className='ps-3 pe-3 m-2 text-white font-bold '><NavLink to="Contant"> CONTANT</NavLink></li>
    // </ul>

    // </div>
  )
}

