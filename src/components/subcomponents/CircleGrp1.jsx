import React from 'react'
import { motion } from 'framer-motion'

const CircleGrp1 = () => {
    return (
        <>

            {/* Desktop */}
            <div className='hidden sm:flex w-fit mr-20 rotate-12 flex-col gap-5 origin-center'>

                <div className='flex gap-8'>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                    ></motion.div>
                </div>

                <div className='flex gap-8'>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-transparent rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2.5 }}
                    ></motion.div>
                </div>

                <div className='flex gap-8'>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 3 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-transparent rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 3.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 4 }}
                    ></motion.div>
                </div>

                <div className='flex gap-8'>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 4.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 5 }}
                    ></motion.div>
                    <motion.div
                        className='w-14 h-14 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 5.5 }}
                    ></motion.div>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-fit mr-20 flex-col gap-3 origin-center'>

                <div className='flex gap-3'>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                    ></motion.div>
                </div>

                <div className='flex gap-3'>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-transparent rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 2.5 }}
                    ></motion.div>
                </div>

                <div className='flex gap-3'>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 3 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-transparent rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 3.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 4 }}
                    ></motion.div>
                </div>

                <div className='flex gap-3'>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 4.5 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 5 }}
                    ></motion.div>
                    <motion.div
                        className='w-5 h-5 bg-[#fab03f] rounded-full'
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 5.5 }}
                    ></motion.div>
                </div>

            </div>

        </>
    )
}

export default CircleGrp1