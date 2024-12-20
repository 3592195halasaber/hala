import React from 'react'

export default function Footer() {
  return (

    <div>
      <div className="row flex bg-[#2c3e50]">
        <div className=" w-1/3 text-center p-10">
          <h3 className=' text-white font-bold  text-2xl p-2'>LOCATION</h3>

          <p className='text-white '>2215 John Daniel Drive</p>
          <p className='text-white'>Clark, MO 65243</p>

        </div>
        <div className="w-1/3 text-center  p-10">

          <h3 className=' text-white font-bold  text-2xl p-2'>AROUND THE WEB</h3>
          <div className='flex  gap-5 justify-center p-2'>
            <i className='fab fa-facebook  text-white  border-2 p-2 rounded-full'></i>
            <i className='fab fa-twitter text-white  border-2 p-2 rounded-full'></i>
            <i className='fab fa-linkedin-in text-white  border-2 p-2 rounded-full'></i>
            <i className='fas fa-globe text-white  border-2 p-2 rounded-full'></i>
          </div>

        </div>
        <div className=" w-1/3 text-center p-10">
          <h3 className=' text-white font-bold  text-2xl p-2'>ABOUT FREELANCER</h3>

          <p className='text-white '>Freelance is a free to use, licensed Bootstrap theme created by Route</p>


        </div>
      </div>
      <div className='bg-slate-800 w-100 p-5 text-white'>
        <p className='text-center'>Copyright © Your Website 2021</p>
      </div>
    </div>


  )
}

