import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

const Value = () => {

    const valueContainerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const circles = document.querySelectorAll('.circle-container-3');
        const valueText = document.querySelectorAll('.value-text');
        const valuePara1 = document.querySelectorAll('.value-para-1');
        const valuePara2 = document.querySelectorAll('.value-para-2');
        const valuePara3 = document.querySelectorAll('.value-para-3');
        const valuePara4 = document.querySelectorAll('.value-para-4');
        const valuePara5 = document.querySelectorAll('.value-para-5');
        // const valuePara6 = document.querySelectorAll('.value-para-6');
        // const valuePara7 = document.querySelectorAll('.value-para-7');
        if (circles.length > 0 && valueText.length > 0 && valuePara1.length > 0 && valuePara2.length > 0 && valuePara3.length > 0 && valuePara4.length > 0 && valuePara5.length > 0) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.page13',
                    start: 'top',
                    end: 'bottom+=800%',
                    pin: true,
                    scrub: 2,
                    onEnter: () => gsap.to(valueContainerRef.current, { opacity: 1 }),
                    onLeave: () => gsap.to(valueContainerRef.current, { opacity: 0 }),
                    onEnterBack: () => gsap.to(valueContainerRef.current, { opacity: 1 }),
                    onLeaveBack: () => gsap.to(valueContainerRef.current, { opacity: 0 })
                }
            });

            tl.fromTo('.circle-20',
                { x: -500, opacity: 0 },
                { x: 50, y: 10, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-21',
                { x: 500, opacity: 0 },
                { x: 230, y: 50, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-22',
                { y: -100, opacity: 0 },
                { x: 120, y: 120, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-23',
                { x: -500, y: 100, opacity: 0 },
                { x: 0, y: 180, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-24',
                { x: 500, opacity: 0 },
                { x: 230, y: 150, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-25',
                { y: 100, opacity: 0 },
                { x: 120, y: 220, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-26',
                { x: -500, opacity: 0 },
                { x: 0, y: 280, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-27',
                { x: 500, opacity: 0 },
                { x: 230, y: 250, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-28',
                { y: 100, opacity: 0 },
                { x: 120, y: 320, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-29',
                { x: -500, opacity: 0 },
                { x: 0, y: 380, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo('.circle-container-3',
                { borderLeft: '3px solid transparent', borderRight: '3px solid transparent' },
                { borderLeft: '3px solid #002A77', borderRight: '3px solid #002A77', duration: 0.1, ease: 'linear' },
                "<"
            );

            tl.fromTo(valueText,
                { opacity: 0, x: -300 },
                { x: -30, opacity: 1, duration: 0.1, ease: 'linear' },
                "<"
            );

            // tl.fromTo(valuePara1,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(valuePara2,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 0.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(valuePara3,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 1, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(valuePara4,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 1.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(valuePara5,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 2, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(valuePara6,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 2.5, duration: 2, ease: 'linear' },
            //     "<"
            // );
            // tl.fromTo(valuePara7,
            //     { x: 300, opacity: 0 },
            //     { x: 0, opacity: 1, delay: 2.5, duration: 2, ease: 'linear' },
            //     "<"
            // );

            tl.fromTo(".value-para",
                { x: 300, opacity: 0 },
                { x: 0, opacity: 1, delay: 0, duration: 0.1, ease: 'linear' },
                "<"
            );

            // // Para timeline on scroll down
            // tl.to(valuePara7,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(valuePara6,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(valuePara5,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(valuePara4,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(valuePara3,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(valuePara2,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );
            // tl.to(valuePara1,
            //     { x: 300, opacity: 0, delay: 2.5, duration: 1, ease: 'linear' }
            // );

            tl.to(".value-para",
                { x: 300, opacity: 0, delay: 0.12, duration: 0.1, ease: 'linear' },
                "<"
            );

            // The circle border or container timeline on scroll down
            tl.to('.circle-container-3',
                { borderLeft: '3px solid transparent', borderRight: '3px solid transparent', duration: 0.1, ease: 'linear' },
                "<"
            );

            // The text timeline on scroll down
            tl.to(valueText,
                { opacity: 0, x: -300, duration: 0.1, ease: 'linear' },
                "<"
            );

            // Circles timeline on scroll down
            tl.to('.circle-29',
                { x: -500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-28',
                { y: 100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-27',
                { x: 500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-26',
                { x: -500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-25',
                { y: 100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-24',
                { x: 500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-23',
                { x: -500, y: 100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-22',
                { y: -100, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-21',
                { x: 500, opacity: 0, duration: 0.1 },
                "<"
            );

            tl.to('.circle-20',
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
            <div ref={valueContainerRef} className='page13 hidden sm:flex w-full min-h-screen justify-start items-center pl-28 gap-5 mt-[400vw]'>

                <div className=''>
                    <h1 className='value-text text-stroke text-[#002A77] text-[7vw] tracking-wider'>VALUE</h1>
                </div>


                <div className='relative w-[25vw] h-[70vh] border-l-2 border-r-2 border-l-blue-800 border-r-blue-800 p-4 mr-12 circle-container-3'>
                    {/* The circles */}
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-20'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-21'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-22'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-23'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-24'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-25'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-26'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-27'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-28'></div>
                    <div className='w-20 h-20 absolute bg-[#f99938] rounded-full circle-29'></div>
                </div>

                <div className='value-para flex flex-col leading-none'>
                    <p className='para value-para-1 text-[1.7vw] text-[#002A77]'>"Welcome to OX-LINE ELECTRONICS LLP, a</p>
                    <p className='para value-para-2 text-[1.7vw] text-[#002A77]'>premier manufacturer specializing in a</p>
                    <p className='para value-para-3 text-[1.7vw] text-[#002A77]'>diverse range of cable catering to various</p>
                    <p className='para value-para-4 text-[1.7vw] text-[#002A77]'>industries. Established in 2023, our</p>
                    <p className='para value-para-5 text-[1.7vw] text-[#002A77]'>commitment to excellence and innovation</p>
                    <p className='para value-para-6 text-[1.7vw] text-[#002A77]'>will ensure great product with supreme</p>
                    <p className='para value-para-7 text-[1.7vw] text-[#002A77]'>performance."</p>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-full min-h-screen flex-col justify-start items-center gap-6 -mt-[15vw]'>

                <div className='w-full flex justify-center'>
                    <motion.h1
                        initial={{ translateX: "-200%" }}
                        whileInView={{ translateX: "-25%" }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className='text-stroke text-[#002A77] text-[10vw] tracking-wider'
                    >
                        VALUE
                    </motion.h1>
                </div>


                <motion.div
                    className='relative w-[50vw] h-[40vh] border-l-2 border-r-2 border-l-[#002A77] border-r-[#002A77] p-4 mr-12'
                >
                    {/* The circles */}
                    <div className='w-10 h-10 absolute top-[60vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[45vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[30vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[50vw] left-[20vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[35vw] left-[20vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[20vw] left-[20vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[40vw] left-[35vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[25vw] left-[35vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[10vw] left-[35vw] bg-[#f99938] rounded-full'></div>
                    <div className='w-10 h-10 absolute top-[5vw] left-[10vw] bg-[#f99938] rounded-full'></div>
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
                        "Welcome to OX-LINE ELECTRONICS LLP, a

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        premier manufacturer specializing in a

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        diverse range of cable catering to various

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        industries. Established in 2023, our

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        commitment to excellence and innovation

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        will ensure great product with supreme

                    </motion.p>

                    <motion.p
                        initial={{ translateX: "-100%" }}
                        whileInView={{ translateX: "0%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                        viewport={{ once: true }}
                        className='text-[4.5vw] text-[#002A77]'
                    >
                        performance."

                    </motion.p>

                </motion.div>

            </div>

        </>
    )
}

export default Value