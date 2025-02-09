import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const CircleGrp5 = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1,
        });

        tl.fromTo('.first-purple-circle', {
            opacity: 0,
            y: 0,
            scale: 0
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1
        }, 0);

        tl.fromTo('.second-purple-circle', {
            opacity: 0,
            y: -80
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 1);

        tl.fromTo('.third-purple-circle', {
            opacity: 0,
            y: -80
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 1);

        tl.fromTo('.fourth-purple-circle', {
            opacity: 0,
            x: -70,
            y: -50
        }, {
            opacity: 1,
            x: 0,
            y: 10,
            duration: 1
        }, 1);

        tl.fromTo('.eighth-purple-circle', {
            opacity: 0,
            scale: 0,
            y: 0
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1
        }, 2);

        tl.fromTo('.sixth-purple-circle', {
            opacity: 0,
            y: 150
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 3);

        tl.fromTo('.seventh-purple-circle', {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 3);

        tl.fromTo('.fifth-purple-circle', {
            opacity: 0,
            x: 50,
            y: 30
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1
        }, 3);

    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            yoyo: true,
            repeat: -1,
        });

        tl.fromTo('.first-purple-circle-mobile', {
            opacity: 0,
            y: 0,
            scale: 0
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1
        }, 0);

        tl.fromTo('.second-purple-circle-mobile', {
            opacity: 0,
            y: -40
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 1);

        tl.fromTo('.third-purple-circle-mobile', {
            opacity: 0,
            y: -20
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 1);

        tl.fromTo('.fourth-purple-circle-mobile', {
            opacity: 0,
            x: -100,
            y: -60
        }, {
            opacity: 1,
            x: 0,
            y: 10,
            duration: 1
        }, 1);

        tl.fromTo('.eighth-purple-circle-mobile', {
            opacity: 0,
            scale: 0,
            y: 0
        }, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1
        }, 2);

        tl.fromTo('.sixth-purple-circle-mobile', {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 3);

        tl.fromTo('.seventh-purple-circle-mobile', {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        }, 3);

        tl.fromTo('.fifth-purple-circle-mobile', {
            opacity: 0,
            x: 100,
            y: 30
        }, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1
        }, 3);

    }, []);

    return (
        <>
            {/* Desktop */}
            <div className='hidden sm:flex w-fit mr-20 mt-20 rotate-12 gap-14 origin-center purple-circle-group'>

                <div className='relative flex flex-col gap-5'>
                    <div className='first-purple-circle w-14 h-14 bg-[#002976] rounded-full'></div>
                    <div className='second-purple-circle w-14 h-14 bg-[#002976] rounded-full'></div>
                    <div className='third-purple-circle w-14 h-14 bg-[#002976] rounded-full'></div>
                </div>

                <div className='relative flex flex-col gap-3'>
                    <div className='fourth-purple-circle absolute top-12 -left-9 w-14 h-14 bg-[#002976] rounded-full'></div>
                </div>

                <div className='relative flex flex-col gap-3'>
                    <div className='fifth-purple-circle absolute top-24 -left-4 w-14 h-14 bg-[#002976] rounded-full'></div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='sixth-purple-circle w-14 h-14 bg-[#002976] rounded-full'></div>
                    <div className='seventh-purple-circle w-14 h-14 bg-[#002976] rounded-full'></div>
                    <div className='eighth-purple-circle w-14 h-14 bg-[#002976] rounded-full'></div>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden w-fit mr-20 gap-14 origin-center purple-circle-group-mobile'>

                <div className='relative flex flex-col gap-5'>
                    <div className='first-purple-circle-mobile w-5 h-5 bg-[#002976] rounded-full'></div>
                    <div className='second-purple-circle-mobile w-5 h-5 bg-[#002976] rounded-full'></div>
                    <div className='third-purple-circle-mobile w-5 h-5 bg-[#002976] rounded-full'></div>
                </div>

                <div className='relative'>
                    <div className='fourth-purple-circle-mobile absolute top-8 -left-4 w-5 h-5 bg-[#002976] rounded-full'></div>
                </div>

                <div className='relative'>
                    <div className='fifth-purple-circle-mobile absolute top-16 -left-4 w-5 h-5 bg-[#002976] rounded-full'></div>
                </div>

                <div className='flex flex-col gap-5'>
                    <div className='sixth-purple-circle-mobile w-5 h-5 bg-[#002976] rounded-full'></div>
                    <div className='seventh-purple-circle-mobile w-5 h-5 bg-[#002976] rounded-full'></div>
                    <div className='eighth-purple-circle-mobile w-5 h-5 bg-[#002976] rounded-full'></div>
                </div>

            </div>

        </>
    )
}

export default CircleGrp5