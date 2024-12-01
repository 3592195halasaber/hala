import React from 'react'
import img from '../../assets/img.svg'
export default function Home() {
  return (
    <div>
          <div className='bg-[#1abc9c] '>

<img src={img} alt="" className='w-52 m-auto pt-16' />


<h2 className="text-white font-bold m-auto text-center p-5 text-5xl ">start Framework</h2>

<div className=" flex items-center justify-center mb-2 ">

  <div className="h-[4px] w-[80px] bg-white m-2" />
  <i class="fa-solid fa-star text-white m-2 "></i>
  <div className="h-[4px] w-[80px] bg-white m-2" />
</div>
<div className='flex align-middle justify-center pb-20  text-white text-xs '>Graphic Artist - Web Designer - Illustrator</div>

</div>
    </div>
  )
}
