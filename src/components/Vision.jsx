import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const Vision = () => {

    const containerRef = useRef(null);
    // const containerRefMob = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const circles = document.querySelectorAll('.circle-container');
        const visionText = document.querySelectorAll('.vision-text');
        const visionPara1 = document.querySelectorAll('.vision-para-1');
        const visionPara2 = document.querySelectorAll('.vision-para-2');
        const visionPara3 = document.querySelectorAll('.vision-para-3');
        const visionPara4 = document.querySelectorAll('.vision-para-4');
        const visionPara5 = document.querySelectorAll('.vision-para-5');
        if (circles.length > 0 && visionText.length > 0 && visionPara1.length > 0 && visionPara2.length > 0 && visionPara3.length > 0 && visionPara4.length > 0 && visionPara5.length > 0) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.page11',
                    start: 'top',
                    end: 'bottom+=100%',
                    pin: true,
                    scrub: 2,
                    onEnter: () => gsap.to(containerRef.current, { opacity: 1 }),
                    onLeave: () => gsap.to(containerRef.current, { opacity: 0 }),
                    onEnterBack: () => gsap.to(containerRef.current, { opacity: 1 }),
                    onLeaveBack: () => gsap.to(containerRef.current, { opacity: 0 })
                }
            });

            // Circles timeline
            tl.fromTo('.circle',
                { x: -500, opacity: 0 },
                { x: 50, y: 10, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-1',
                { x: 500, opacity: 0 },
                { x: 230, y: 50, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-2',
                { y: -100, opacity: 0 },
                { x: 120, y: 120, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-3',
                { x: -500, y: 100, opacity: 0 },
                { x: 0, y: 180, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-4',
                { x: 500, opacity: 0 },
                { x: 230, y: 150, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-5',
                { y: 100, opacity: 0 },
                { x: 120, y: 220, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-6',
                { x: -500, opacity: 0 },
                { x: 0, y: 280, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-7',
                { x: 500, opacity: 0 },
                { x: 230, y: 250, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-8',
                { y: 100, opacity: 0 },
                { x: 120, y: 320, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-9',
                { x: -500, opacity: 0 },
                { x: 0, y: 380, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            // The circle border or container timeline
            tl.fromTo('.circle-container',
                { borderLeft: '3px solid transparent', borderRight: '3px solid transparent' },
                { borderLeft: '3px solid #002A77', borderRight: '3px solid #002A77', duration: 0.1, ease: 'linear' },
                "<"
            );

            // The text timeline
            tl.fromTo('.vision-text',
                { opacity: 0, x: -300 },
                { x: -30, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            // // The para timeline
            // tl.fromTo(visionPara1,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(visionPara2,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 0.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(visionPara3,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 1, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(visionPara4,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 1.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(visionPara5,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 2, duration: 2, ease: 'linear' },
            //     "<"
            // );

            tl.fromTo(".vision-para",
                { x: 300, opacity: 0 },
                { x: 0, opacity: 1, delay: 0, duration: 0.1, ease: 'linear' },
                "<"
            );

            // // Para timeline on scroll down
            // tl.to(visionPara5,
            //     { x: 300, opacity: 0, delay: 1.5, duration: 1, ease: 'linear' },
            // );
            // tl.to(visionPara4,
            //     { x: 300, opacity: 0, delay: 1.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(visionPara3,
            //     { x: 300, opacity: 0, delay: 1.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(visionPara2,
            //     { x: 300, opacity: 0, delay: 1.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(visionPara1,
            //     { x: 300, opacity: 0, delay: 1.5, duration: 1, ease: 'linear' }
            // );

            tl.to(".vision-para",
                { x: 300, opacity: 0, delay: 0.2, duration: 0.1, ease: 'linear' },
                "<"
            );

            // The circle border or container timeline on scroll down
            tl.to('.circle-container',
                { borderLeft: '3px solid transparent', borderRight: '3px solid transparent', duration: 0.1, ease: 'linear' },
                "<"
            );

            // The text timeline on scroll down
            tl.to('.vision-text',
                { opacity: 0, x: -300, duration: 0.1, ease: 'linear' },
                "<"
            );

            // Circles timeline on scroll down
            tl.to('.circle', { x: -500, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-1', { x: 500, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-2', { y: -100, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-3', { x: -500, y: 100, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-4', { x: 500, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-5', { y: 100, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-6', { x: -500, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-7', { x: 500, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-8', { y: 100, opacity: 0, duration: 0.1 }, "<");
            tl.to('.circle-9', { x: -500, opacity: 0, duration: 0.1 }, "<");

        } else {
            console.error('No circles or vision text found!');
        }

    }, []);

    // const paraVariants = {
    //     intial: {
    //         translateX: "-150%"
    //     },

    //     animate: {
    //         translateX: "-150%"
    //     }
    // }

    return (
        <>
            {/* Desktop */}
            <div ref={containerRef} className='hidden sm:flex page11 w-full min-h-[100vh] justify-start items-center pl-28 gap-5 -mt-[30vw]'>

                <div className=''>
                    <h1 className='vision-text text-stroke text-[#002A77] text-[7vw] tracking-wider'>VISION</h1>
                </div>


                <div className='relative w-[25vw] h-[70vh] border-l-2 border-r-2 border-l-[#002A77] border-r-[#002A77] p-4 mr-12 circle-container'>
                    {/* The circles */}
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-1'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-2'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-3'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-4'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-5'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-6'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-7'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-8'></div>
                    <div className='w-20 h-20 absolute bg-sky-600 rounded-full circle-9'></div>
                </div>

                <div className='vision-para flex flex-col leading-none'>
                    <p className='para vision-para-1 text-[1.7vw] text-[#002A77]'>"Creating futuristic solutions for the next</p>
                    <p className='para vision-para-2 text-[1.7vw] text-[#002A77]'>generation  of global infrastructure through</p>
                    <p className='para vision-para-3 text-[1.7vw] text-[#002A77]'>innovative, sustainable, and revolutionary</p>
                    <p className='para vision-para-4 text-[1.7vw] text-[#002A77]'>electronic that set a new benchmark</p>
                    <p className='para vision-para-5 text-[1.7vw] text-[#002A77]'>for the industry."</p>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-full min-h-screen flex-col justify-start items-center gap-6 mt-[30vw]'>

                <div className=''>
                    <motion.h1
                        initial={{ translateX: "-200%" }}
                        whileInView={{ translateX: "-20%" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='text-stroke text-[#002A77] text-[10vw] tracking-wider'
                    >
                        VISION
                    </motion.h1>
                </div>


                <motion.div
                    className='relative w-[50vw] h-[40vh] border-l-2 border-r-2 border-l-[#002A77] border-r-[#002A77] p-4 mr-12'
                >
                    {/* The circles */}
                    <div className='w-10 h-10 absolute top-[60vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[45vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[30vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[50vw] left-[20vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[35vw] left-[20vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[20vw] left-[20vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[40vw] left-[35vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[25vw] left-[35vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[10vw] left-[35vw] bg-sky-600 rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[5vw] left-[10vw] bg-sky-600 rounded-full'></div>
                </motion.div>

                <motion.div
                    className='flex flex-col leading-none overflow-hidden'
                >
                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        "Creating futuristic solutions for the next
                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        generation  of global infrastructure through
                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        innovative, sustainable, and revolutionary
                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        electronic that set a new benchmark
                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        for the industry."
                    </motion.p>
                </motion.div>

            </div>

        </>
    );
};

export default Vision;