import React, { useState } from 'react'
import first from '../../assets/poert1.png'
import sacend from '../../assets/port2.png'
import third from '../../assets/port3.png'
import { Button,Modal } from "flowbite-react";



export default function Portfolio() {

  const [openModal, setOpenModal] = useState(true);
  const [image, setimage] = useState([
    { path: first, id: 1 },
    { path: sacend, id: 2 },
    { path: third, id: 3 },
    { path: first, id: 4 },
    { path: sacend, id: 5 },
    { path: third, id: 6 },
  ])

  return (
    <div>
      <h2 className='text-4xl text-[#2c3e50] text-center mt-5 font-bold'>PORTFOLIO COMPONENT</h2>
      <div className=" flex items-center justify-center m-2 ">

        <div className="h-[4px] w-[80px] bg-black m-2" />
        <i class="fa-solid fa-star m-2 "></i>
        <div className="h-[4px] w-[80px] bg-black m-2" />

      </div>
      <div >

        <div className="conteiner">
          <div className='flex flex-wrap gap-10'>
            {image.map((ele) => {
              return <>

                <div onClick={() => setOpenModal(ele.id)}
                  className="w-[30%]  relative  cursor-pointer">
                  <img src={ele.path} className=' rounded-md ' alt="" />

                  <div className='rounded-md absolute w-full h-full inset-0 bg-[#1abc9ce6] flex justify-center items-center opacity-0
                  hover:opacity-100 transition-all duration-700'>
                    <i className='fa-solid fa-plus text-6xl text-white '></i>
                  </div>
                </div>

              </>


            })}
          </div >

        </div>
      </div>

      {image.map((ele) => {
        return (<Modal dismissible show={openModal === ele.id} onClose={() => setOpenModal(false)}>
          <img src={ele.path} alt="" />

        </Modal>)
      })}
    </div>
  )
}
