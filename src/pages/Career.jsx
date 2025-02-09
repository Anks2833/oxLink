import React from 'react'
import Footer from '../components/Footer'

const Career = () => {
    return (
        <>
            {/* For desktop */}
            <div className='hidden sm:flex w-full min-h-screen flex-col pt-32'>

                <div className='w-full flex justify-center items-start gap-32'>
                    <div className='flex flex-col justify-center gap-14'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold'>Join Our Team</h1>
                            <div className='flex flex-col'>
                                <p className='text-lg'>At OX-LINK ELECTRONICS LLP, we value talent and innovation. If you’re</p>
                                <p className='text-lg'>passionate about shaping the future of electronics and want to work with a</p>
                                <p className='text-lg'>dedicated team, we invite you to apply for a position at our company.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>Why Work With Us?</h1>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-lg ml-6'>- Opportunities for professional growth</li>
                                <li className='text-lg ml-6'>- Dynamic and inclusive work environment</li>
                                <li className='text-lg ml-6'>- Competitive salaries and benefits</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <h1 className='text-4xl font-semibold'>Apply Now</h1>

                        <form className='flex flex-col items-start gap-5 bg-zinc-200 px-8 py-5 rounded-xl shadow-lg border border-zinc-400' action="">
                            <div className='w-full flex flex-col gap-2'>
                                <h1>Full Name:</h1>
                                <input className='outline-blue-800 px-3 py-2 rounded border border-zinc-300' type="text" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Email Address:</h1>
                                <input className='outline-blue-800 px-3 py-2 rounded border border-zinc-300' type="email" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Phone Number:</h1>
                                <input className='outline-blue-800 px-3 py-2 rounded border border-zinc-300' type="number" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Position Applied For:</h1>
                                <input className='outline-blue-800 px-3 py-2 rounded border border-zinc-300' type="text" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Upload Your Resume:</h1>
                                <input className='outline-blue-800 px-3 py-2 rounded border border-zinc-300' type="file" name="" id="" />
                            </div>

                            <input className='mt-3 bg-blue-600 hover:bg-blue-800 text-white p-3 rounded cursor-pointer' type="submit" value="Submit Application" />
                        </form>

                    </div>
                </div>

                <Footer />

            </div>

            {/* For mobile */}
            <div className='flex sm:hidden w-full min-h-screen flex-col pt-20'>

                <div className='w-full flex flex-col items-center gap-20'>
                    <div className='flex flex-col justify-center gap-12 px-6'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='text-3xl font-semibold'>Join Our Team</h1>
                            <div className='flex flex-col'>
                                <p className='text-lg'>At OX-LINK ELECTRONICS LLP, we value talent and innovation. If you’re</p>
                                <p className='text-lg'>passionate about shaping the future of electronics and want to work with a</p>
                                <p className='text-lg'>dedicated team, we invite you to apply for a position at our company.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-semibold'>Why Work With Us?</h1>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-lg ml-2'>- Opportunities for professional growth</li>
                                <li className='text-lg ml-2'>- Dynamic and inclusive work environment</li>
                                <li className='text-lg ml-2'>- Competitive salaries and benefits</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col items-start gap-5 px-6'>
                        <h1 className='text-4xl font-semibold'>Apply Now</h1>

                        <form className='flex flex-col items-start gap-5' action="">
                            <div className='w-full flex flex-col gap-2'>
                                <h1>Full Name:</h1>
                                <input className='outline-none px-3 py-2 rounded border border-black' type="text" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Email Address:</h1>
                                <input className='outline-none px-3 py-2 rounded border border-black' type="email" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Phone Number:</h1>
                                <input className='outline-none px-3 py-2 rounded border border-black' type="number" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Position Applied For:</h1>
                                <input className='outline-none px-3 py-2 rounded border border-black' type="text" name="" id="" />
                            </div>

                            <div className='w-full flex flex-col gap-2'>
                                <h1>Upload Your Resume:</h1>
                                <input className='outline-none px-3 py-2 rounded border border-black' type="file" name="" id="" />
                            </div>

                            <input className='mt-3 bg-blue-600 text-white p-3 rounded cursor-pointer' type="submit" value="Submit Application" />
                        </form>

                    </div>
                </div>

                <Footer />

            </div>

        </>
    )
}

export default Career