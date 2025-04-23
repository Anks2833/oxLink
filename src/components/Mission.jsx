import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import "../styles/mission.css";

const Mission = () => {
  const missionContainerRef = useRef(null);
  const mobileMissionContainerRef = useRef(null);
  const tabletMissionContainerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Desktop animation
    const circles = document.querySelectorAll(".circle-container-2");
    const missionText = document.querySelectorAll(".mission-text");
    const missionPara1 = document.querySelectorAll(".mission-para-1");
    const missionPara2 = document.querySelectorAll(".mission-para-2");
    const missionPara3 = document.querySelectorAll(".mission-para-3");
    const missionPara4 = document.querySelectorAll(".mission-para-4");
    const missionPara5 = document.querySelectorAll(".mission-para-5");
    const missionPara6 = document.querySelectorAll(".mission-para-6");

    if (
      circles.length > 0 &&
      missionText.length > 0 &&
      missionPara1.length > 0 &&
      missionPara2.length > 0 &&
      missionPara3.length > 0 &&
      missionPara4.length > 0 &&
      missionPara5.length > 0
    ) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".page12",
          start: "top",
          end: "bottom+=100%",
          pin: true,
          scrub: 2,
          onEnter: () => gsap.to(missionContainerRef.current, { opacity: 1 }),
          onLeave: () => gsap.to(missionContainerRef.current, { opacity: 0 }),
          onEnterBack: () =>
            gsap.to(missionContainerRef.current, { opacity: 1 }),
          onLeaveBack: () =>
            gsap.to(missionContainerRef.current, { opacity: 0 }),
        },
      });

      // Circles timeline
      tl.fromTo(
        ".circle-10",
        { x: -500, opacity: 0 },
        { x: 50, y: 10, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-11",
        { x: 500, opacity: 0 },
        { x: 230, y: 50, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-12",
        { y: -100, opacity: 0 },
        { x: 120, y: 120, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-13",
        { x: -500, y: 100, opacity: 0 },
        { x: 0, y: 180, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-14",
        { x: 500, opacity: 0 },
        { x: 230, y: 150, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-15",
        { y: 100, opacity: 0 },
        { x: 120, y: 220, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-16",
        { x: -500, opacity: 0 },
        { x: 0, y: 280, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-17",
        { x: 500, opacity: 0 },
        { x: 230, y: 250, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-18",
        { y: 100, opacity: 0 },
        { x: 120, y: 320, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".circle-19",
        { x: -500, opacity: 0 },
        { x: 0, y: 380, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      // The circle border or container timeline
      tl.fromTo(
        ".circle-container-2",
        {
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
        },
        {
          borderLeft: "3px solid #002A77",
          borderRight: "3px solid #002A77",
          duration: 0.1,
          ease: "linear",
        },
        "<"
      );

      // The text timeline
      tl.fromTo(
        missionText,
        { opacity: 0, x: -300 },
        { x: -30, opacity: 1, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.fromTo(
        ".mission-para",
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, delay: 0, duration: 0.1, ease: "linear" },
        "<"
      );

      tl.to(
        ".mission-para",
        { x: 300, opacity: 0, delay: 0.2, duration: 0.1, ease: "linear" },
        "<"
      );

      // The circle border or container timeline on scroll down
      tl.to(
        ".circle-container-2",
        {
          borderLeft: "3px solid transparent",
          borderRight: "3px solid transparent",
          duration: 0.1,
          ease: "linear",
        },
        "<"
      );

      // The text timeline on scroll down
      tl.to(
        ".mission-text",
        { opacity: 0, x: -300, duration: 0.1, ease: "linear" },
        "<"
      );

      // Circles timeline on scroll down
      tl.to(".circle-19", { x: -500, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-18", { y: 100, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-17", { x: 500, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-16", { x: -500, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-15", { y: 100, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-14", { x: 500, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-13", { x: -500, y: 100, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-12", { y: -100, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-11", { x: 500, opacity: 0, duration: 0.1 }, "<");
      tl.to(".circle-10", { x: -500, opacity: 0, duration: 0.1 }, "<");
    } else {
      console.error("No circles or mission text found for desktop!");
    }

    // Mobile animation
    if (mobileMissionContainerRef.current) {
      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".mobile-mission-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Set initial states for all mobile circles
      gsap.set(".mobile-mission-circle", {
        opacity: 0,
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
      });

      // Container border animation
      mobileTl.fromTo(
        ".mobile-mission-container",
        {
          borderLeft: "2px solid transparent",
          borderRight: "2px solid transparent",
        },
        {
          borderLeft: "2px solid #002A77",
          borderRight: "2px solid #002A77",
          duration: 0.8,
        }
      );

      // Individual circle animations
      mobileTl.to(
        ".mobile-mission-circle-0",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "60vw",
          left: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-1",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "45vw",
          left: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-2",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "30vw",
          left: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-3",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "50vw",
          left: "20vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-4",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "35vw",
          left: "20vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-5",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "20vw",
          left: "20vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-6",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "40vw",
          left: "35vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-7",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "25vw",
          left: "35vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-8",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "10vw",
          left: "35vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      mobileTl.to(
        ".mobile-mission-circle-9",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "5vw",
          left: "10vw",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
    }

    // Tablet animation
    if (tabletMissionContainerRef.current) {
      const tabletTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".tablet-mission-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Set initial states for all tablet circles
      gsap.set(".tablet-mission-circle", {
        opacity: 0,
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
      });

      // Container border animation
      tabletTl.fromTo(
        ".tablet-mission-container",
        {
          borderLeft: "2px solid transparent",
          borderRight: "2px solid transparent",
        },
        {
          borderLeft: "2px solid #002A77",
          borderRight: "2px solid #002A77",
          duration: 0.8,
        }
      );

      // Individual circle animations
      tabletTl.to(
        ".tablet-mission-circle-0",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "240px",
          left: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-1",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "180px",
          left: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-2",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "120px",
          left: 20,
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-3",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "200px",
          left: "80px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-4",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "140px",
          left: "80px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-5",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "80px",
          left: "80px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-6",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "160px",
          left: "140px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-7",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "100px",
          left: "140px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-8",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "40px",
          left: "140px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
      tabletTl.to(
        ".tablet-mission-circle-9",
        {
          opacity: 1,
          x: 0,
          y: 0,
          top: "20px",
          left: "40px",
          duration: 0.7,
          ease: "power2.out",
        },
        "<+0.1"
      );
    }
  }, []);

  return (
    <>
      {/* Desktop */}
      <div
        ref={missionContainerRef}
        className="hidden md:hidden lg:flex page12 w-full min-h-screen justify-start items-center gap-5 pl-28 mt-[50vw]"
      >
        <div className="">
          <h1 className="mission-text text-stroke text-[#002A77] text-[6vw] tracking-wider">
            MISSION
          </h1>
        </div>

        <div className="relative w-[25vw] h-[70vh] border-l-2 border-r-2 border-l-blue-800 border-r-blue-800 p-4 mr-12 circle-container-2">
          {/* The circles */}
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-10"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-11"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-12"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-13"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-14"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-15"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-16"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-17"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-18"></div>
          <div className="w-20 h-20 absolute bg-green-600 rounded-full circle-19"></div>
        </div>

        <div className="mission-para flex flex-col leading-none">
          <p className="para mission-para-1 text-[1.7vw] text-[#002A77]">
            Delivering superior cable solutions with
          </p>
          <p className="para mission-para-2 text-[1.7vw] text-[#002A77]">
            cutting-edge technology, exceptional quality,
          </p>
          <p className="para mission-para-3 text-[1.7vw] text-[#002A77]">
            and unwavering dedication to cutomer
          </p>
          <p className="para mission-para-4 text-[1.7vw] text-[#002A77]">
            satisfaction.&nbsp;We drive sustainable growth,
          </p>
          <p className="para mission-para-5 text-[1.7vw] text-[#002A77]">
            optimize efficiency, and make a meaningful
          </p>
          <p className="para mission-para-6 text-[1.7vw] text-[#002A77]">
            impact on global infrastructure Landscape.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div
        ref={mobileMissionContainerRef}
        className="mobile-mission-section flex md:hidden lg:hidden w-full min-h-screen flex-col justify-start items-center gap-6 -mt-[45vw]"
      >
        <div className="w-full flex justify-center">
          <motion.h1
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "-15%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-stroke text-[#002A77] text-[10vw] tracking-wider"
          >
            MISSION
          </motion.h1>
        </div>

        <div className="mobile-mission-container relative w-[50vw] h-[40vh] p-4 mr-12">
          {/* Mobile circles - using GSAP animations */}
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-0"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-1"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-2"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-3"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-4"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-5"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-6"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-7"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-8"></div>
          <div className="w-10 h-10 absolute bg-green-600 rounded-full mobile-mission-circle mobile-mission-circle-9"></div>
        </div>

        <motion.div className="flex flex-col leading-none overflow-hidden">
          <motion.p
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0%" }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[4.5vw] text-[#002A77]"
          >
            Delivering superior cable solutions with
          </motion.p>

          <motion.p
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0%" }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[4.5vw] text-[#002A77]"
          >
            cutting-edge technology, exceptional quality,
          </motion.p>

          <motion.p
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0%" }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-[4.5vw] text-[#002A77]"
          >
            and unwavering dedication to cutomer
          </motion.p>

          <motion.p
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0%" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-[4.5vw] text-[#002A77]"
          >
            satisfaction.&nbsp;We drive sustainable growth,
          </motion.p>

          <motion.p
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-[4.5vw] text-[#002A77]"
          >
            optimize efficiency, and make a meaningful
          </motion.p>

          <motion.p
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "0%" }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-[4.5vw] text-[#002A77]"
          >
            impact on global infrastructure Landscape.
          </motion.p>
        </motion.div>
      </div>

      {/* Tablet */}
      <div
        ref={tabletMissionContainerRef}
        className="tablet-mission-section hidden md:flex lg:hidden w-full min-h-screen flex-col justify-start items-center gap-8 -mt-80"
      >
        <div className="self-start ml-12">
          <motion.h1
            initial={{ translateX: "-100%" }}
            whileInView={{ translateX: "-10%" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-stroke text-[#002A77] text-6xl md:text-7xl tracking-wider"
          >
            MISSION
          </motion.h1>
        </div>

        <div className="flex w-full justify-center items-start gap-8 px-8">
          <div className="tablet-mission-container relative w-64 h-96 p-4">
            {/* Tablet circles - using GSAP animations */}
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-0"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-1"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-2"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-3"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-4"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-5"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-6"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-7"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-8"></div>
            <div className="w-14 h-14 absolute bg-green-600 rounded-full tablet-mission-circle tablet-mission-circle-9"></div>
          </div>

          <motion.div className="flex flex-col leading-snug overflow-hidden max-w-md">
            <motion.p
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#002A77]"
            >
              Delivering superior cable solutions with
            </motion.p>

            <motion.p
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#002A77]"
            >
              cutting-edge technology, exceptional quality,
            </motion.p>

            <motion.p
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#002A77]"
            >
              and unwavering dedication to cutomer
            </motion.p>

            <motion.p
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#002A77]"
            >
              satisfaction.&nbsp;We drive sustainable growth,
            </motion.p>

            <motion.p
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#002A77]"
            >
              optimize efficiency, and make a meaningful
            </motion.p>

            <motion.p
              initial={{ translateX: "-100%" }}
              whileInView={{ translateX: "0%" }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-[#002A77]"
            >
              impact on global infrastructure Landscape.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Mission;
