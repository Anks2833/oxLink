import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const CircleGrp3 = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
        });

        tl.fromTo('.first-circle',
            { x: 0, y: 250, opacity: 0 },
            { x: 0, y: 180, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.second-circle',
            { x: 0, y: 230, opacity: 0 },
            { x: 0, y: 90, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.third-circle',
            { x: 0, y: 210, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.fourth-circle',
            { x: 0, y: 190, opacity: 0 },
            { x: 70, y: 190, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.fifth-circle',
            { x: 0, y: 190, scale: 0, opacity: 0 },
            { opacity: 1, scale: 1, duration: 1 },
            0
        );

        tl.fromTo('.sixth-circle',
            { x: 0, y: 190, opacity: 0 },
            { x: 140, y: 190, opacity: 1, duration: 2 },
            1
        );

        return () => {
            tl.clear();
        };
    }, []);

    useEffect(() => {
        const tl = gsap.timeline({
            repeat: -1,
            yoyo: true,
        });

        tl.fromTo('.first-circle-mob',
            { x: 0, y: 230, opacity: 0 },
            { x: 0, y: 190, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.second-circle-mob',
            { x: 0, y: 230, opacity: 0 },
            { x: 0, y: 150, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.third-circle-mob',
            { x: 0, y: 230, opacity: 0 },
            { x: 0, y: 110, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.fourth-circle-mob',
            { x: 0, y: 190, opacity: 0 },
            { x: 40, y: 190, opacity: 1, duration: 2 },
            1
        );

        tl.fromTo('.fifth-circle-mob',
            { x: 0, y: 190, scale: 0, opacity: 0 },
            { opacity: 1, scale: 1, duration: 1 },
            0
        );

        tl.fromTo('.sixth-circle-mob',
            { x: 0, y: 190, opacity: 0 },
            { x: 80, y: 190, opacity: 1, duration: 2 },
            1
        );

        return () => {
            tl.clear();
        };
    }, []);

    return (
        <>
            {/* Desktop */}
            <div
                className='hidden sm:flex relative w-fit mr-60 rotate-12 flex-col gap-5 origin-center circle-group'
            >

                <div className='flex gap-3'>
                    <div
                        className='first-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div
                        className='second-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div
                        className='third-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div
                        className='fourth-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>

                    <div
                        className='fifth-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>

                    <div
                        className='sixth-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

            </div>

            {/* Mobile */}
            <div
                className='flex sm:hidden relative -top-40 w-fit mr-40 flex-col gap-3 origin-center circle-group'
            >

                <div className='flex gap-3'>
                    <div
                        className='first-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div
                        className='second-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div
                        className='third-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

                <div className='flex gap-8'>
                    <div
                        className='fourth-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>

                    <div
                        className='fifth-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>

                    <div
                        className='sixth-circle absolute w-14 h-14 bg-[#fab03f] rounded-full'
                    >
                    </div>
                </div>

            </div>

        </>
    )
}

export default CircleGrp3