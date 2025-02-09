import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const Mission = () => {

    const missionContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const circles = document.querySelectorAll('.circle-container-2');
        const missionText = document.querySelectorAll('.mission-text');
        const missionPara1 = document.querySelectorAll('.mission-para-1');
        const missionPara2 = document.querySelectorAll('.mission-para-2');
        const missionPara3 = document.querySelectorAll('.mission-para-3');
        const missionPara4 = document.querySelectorAll('.mission-para-4');
        const missionPara5 = document.querySelectorAll('.mission-para-5');
        const missionPara6 = document.querySelectorAll('.mission-para-6');
        if (circles.length > 0 && missionText.length > 0 && missionPara1.length > 0 && missionPara2.length > 0 && missionPara3.length > 0 && missionPara4.length > 0 && missionPara5.length > 0) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.page12',
                    start: 'top',
                    end: 'bottom+=800%',
                    pin: true,
                    scrub: 2,
                    onEnter: () => gsap.to(missionContainerRef.current, { opacity: 1 }),
                    onLeave: () => gsap.to(missionContainerRef.current, { opacity: 0 }),
                    onEnterBack: () => gsap.to(missionContainerRef.current, { opacity: 1 }),
                    onLeaveBack: () => gsap.to(missionContainerRef.current, { opacity: 0 })
                }
            });

            // Circles timeline
            tl.fromTo('.circle-10',
                { x: -500, opacity: 0 },
                { x: 50, y: 10, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-11',
                { x: 500, opacity: 0 },
                { x: 230, y: 50, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-12',
                { y: -100, opacity: 0 },
                { x: 120, y: 120, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-13',
                { x: -500, y: 100, opacity: 0 },
                { x: 0, y: 180, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-14',
                { x: 500, opacity: 0 },
                { x: 230, y: 150, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-15',
                { y: 100, opacity: 0 },
                { x: 120, y: 220, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-16',
                { x: -500, opacity: 0 },
                { x: 0, y: 280, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-17',
                { x: 500, opacity: 0 },
                { x: 230, y: 250, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-18',
                { y: 100, opacity: 0 },
                { x: 120, y: 320, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-19',
                { x: -500, opacity: 0 },
                { x: 0, y: 380, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            // The circle border or container timeline
            tl.fromTo('.circle-container-2',
                { borderLeft: '3px solid transparent', borderRight: '3px solid transparent' },
                { borderLeft: '3px solid #002A77', borderRight: '3px solid #002A77', duration: 0.1, ease: 'linear' },
                "<"
            );

            // The text timeline
            tl.fromTo(missionText,
                { opacity: 0, x: -300 },
                { x: -30, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            // // The para timeline
            // tl.fromTo(missionPara1,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(missionPara2,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 0.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(missionPara3,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 1, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(missionPara4,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 1.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(missionPara5,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 2, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(missionPara6,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 2.5, duration: 2, ease: 'linear' },
            //     "<"
            // );

            tl.fromTo(".mission-para",
                { x: 300, opacity: 0 },
                { x: 0, opacity: 1, delay: 0, duration: 0.1, ease: 'linear' },
                "<"
            );

            // // Para timeline on scroll down
            // tl.to(missionPara6,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(missionPara5,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(missionPara4,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(missionPara3,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(missionPara2,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(missionPara1,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );

            tl.to(".mission-para",
                { x: 300, opacity: 0, delay: 0.12, duration: 0.1, ease: 'linear' },
                "<"
            );

            // The circle border or container timeline on scroll down
            tl.to('.circle-container-2',
                { borderLeft: '3px solid transparent', borderRight: '3px solid transparent', duration: 0.1, ease: 'linear' },
                "<"
            );

            // The text timeline on scroll down
            tl.to('.mission-text',
                { opacity: 0, x: -300, duration: 0.1, ease: 'linear' },
                "<"
            );

            // Circles timeline on scroll down
            tl.to('.circle-19',
                { x: -500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-18',
                { y: 100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-17',
                { x: 500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-16',
                { x: -500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-15',
                { y: 100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-14',
                { x: 500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-13',
                { x: -500, y: 100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-12',
                { y: -100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-11',
                { x: 500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-10',
                { x: -500, opacity: 0, duration: 0.1 },
                "<"
            );

        } else {
            console.error('No circles or mission text found!');
        }
    }, []);

    return (
        <>
            {/* Desktop */}
            <div ref={missionContainerRef} className='hidden sm:flex page12 w-full min-h-screen justify-start items-center gap-5 pl-28 mt-[400vw]'>

                <div className=''>
                    <h1 className='mission-text text-stroke text-[#002A77] text-[6vw] tracking-wider'>MISSION</h1>
                </div>


                <div className='relative w-[25vw] h-[70vh] border-l-2 border-r-2 border-l-blue-800 border-r-blue-800 p-4 mr-12 circle-container-2'>
                    {/* The circles */}
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-10'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-11'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-12'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-13'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-14'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-15'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-16'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-17'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-18'></div>
                    <div className='w-20 h-20 absolute bg-green-600 rounded-full circle-19'></div>
                </div>

                <div className='mission-para flex flex-col leading-none'>
                    <p className='para mission-para-1 text-[1.7vw] text-[#002A77]'>Delivering superior cable solutions with</p>
                    <p className='para mission-para-2 text-[1.7vw] text-[#002A77]'>cutting-edge technology, exceptional quality,</p>
                    <p className='para mission-para-3 text-[1.7vw] text-[#002A77]'>and unwavering dedication to cutomer</p>
                    <p className='para mission-para-4 text-[1.7vw] text-[#002A77]'>satisfaction.We drive sustainable growth,</p>
                    <p className='para mission-para-5 text-[1.7vw] text-[#002A77]'>optimize efficiency, and make a meaningful</p>
                    <p className='para mission-para-6 text-[1.7vw] text-[#002A77]'>impact on global infrastructure Landscape.</p>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-full min-h-screen flex-col justify-start items-center gap-6 -mt-[15vw]'>

                <div className='w-full flex justify-center'>
                    <motion.h1
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "-15%" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='text-stroke text-[#002A77] text-[10vw] tracking-wider'
                    >
                        MISSION
                    </motion.h1>
                </div>


                <motion.div
                    className='relative w-[50vw] h-[40vh] border-l-2 border-r-2 border-l-[#002A77] border-r-[#002A77] p-4 mr-12'
                >
                    {/* The circles */}
                    <div className='w-10 h-10 absolute top-[60vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[45vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[30vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[50vw] left-[20vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[35vw] left-[20vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[20vw] left-[20vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[40vw] left-[35vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[25vw] left-[35vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[10vw] left-[35vw] bg-green-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[5vw] left-[10vw] bg-green-600 rounded-full'></div>
                </motion.div>

                <motion.div
                    className='flex flex-col leading-none overflow-hidden'>
                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        Delivering superior cable solutions with

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        cutting-edge technology, exceptional quality,

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        and unwavering dedication to cutomer</motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        satisfaction.We drive sustainable growth,</motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        optimize efficiency, and make a meaningful</motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        impact on global infrastructure Landscape.</motion.p>

                </motion.div>

            </div>

        </>
    )
}

export default Mission