import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const ProductsContent4 = () => {
    return (
        <>
            {/* Desktop */}
            <NavLink to="/solar-cable" className='hidden sm:flex w-fit flex-col gap-2 border-r border-l border-l-black border-r-black rotate-12 px-10 mr-20 mt-10 overflow-hidden cursor-pointer'>

                <motion.div
                    className='solar-cables flex justify-center items-center gap-2'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h1 className='product-text font-semibold text-4xl'>05.</h1>
                    <h1 className='product-text font-semibold text-4xl'>Solar Cables</h1>
                </motion.div>

                <div className='text-2xl text-center'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        These cables support reliable data
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        transmission in various applications,
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        offering protection against electrical
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        interference and voltage fluctuations.
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        They are ideal for use in
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        communication and instrumentation
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        systems.
                    </motion.p>
                </div>

            </NavLink>

            {/* Mobile */}
            <NavLink to="/product/solar-cable" className='flex sm:hidden w-fit flex-col gap-2 px-5 my-20'>

                <motion.div
                    className='solar-cables flex justify-center items-center gap-2'
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h1 className='product-text font-semibold text-2xl'>05.</h1>
                    <h1 className='product-text font-semibold text-2xl'>Solar Cables</h1>
                </motion.div>

                <div className='w-[100vw] text-lg text-center'>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        These cables support reliable data
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        transmission in various applications,
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        offering protection against electrical
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        interference and voltage fluctuations.
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        They are ideal for use in
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                    >
                        communication and instrumentation
                    </motion.p>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        systems.
                    </motion.p>
                </div>

            </NavLink>

        </>
    )
}

export default ProductsContent4