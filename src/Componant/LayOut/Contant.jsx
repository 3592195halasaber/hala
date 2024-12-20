import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

export default function Contant() {
  return (
    <div className=''>
      <div>
        <h2 className='text-4xl text-[#2c3e50] text-center mt-5 font-bold'>CONTANT SECTION</h2>
        <div className=" flex items-center justify-center m-2 ">

          <div className="h-[4px] w-[80px] bg-black m-2" />
          <i class="fa-solid fa-star m-2 "></i>
          <div className="h-[4px] w-[80px] bg-black m-2" />
        </div>
      </div>
      <form className="flex  flex-col gap-10   w-[50%] p-3 m-auto">
        <div>
          <TextInput  type="text" placeholder="userName" required shadow className=" form-control   border-0  border-bottom"/>
        </div>
        <div>
          <TextInput  type="number" placeholder="userage" required shadow  className=" form-control   border-0  border-bottom"/>
        </div>
        <div>
          <TextInput  type="email" placeholder="UserEmail" required shadow  className=" form-control   border-0  border-bottom"/>
        </div>
        <div>
          <TextInput  type="passwerd" placeholder="UserPasswerd" required shadow  className=" form-control   border-0  border-bottom"/>
        </div>


        <Button type="submit" className='bg-[#1abc9c] w-1/3'>Send Massege</Button>
      </form>
    </div>
  )
}
