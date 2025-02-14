// import React from 'react'

// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa6";
// import Footer from '../components/Footer';

// const GetInTouch = () => {

//   const contactContent = [
//     { id: 1, icon: <FaLocationDot />, content: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi-110048" },
//     { id: 2, icon: <FaPhoneAlt />, content: "+91-9821118868" },
//     { id: 3, icon: <IoMail />, content: "info@ox-link.in" },
//   ]

//   return (
//     <>
//       {/* For desktop */}
//       <div className='hidden sm:flex w-full min-h-screen pt-40 flex-col'>

//         <div className='flex justify-center'>
//           <div className='w-1/2 flex flex-col'>
//             {contactContent.map((con, index) => {
//               return (
//                 <div key={con.id || index} className='flex flex-col items-start pl-[15vw] mt-8'>
//                   <div className='w-fit bg-blue-800 text-white p-4 rounded-full'>{con.icon}</div>
//                   <h1 className='w-[20vw] text-lg'>{con.content}</h1>
//                 </div>
//               )
//             })}
//           </div>

//           <div className='w-1/2 flex flex-col gap-4'>

//             <h1 className='text-4xl font-semibold'>Get In Touch</h1>

//             <form className='w-fit flex flex-col items-start gap-6 px-8 py-5 border border-zinc-400 rounded' action="">
//               <input className='w-[25vw] outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Name' type="text" />
//               <input className='w-[25vw] outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Email' type="email" />
//               <textarea rows={5} cols={50} placeholder='Enter Message' className='outline-zinc-500 resize-none border border-zinc-400 px-4 py-2'></textarea>
//               <input className='bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-md cursor-pointer' type="submit" value="SUBMIT" />
//             </form>
//           </div>
//         </div>

//         <div className='mt-36'>
//           <Footer />
//         </div>

//       </div>
      
//       {/* For mobile */}
//       <div className='flex sm:hidden w-full min-h-screen pt-20 flex-col'>

//         <div className='flex flex-col items-start'>
//           <div className='flex flex-col'>
//             {contactContent.map((con, index) => {
//               return (
//                 <div key={con.id || index} className='w-full flex flex-col items-start pl-8 mt-8'>
//                   <div className='w-fit bg-blue-800 text-white p-4 rounded-full'>{con.icon}</div>
//                   <h1 className='text-lg'>{con.content}</h1>
//                 </div>
//               )
//             })}
//           </div>

//           <div className='flex flex-col gap-4 mt-12 px-8'>

//             <h1 className='text-4xl font-semibold'>Get In Touch</h1>

//             <form className='w-fit flex flex-col items-start gap-6 px-4 py-5 border border-zinc-400 rounded' action="">
//               <input className='outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Name' type="text" />
//               <input className='outline-zinc-500 px-4 py-2 border border-zinc-400' placeholder='Enter Email' type="email" />
//               <textarea rows={4} cols={30} placeholder='Enter Message' className='outline-zinc-500 resize-none border border-zinc-400 px-4 py-2'></textarea>
//               <input className='bg-blue-800 text-white px-6 py-2 rounded-md' type="submit" value="SUBMIT" />
//             </form>
//           </div>
//         </div>

//         <div className='mt-12'>
//           <Footer />
//         </div>

//       </div>

//     </>
//   )
// }

// export default GetInTouch

import React, { useEffect, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../components/Footer';

const GetInTouch = () => {

    const [loading, setLoading] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);

    const handleLoad = () => {
        setLoading(false);
    };

    useEffect(() => {
        fetch("https://ox-admin.wtmmedia.com/api/company")
            .then(res => res.json())
            .then((data) => {
                setPhoneNumber(data.data[0]?.phoneNumber1 || 'No information available');
                setEmail(data.data[0]?.infoEmail || 'No information available');
                setAddress(data.data[0]?.address || 'No information available');
            });
    }, []);

    return (
        <>
            {/* For desktop */}
            <div className='hidden sm:flex w-full min-h-screen bg-[#DBD9DC] pt-40 flex-col gap-8'>
                <div className='w-full'>
                    <div className='flex justify-evenly px-20'>
                        <div className='flex flex-col gap-2 items-center border border-zinc-400 px-8 py-5 rounded-md shadow-md'>
                            <div className='text-xl text-[#00266c]'><FaPhoneAlt size={24} /></div>
                            <h1 className='text-center text-lg font-semibold'>{`+91 ${phoneNumber}`}</h1>
                        </div>
                        <div className='flex flex-col gap-2 items-center border border-zinc-400 px-8 py-5 rounded-md shadow-md'>
                            <div className='text-xl text-[#00266c]'><IoMail size={24} /></div>
                            <h1 className='text-center text-lg font-semibold'>{email}</h1>
                        </div>
                        <div className='flex flex-col gap-2 items-center border border-zinc-400 px-8 py-5 rounded-md shadow-md'>
                            <div className='text-xl text-[#00266c]'><FaLocationDot size={24} /></div>
                            <h1 className='text-center text-lg font-semibold'>{address}</h1>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center gap-8 px-44'>
                    <div className='relative w-1/2 min-h-[300px] bg-zinc-300 justify-center items-center rounded-md'>
                        {loading && (
                            <div className="spinner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                        <iframe
                            onLoad={handleLoad}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.4372681711775!2d75.58299520947003!3d27.121788661935604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c57f8bcf15d1d%3A0xc2439aca627b8f89!2sOx-link%20electronics%20LLP!5e0!3m2!1sen!2sin!4v1733823855204!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className='w-1/2 min-h-[300px] bg-zinc-300 p-5 rounded-md shadow-md'>
                        <div className='px-12 mb-5'>
                            <h1 className='text-3xl font-semibold'>Contact Us</h1>
                        </div>

                        <form action="" className='flex flex-col gap-5'>
                            <div className='flex justify-between px-12'>
                                <input className='px-4 py-3 outline-none border border-gray-300 rounded-md w-[48%]' type="text" placeholder='Enter your name' />
                                <input className='px-4 py-3 outline-none border border-gray-300 rounded-md w-[48%]' type="email" placeholder='Enter email address' />
                            </div>

                            <div className='flex justify-between px-12'>
                                <input className='px-4 py-3 outline-none border border-gray-300 rounded-md w-[48%]' type="number" placeholder='Enter mobile no.' />
                                <input className='px-4 py-3 outline-none border border-gray-300 rounded-md w-[48%]' type="text" placeholder='Enter your address' />
                            </div>

                            <textarea className='px-4 py-3 mx-12 resize-none outline-none border border-gray-300 rounded-md' rows={5} placeholder='Enter message'></textarea>

                            <div className='w-full px-12'>
                                <input className='bg-black text-white px-8 py-3 rounded-full cursor-pointer' type="submit" value="GET A QUOTE" />
                            </div>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>

            {/* For mobile */}
            <div className='flex sm:hidden w-full min-h-screen bg-[#DBD9DC] pt-20 flex-col gap-6'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 px-6'>
                        <div className='flex flex-col gap-2 items-center border border-zinc-400 px-8 py-5 rounded-md shadow-md'>
                            <div className='text-xl text-[#00266c]'><FaPhoneAlt size={24} /></div>
                            <h1 className='text-center'>`{`+91 ${phoneNumber}`}</h1>
                        </div>
                        <div className='flex flex-col gap-2 items-center border border-zinc-400 px-8 py-5 rounded-md shadow-md'>
                            <div className='text-xl text-[#00266c]'><IoMail size={24} /></div>
                            <h1 className='text-center'>{email}</h1>
                        </div>
                        <div className='flex flex-col gap-2 items-center border border-zinc-400 px-8 py-5 rounded-md shadow-md'>
                            <div className='text-xl text-[#00266c]'><FaLocationDot size={24} /></div>
                            <h1 className='text-center'>{address}</h1>
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-col gap-8 px-6'>
                    <div className='relative w-full min-h-[300px] bg-zinc-300'>
                        {loading && (
                            <div className="spinner absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                        )}
                        <iframe
                            onLoad={handleLoad}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.4372681711775!2d75.58299520947003!3d27.121788661935604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c57f8bcf15d1d%3A0xc2439aca627b8f89!2sOx-link%20electronics%20LLP!5e0!3m2!1sen!2sin!4v1733823855204!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className='min-h-[300px] bg-zinc-300 p-5 rounded-md shadow-md'>
                        <div className='mb-5'>
                            <h1 className='text-3xl font-semibold'>Contact Us</h1>
                        </div>

                        <form action="" className='flex flex-col gap-5'>
                            <input className='px-4 py-3 outline-none border border-gray-300 rounded-md' type="text" placeholder='Enter your name' />
                            <input className='px-4 py-3 outline-none border border-gray-300 rounded-md' type="email" placeholder='Enter email address' />
                            <input className='px-4 py-3 outline-none border border-gray-300 rounded-md' type="number" placeholder='Enter mobile no.' />
                            <input className='px-4 py-3 outline-none border border-gray-300 rounded-md' type="text" placeholder='Enter your address' />

                            <textarea className='px-4 py-3 resize-none outline-none border border-gray-300 rounded-md' rows={5} placeholder='Enter message'></textarea>

                            <div className='w-full'>
                                <input className='bg-black text-white px-8 py-3 rounded-full cursor-pointer' type="submit" value="GET A QUOTE" />
                            </div>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default GetInTouch;
