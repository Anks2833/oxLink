import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const LineAnimation = () => {
  const svgRef1 = useRef(null);
  const svgRef2 = useRef(null);
  const svgRef3 = useRef(null);
  const svgRef4 = useRef(null);
  const svgRef5 = useRef(null);
  const svgRef6 = useRef(null);
  const svgRef7 = useRef(null);
  const svgRef8 = useRef(null);
  const svgRef9 = useRef(null);
  const svgRef10 = useRef(null);
  const svgRef11 = useRef(null);
  const svgRef12 = useRef(null);
  const svgRef13 = useRef(null);
  const svgRef14 = useRef(null);
  const svgRef15 = useRef(null);
  const svgRef16 = useRef(null);
  const svgRef17 = useRef(null);
  const svgRef18 = useRef(null);
  const svgRef19 = useRef(null);

  const svgRef1Mob = useRef(null);
  const svgRef2Mob = useRef(null);
  const svgRef3Mob = useRef(null);
  const svgRef4Mob = useRef(null);
  const svgRef5Mob = useRef(null);
  const svgRef6Mob = useRef(null);
  const svgRef7Mob = useRef(null);
  const svgRef8Mob = useRef(null);
  const svgRef9Mob = useRef(null);
  const svgRef10Mob = useRef(null);
  const svgRef11Mob = useRef(null);
  const svgRef12Mob = useRef(null);
  const svgRef13Mob = useRef(null);
  const svgRef14Mob = useRef(null);
  const svgRef15Mob = useRef(null);
  const svgRef16Mob = useRef(null);
  const svgRef17Mob = useRef(null);
  const svgRef18Mob = useRef(null);
  const svgRef19Mob = useRef(null);

  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "+=0",
      end: "+=3100",
      pin: true,
      scrub: true,
      onEnter: () => gsap.to(containerRef.current, { opacity: 1 }),
      onLeave: () => gsap.to(containerRef.current, { opacity: 0 }),
      onEnterBack: () => gsap.to(containerRef.current, { opacity: 1 }),
      onLeaveBack: () => gsap.to(containerRef.current, { opacity: 0 }),
  });

    // Animation for path 1
    const path1 = svgRef1.current.querySelector("path");
    const length1 = path1.getTotalLength();

    gsap.fromTo(
      path1,
      {
        strokeDasharray: length1,
        strokeDashoffset: length1,
      },
      {
        strokeDashoffset: 0,
        duration: 3,
        scrollTrigger: {
          trigger: svgRef1.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 2
    const path2 = svgRef2.current.querySelector("path");
    const length2 = path2.getTotalLength();
    gsap.fromTo(
      path2,
      {
        strokeDasharray: length2,
        strokeDashoffset: length2,
      },
      {
        strokeDashoffset: 0,
        duration: 4,
        scrollTrigger: {
          trigger: svgRef2.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 3
    const path3 = svgRef3.current.querySelector("path");
    const length3 = path3.getTotalLength();
    gsap.fromTo(
      path3,
      {
        strokeDasharray: length3,
        strokeDashoffset: length3,
      },
      {
        strokeDashoffset: 0,
        duration: 5,
        scrollTrigger: {
          trigger: svgRef3.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 4
    const path4 = svgRef4.current.querySelector("path");
    const length4 = path4.getTotalLength();
    gsap.fromTo(
      path4,
      {
        strokeDasharray: length4,
        strokeDashoffset: length4,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef4.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 5
    const path5 = svgRef5.current.querySelector("path");
    const length5 = path5.getTotalLength();
    gsap.fromTo(
      path5,
      {
        strokeDasharray: length5,
        strokeDashoffset: length5,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef5.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 6
    const path6 = svgRef6.current.querySelector("path");
    const length6 = path6.getTotalLength();
    gsap.fromTo(
      path6,
      {
        strokeDasharray: length6,
        strokeDashoffset: length6,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef6.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );


    // Animation for path 7
    const path7 = svgRef7.current.querySelector("path");
    const length7 = path7.getTotalLength();
    gsap.fromTo(
      path7,
      {
        strokeDasharray: length7,
        strokeDashoffset: length7,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef7.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 8
    const path8 = svgRef8.current.querySelector("path");
    const length8 = path8.getTotalLength();
    gsap.fromTo(
      path8,
      {
        strokeDasharray: length8,
        strokeDashoffset: length8,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef8.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 9
    const path9 = svgRef9.current.querySelector("path");
    const length9 = path9.getTotalLength();
    gsap.fromTo(
      path9,
      {
        strokeDasharray: length9,
        strokeDashoffset: length9,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef9.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 10
    const path10 = svgRef10.current.querySelector("path");
    const length10 = path10.getTotalLength();
    gsap.fromTo(
      path10,
      {
        strokeDasharray: length10,
        strokeDashoffset: length10,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef10.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 11
    const path11 = svgRef11.current.querySelector("path");
    const length11 = path11.getTotalLength();
    gsap.fromTo(
      path11,
      {
        strokeDasharray: length11,
        strokeDashoffset: length11,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef11.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 12
    const path12 = svgRef12.current.querySelector("path");
    const length12 = path12.getTotalLength();
    gsap.fromTo(
      path12,
      {
        strokeDasharray: length12,
        strokeDashoffset: length12,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef12.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 13
    const path13 = svgRef13.current.querySelector("path");
    const length13 = path13.getTotalLength();
    gsap.fromTo(
      path13,
      {
        strokeDasharray: length13,
        strokeDashoffset: length13,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef13.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 14
    const path14 = svgRef14.current.querySelector("path");
    const length14 = path14.getTotalLength();
    gsap.fromTo(
      path14,
      {
        strokeDasharray: length14,
        strokeDashoffset: length14,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef14.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 15
    const path15 = svgRef15.current.querySelector("path");
    const length15 = path15.getTotalLength();
    gsap.fromTo(
      path15,
      {
        strokeDasharray: length15,
        strokeDashoffset: length15,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef15.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 16
    const path16 = svgRef16.current.querySelector("path");
    const length16 = path16.getTotalLength();
    gsap.fromTo(
      path16,
      {
        strokeDasharray: length16,
        strokeDashoffset: length16,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef16.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 17
    const path17 = svgRef17.current.querySelector("path");
    const length17 = path17.getTotalLength();
    gsap.fromTo(
      path17,
      {
        strokeDasharray: length17,
        strokeDashoffset: length17,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef17.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 18
    const path18 = svgRef18.current.querySelector("path");
    const length18 = path18.getTotalLength();
    gsap.fromTo(
      path18,
      {
        strokeDasharray: length18,
        strokeDashoffset: length18,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef18.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

    // Animation for path 19
    const path19 = svgRef19.current.querySelector("path");
    const length19 = path19.getTotalLength();
    gsap.fromTo(
      path19,
      {
        strokeDasharray: length19,
        strokeDashoffset: length19,
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        scrollTrigger: {
          trigger: svgRef19.current,
          start: "top center",
          end: "+=2500",
          scrub: true,
        },
      }
    );

  }, []);

  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 4,
          ease: "easeIn",
        },
        opacity: {
          duration: 2,
        },
      },
    },
  };

  return (
    <>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        ref={containerRef}
        className="hidden sm:flex relative -top-5 w-full h-screen overflow-hidden app"
      >

        <svg ref={svgRef1} className="absolute z-[49] top-0 left-0" width="1600" height="1000">
          <motion.path
            d="M 200 40 C 203 237 1600 0 1600 800"
            stroke="black"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef2} className="absolute z-[49] top-0 -left-10" width="1600" height="1000">
          <motion.path
            d="M 220 40 C 229 299 1600 10 1600 830"
            stroke="#cbe8ea"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef3} className="absolute z-[49] top-0 -left-20" width="1600" height="1000">
          <motion.path
            d="M 234 40 C 261 350 1550 34 1658 852"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef4} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 244 40 C 248 462 1192 115 1365 720"
            stroke="#d4dbe3"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef5} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 180 0 C 200 130, 1600 10, 1600 850"
            stroke="#d4dbe3"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef6} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 215 -5 C 214 390 1548 42 1712 803"
            stroke="#97aec4"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef7} className="absolute top-10 z-[50] -left-20" width="1600" height="1000">
          <motion.path
            d="M 160 -20 C 166 395 1259 98 1600 850"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef8} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 150 -30 C 163 461 1300 10 1750 1050"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef9} className="absolute z-[50] top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 115 -12 C 145 578 1177 143 1750 950"
            stroke="#c37684"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef10} className="absolute z-[49] top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 99 -20 C 107 494 1293 -41 1750 950"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef11} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 125 -20 C 129 419 1400 0 1750 950"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef12} className="absolute z-[48] top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 73 0 C 86 612 988 81 1869 1153"
            stroke="#c37684"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef13} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 80 0 C 96 542 1300 10 2000 1300"
            stroke="white"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef14} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 90 0 C 228 632 1460 50 1878 1359"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef15} className="absolute z-[49] top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 80 -68 C 88 547 946 -30 1650 890"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef16} className="absolute z-[49] top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 78 -50 C 104 636 1032 40 1609 1303"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef17} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 60 -80 C 91 611 738 56 1276 1250"
            stroke="#bdfcf1"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef18} className="absolute top-10 -left-20" width="1600" height="1000">  
          <motion.path
            d="M 70 40 C 94 479 651 261 990 687"
            stroke="white"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef19} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            d="M 40 -30 C 43 577 661 214 1045 790"
            stroke="#c37684"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

      </motion.div>

      {/* Mobile */}
      <div className="flex sm:hidden relative w-full h-screen bg-[#DCD9DC] overflow-hidden app">

        <svg ref={svgRef1Mob} className="absolute top-0 left-0" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 200 40 C 203 237 1600 0 1600 800"
            stroke="black"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef2Mob} className="absolute top-0 -left-10" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 220 40 C 229 299 1600 10 1600 830"
            stroke="#cbe8ea"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef3Mob} className="absolute top-0 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 234 40 C 261 350 1550 34 1658 852"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef4Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 244 40 C 248 462 1192 115 1365 720"
            stroke="#d4dbe3"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef5Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 180 0 C 200 130, 1600 10, 1600 850"
            stroke="#d4dbe3"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef6Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 215 -5 C 214 390 1548 42 1712 803"
            stroke="#97aec4"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef7Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 160 -20 C 166 395 1259 98 1600 850"
            stroke="red"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef8Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 150 -30 C 163 461 1300 10 1750 1050"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef9Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 115 -12 C 145 578 1177 143 1750 950"
            stroke="#c37684"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef10Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 99 -20 C 107 494 1293 -41 1750 950"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef11Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 125 -20 C 129 419 1400 0 1750 950"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef12Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 73 0 C 86 612 988 81 1869 1153"
            stroke="#c37684"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef13Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 80 0 C 96 542 1300 10 2000 1300"
            stroke="white"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef14Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 90 0 C 228 632 1460 50 1878 1359"
            stroke="yellow"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef15Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 80 -68 C 88 547 946 -30 1650 890"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef16Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 78 -50 C 104 636 1032 40 1609 1303"
            stroke="orange"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef17Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 60 -80 C 91 611 738 56 1276 1250"
            stroke="#bdecf1"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef18Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 70 40 C 94 479 651 261 990 687"
            stroke="white"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

        <svg ref={svgRef19Mob} className="absolute top-10 -left-20" width="1600" height="1000">
          <motion.path
            variants={pathVariants}
            initial="initial"
            whileInView="animate"
            d="M 40 -30 C 43 577 661 214 1045 790"
            stroke="#c37684"
            strokeWidth="1.2"
            fill="transparent"
          />
        </svg>

      </div>

    </>
  );
};

export default LineAnimation;