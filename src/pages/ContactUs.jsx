import React, { useEffect, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../components/Footer';
import "../styles/contact.css"

const ContactUs = () => {

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
                    <div className='address-container flex justify-evenly px-20'>
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

                <div className='form-container flex justify-center gap-8 px-44'>
                    <div className='google-map relative w-1/2 min-h-[300px] bg-zinc-300 justify-center items-center rounded-md'>
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

                    <div className='form w-1/2 min-h-[300px] bg-zinc-300 p-5 rounded-md shadow-md'>
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

export default ContactUs;
