import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const ProductsContent = () => {
    return (
        <>
            {/* Desktop */}
            <NavLink to="/control-cable" className='hidden sm:flex w-fit flex-col gap-2 border-r border-l border-l-black border-r-black rotate-12 px-10 mr-20 mt-10 overflow-hidden cursor-pointer'>

                <motion.div
                    className='flex justify-center items-center gap-2'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className='product-text font-semibold text-4xl'>01.</h1>
                    <h1 className='product-text font-semibold text-4xl'>Control Cable</h1>
                </motion.div>

                <div className='text-2xl text-center'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        These cables are designed for
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        transmitting control signals in
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        industrial automation and equipment.
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        They are engineered for high
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        flexibility, ensuring stable operation
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        in demanding environments.
                    </motion.p>
                </div>

            </NavLink>

            {/* Mobile */}
            <NavLink to="/control-cable" className='flex sm:hidden w-fit flex-col gap-2 border-r border-l border-l-black border-r-black px-5 mr-20 mt-10'>

                <motion.div
                    className='flex justify-center items-center gap-1'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h1 className='product-text font-semibold text-xs'>01.</h1>
                    <h1 className='product-text font-semibold text-xs'>Control Cable</h1>
                </motion.div>

                <div className='w-[60vw] text-xs text-center'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        These cables are designed for
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        transmitting control signals in
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        industrial automation and equipment.
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        They are engineered for high
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        flexibility, ensuring stable operation
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        in demanding environments.
                    </motion.p>
                </div>

            </NavLink>

        </>
    )
}

export default ProductsContent