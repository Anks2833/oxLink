import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const ProductsContent5 = () => {
    return (
        <>

            <NavLink to="/product/drag-energy-chain-cable" className='hidden sm:flex w-fit flex-col gap-2 border-l border-l-black rotate-12 px-10 mr-20 mt-10 overflow-hidden cursor-pointer'>

                <motion.div
                    className='flex justify-center items-center gap-2'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h1 className='product-text font-semibold text-4xl'>06.</h1>
                    <h1 className='product-text font-semibold text-4xl'>Drag/Energy Chain Cables</h1>
                </motion.div>

                <div className='text-2xl text-center'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        These highly flexible cables are
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        designed for continuous flexing
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        applications in energy chains. They
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        provide reliable performance in
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        dynamic and automated systems
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        where constant movement is
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        required.
                    </motion.p>
                </div>

            </NavLink>

            <NavLink to="/product/drag-energy-chain-cable" className='flex sm:hidden w-fit flex-col gap-2 border-l border-l-black px-5 mr-20 mt-10'>

                <motion.div
                    className='flex justify-center items-center gap-2'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h1 className='product-text font-semibold text-xs'>06.</h1>
                    <h1 className='product-text font-semibold text-xs'>Drag/Energy Chain Cables</h1>
                </motion.div>

                <div className='w-[60vw] text-xs text-center'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        These highly flexible cables are
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        designed for continuous flexing
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        applications in energy chains. They
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        provide reliable performance in
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        dynamic and automated systems
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        where constant movement is
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        required.
                    </motion.p>
                </div>

            </NavLink>

        </>
    )
}

export default ProductsContent5