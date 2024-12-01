import React from 'react'
import { Link } from 'react-router'
import img from '../../assets/img.svg'
import line from './About.module.css'

import "@fortawesome/fontawesome-free"
export default function About() {
  return (
    <div className='bg-[#1abc9c]  '>




      <h2 className="text-white font-bold m-auto text-center  text-4xl pt-52">ABOUT COMPONENT</h2>

      <div className=" flex items-center justify-center mb-2 ">

        <div className="h-[4px] w-[80px] bg-white m-2" />
        <i class="fa-solid fa-star text-white m-2 "></i>
        <div className="h-[4px] w-[80px] bg-white m-2" />
      </div>
      <div className='flex align-middle justify-center pb-20 m-auto text-white text-xs max-w-5xl  '>
        <div className="row flex mx-5">
          <div className="w-1/2 text-sm me-3 mb-20">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>

          </div>
          <div className="w-1/2 text-sm ">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>



      </div>

    </div>
  )
}
