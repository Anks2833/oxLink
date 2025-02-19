import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CircleGrp6 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1,
            ease: 'power2.inOut',
        });

        tl.fromTo('.orange-circle-group-1', {
            scale: 0,
            rotate: 0,
            opacity: 0,
        }, {
            scale: 1,
            rotate: 360,
            opacity: 1,
            duration: 2
        }, 0);

        tl.fromTo('.fourth-orange-circle', {
            x: -50,
            y: 40,
            opacity: 0,
        }, {
            y: -30,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.fifth-orange-circle', {
            x: -50,
            y: 100,
            opacity: 0,
        }, {
            y: 180,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.sixth-orange-circle', {
            x: 30,
            y: 50,
            opacity: 0,
        }, {
            x: 60,
            y: 20,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.seventh-orange-circle', {
            x: 30,
            y: 50,
            opacity: 0,
        }, {
            x: 100,
            y: -40,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.eighth-orange-circle', {
            x: 30,
            y: 50,
            opacity: 0,
        }, {
            x: 70,
            y: 130,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.ninth-orange-circle', {
            x: 50,
            y: 100,
            opacity: 0,
        }, {
            x: 120,
            y: 180,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1,
            ease: 'power2.inOut',
        });

        tl.fromTo('.orange-circle-group-1-mobile', {
            scale: 0,
            rotate: 0,
            opacity: 0,
        }, {
            scale: 1,
            rotate: 360,
            opacity: 1,
            duration: 2
        }, 0);

        tl.fromTo('.fourth-orange-circle-mobile', {
            x: -50,
            y: 40,
            opacity: 0,
        }, {
            y: 10,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.fifth-orange-circle-mobile', {
            x: -50,
            y: 80,
            opacity: 0,
        }, {
            y: 100,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.sixth-orange-circle-mobile', {
            x: 30,
            y: 50,
            opacity: 0,
        }, {
            x: 60,
            y: 20,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.seventh-orange-circle-mobile', {
            x: 30,
            y: 50,
            opacity: 0,
        }, {
            x: 100,
            y: -40,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.eighth-orange-circle-mobile', {
            x: 30,
            y: 50,
            opacity: 0,
        }, {
            x: 70,
            y: 130,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

        tl.fromTo('.ninth-orange-circle-mobile', {
            x: 50,
            y: 100,
            opacity: 0,
        }, {
            x: 120,
            y: 180,
            opacity: 1,
            delay: 1,
            duration: 3
        }, 1);

    }, []);

    return (
        <>
            {/* Desktop */}
            <div className='hidden sm:flex w-fit -ml-20 mr-60 mt-20 rotate-12 origin-center orange-circle-group'>

                <div className='orange-circle-group-1 w-32 h-fit relative top-10 left-20 flex flex-col gap-3'>
                    <div className='first-orange-circle absolute left-16 top-10 w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='second-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='third-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                </div>

                <div className='relative'>
                    <div className='absolute fourth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute fifth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute sixth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute seventh-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute eighth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute ninth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-fit mr-40 origin-center orange-circle-group'>

                <div className='orange-circle-group-1 w-32 h-fit relative top-10 left-20 flex flex-col gap-3'>
                    <div className='first-orange-circle absolute left-16 top-10 w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='second-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='third-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                </div>

                <div className='relative'>
                    <div className='absolute fourth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute fifth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute sixth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute seventh-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute eighth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                    <div className='absolute ninth-orange-circle w-14 h-14 bg-[#FF914D] rounded-full'></div>
                </div>

            </div>

        </>
    )
}

export default CircleGrp6