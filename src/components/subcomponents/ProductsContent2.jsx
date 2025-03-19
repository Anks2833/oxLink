import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ProductsContent2 = () => {
  return (
    <>
      {/* Desktop */}
      <NavLink
        to="/bus-cable"
        className="hidden lg:flex w-fit flex-col gap-2 border-r border-l border-l-black border-r-black rotate-12 px-10 mr-20 mt-10 overflow-hidden cursor-pointer"
      >
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="product-text font-semibold text-4xl">03.</h1>
          <h1 className="product-text font-semibold text-4xl">Bus Cables</h1>
        </motion.div>

        <div className="text-2xl text-center">
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

      {/* Tablet */}
      <div className="hidden md:flex lg:hidden w-full flex-col gap-4 px-8 mt-36 mb-16 max-w-2xl mx-auto">
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="product-text font-semibold text-3xl">03.</h1>
          <h1 className="product-text font-semibold text-3xl">Bus Cables</h1>
        </motion.div>

        <div className="text-xl text-center px-6">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
          >
            These cables support reliable data transmission in various
            applications, offering protection against electrical interference
            and voltage fluctuations.
          </motion.p>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-2"
          >
            They are ideal for use in communication and instrumentation systems.
          </motion.p>
        </div>

        <NavLink to="/bus-cable" className="w-full flex justify-center mt-2">
          <p className="text-[#f99938] underline text-xl hover:text-[#e07b13] transition-colors">
            View More
          </p>
        </NavLink>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden lg:hidden w-fit flex-col gap-2 px-5 mt-32 mb-10">
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="product-text font-semibold text-2xl">03.</h1>
          <h1 className="product-text font-semibold text-2xl">Bus Cables</h1>
        </motion.div>

        <div className="w-[100vw] text-lg text-center">
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

        <NavLink to="/bus-cable" className="w-full flex justify-center">
          <p className="text-[#f99938] underline text-lg">View More</p>
        </NavLink>
      </div>
    </>
  );
};

export default ProductsContent2;
