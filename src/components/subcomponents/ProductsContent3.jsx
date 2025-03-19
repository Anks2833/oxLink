import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const ProductsContent3 = () => {
  return (
    <>
      {/* Desktop */}
      <NavLink
        to="/lan-cable"
        className="hidden lg:flex w-fit flex-col gap-2 border-r border-l border-l-black border-r-black rotate-12 px-10 mr-20 mt-10 overflow-hidden cursor-pointer"
      >
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="product-text font-semibold text-4xl">04.</h1>
          <h1 className="product-text font-semibold text-4xl">LAN Cables</h1>
        </motion.div>

        <div className="text-2xl text-center">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Local Area Network (LAN) cables
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            enable high-speed data transmission
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            and are essential for connecting
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            network devices. They support
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ethernet standards, ensuring
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            efficient and reliable network
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            performance.
          </motion.p>
        </div>
      </NavLink>

      {/* Tablet */}
      <div className="hidden md:flex lg:hidden w-full flex-col gap-4 px-8 my-24 max-w-2xl mx-auto">
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="product-text font-semibold text-3xl">04.</h1>
          <h1 className="product-text font-semibold text-3xl">LAN Cables</h1>
        </motion.div>

        <div className="text-xl text-center px-6">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-2"
          >
            Local Area Network (LAN) cables enable high-speed data transmission
            and are essential for connecting network devices.
          </motion.p>

          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-2"
          >
            They support Ethernet standards, ensuring efficient and reliable
            network performance.
          </motion.p>
        </div>

        <NavLink to="/lan-cable" className="w-full flex justify-center mt-2">
          <p className="text-[#f99938] underline text-xl hover:text-[#e07b13] transition-colors">
            View More
          </p>
        </NavLink>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden lg:hidden w-fit flex-col gap-2 px-5 my-20">
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h1 className="product-text font-semibold text-2xl">04.</h1>
          <h1 className="product-text font-semibold text-2xl">LAN Cables</h1>
        </motion.div>

        <div className="w-[100vw] text-lg text-center">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Local Area Network (LAN) cables
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            enable high-speed data transmission
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            and are essential for connecting
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            network devices. They support
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ethernet standards, ensuring
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            efficient and reliable network
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            performance.
          </motion.p>
        </div>

        <NavLink to="/lan-cable" className="w-full flex justify-center">
          <p className="text-[#f99938] underline text-lg">View More</p>
        </NavLink>
      </div>
    </>
  );
};

export default ProductsContent3;
