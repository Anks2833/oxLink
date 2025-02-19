import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const CircleGrp4 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1,
            ease: 'power2.inOut',
        });
        tl.fromTo('.first-green-circle',
            { x: -100, y: 0, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 2 },
            0
        );

        tl.fromTo('.second-green-circle',
            { x: 100, y: 0, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 2 },
            0
        );

        tl.fromTo('.third-green-circle',
            { x: -100, y: 0, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 2 },
            0
        );

        tl.fromTo('.fourth-green-circle',
            { x: 100, y: 0, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 2 },
            0
        );

        // tl.fromTo('.first-green-circle', {
        //     opacity: 0,
        // }, {
        //     opacity: 1,
        //     duration: 1,
        //     yoyo: true,
        // }, 0);

        // tl.fromTo('.second-green-circle', {
        //     opacity: 0,
        // }, {
        //     opacity: 1,
        //     duration: 1,
        //     yoyo: true,
        // }, 0);

        // tl.fromTo('.third-green-circle', {
        //     opacity: 0,
        // }, {
        //     opacity: 1,
        //     duration: 1,
        //     yoyo: true,
        // }, 0);

        // tl.fromTo('.fourth-green-circle', {
        //     opacity: 0,
        // }, {
        //     opacity: 1,
        //     duration: 1,
        //     yoyo: true,
        // }, 0);
    }, []);

    return (
        <>
            {/* Desktop */}
            <div className='hidden sm:flex w-fit mr-20 rotate-12 flex-col gap-5 origin-center px-10 circle-group-green pt-10'>

                <div className='flex gap-3'>
                    <div className='first-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

                <div className='flex gap-3'>
                    <div className='second-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

                <div className='flex gap-3'>
                    <div className='third-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

                <div className='flex gap-3'>
                    <div className='fourth-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-fit flex-col gap-3 origin-center px-10 circle-group-green pt-10'>

                <div className='flex gap-3'>
                    <div className='first-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

                <div className='flex gap-3'>
                    <div className='second-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

                <div className='flex gap-3'>
                    <div className='third-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

                <div className='flex gap-3'>
                    <div className='fourth-green-circle w-14 h-14 bg-[#2bb573] rounded-full'></div>
                </div>

            </div>

        </>
    )
}

export default CircleGrp4