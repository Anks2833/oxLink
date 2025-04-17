import React from 'react'
import { motion } from 'framer-motion';

const CableLineAnimation = () => {

  const pathVariants = {
    animate: {
      pathLength: [0, 1],
      transition: {
        pathLength: {
          yoyo: Infinity,
          duration: 4,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <>

      <div className="absolute z-0 w-full h-screen bg-transparent overflow-hidden app">

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 800 7 C 526 112 545 186 270 800"
            stroke="black"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 800 12 C 524 125 550 200 308 800"
            stroke="#cee6ea"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 830 15 C 524 130 580 240 367 800"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 800 14 C 564 135 643 268 392 800"
            stroke="#98aebf"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 800 23 C 601 155 650 273 461 800"
            stroke="#98aebf"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 800 36 C 520 297 722 290 461 838"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 820 36 C 546 295 722 288 480 838"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 830 36 C 574 303 722 288 520 838"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 840 48 C 607 303 739 299 540 838"
            stroke="#f57d42"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 840 62 C 630 299 748 311 540 888"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 850 78 C 684 304 748 311 540 950"
            stroke="#d94776"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 891 91 C 684 304 796 328 540 950"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 910 91 C 826 337 696 299 570 950"
            stroke="white"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 900 91 C 800 292 724 305 600 950"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 1025 139 C 832 293 866 180 685 800"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 1100 139 C 832 293 866 180 650 800"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 1030 124 C 912 314 866 180 720 800"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

        <svg className="absolute sm:top-0 -left-[100vw] sm:left-[45vw]" width="1600" height="1000">
          <motion.path
            d="M 1100 139 C 937 328 866 180 700 800"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
            variants={pathVariants}
            initial="hidden"
            whileInView="animate"
          />
        </svg>

      </div>

    </>
  )
}

export default CableLineAnimation