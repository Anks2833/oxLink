import React from 'react'

import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../components/Footer';

const GetInTouch = () => {

  const contactContent = [
    { id: 1, icon: <FaLocationDot />, content: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi-110048" },
    { id: 2, icon: <FaPhoneAlt />, content: "+91-9821118868" },
    { id: 3, icon: <IoMail />, content: "info@ox-link.in" },
  ]

  return (
    <>
      {/* For desktop */}
      <div className='hidden sm:flex w-full min-h-screen pt-40 flex-col'>

        <div className='flex justify-center'>
          <div className='w-1/2 flex flex-col'>
            {contactContent.map((con, index) => {
              return (
                <div key={con.id || index} className='flex flex-col items-start pl-[15vw] mt-8'>
                  <div className='w-fit bg-blue-800 text-white p-4 rounded-full'>{con.icon}</div>
                  <h1 className='w-[20vw] text-lg'>{con.content}</h1>
                </div>
              )
            })}
          </div>

          <div className='w-1/2 flex flex-col gap-4'>

            <h1 className='text-4xl font-semibold'>Get In Touch</h1>

            <form className='w-fit flex flex-col items-start gap-6 px-8 py-5 border border-zinc-400 rounded' action="">
              <input className='w-[25vw] outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Name' type="text" />
              <input className='w-[25vw] outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Email' type="email" />
              <textarea rows={5} cols={50} placeholder='Enter Message' className='outline-zinc-500 resize-none border border-zinc-400 px-4 py-2'></textarea>
              <input className='bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md cursor-pointer' type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>

        <div className='mt-36'>
          <Footer />
        </div>

      </div>
      
      {/* For mobile */}
      <div className='flex sm:hidden w-full min-h-screen pt-20 flex-col'>

        <div className='flex flex-col items-start'>
          <div className='flex flex-col'>
            {contactContent.map((con, index) => {
              return (
                <div key={con.id || index} className='w-full flex flex-col items-start pl-8 mt-8'>
                  <div className='w-fit bg-blue-800 text-white p-4 rounded-full'>{con.icon}</div>
                  <h1 className='text-lg'>{con.content}</h1>
                </div>
              )
            })}
          </div>

          <div className='flex flex-col gap-4 mt-12 px-8'>

            <h1 className='text-4xl font-semibold'>Get In Touch</h1>

            <form className='w-fit flex flex-col items-start gap-6 px-4 py-5 border border-zinc-400 rounded' action="">
              <input className='outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Name' type="text" />
              <input className='outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Email' type="email" />
              <textarea rows={4} cols={30} placeholder='Enter Message' className='outline-zinc-500 resize-none border border-zinc-400 px-4 py-2'></textarea>
              <input className='bg-blue-800 text-white px-6 py-2 rounded-md' type="submit" value="SUBMIT" />
            </form>
          </div>
        </div>

        <div className='mt-12'>
          <Footer />
        </div>

      </div>

    </>
  )
}

export default GetInTouch