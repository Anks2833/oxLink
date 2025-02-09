import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page1Animation1 = () => {
    const videoRef = useRef(null);
    const videoRef1 = useRef(null);

    const videoSrc = 'https://res.cloudinary.com/dlchhddqg/video/upload/v1732343765/Ox-Link-Assets/Videos/us7yfeswwvw4jlho3lgr.mov';
    // const videoSrcMobile = 'https://i.pinimg.com/736x/76/df/94/76df9409e8e1fb52acce33adf907cc8e.jpg';
    useEffect(() => {

        // GSAP animation setup
        gsap.fromTo(videoRef.current,
            { opacity: 0 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: videoRef.current,
                    start: "top center",
                    end: "y+=250",
                    toggleActions: "play none none none",
                    onEnter: () => {
                        gsap.to(videoRef.current, { opacity: 1 });
                        videoRef.current.play(); // Play video normally
                    },
                    onLeave: () => {
                        gsap.to(videoRef.current, { opacity: 0 });
                        // videoRef.current.pause(); // Pause video
                        // videoRef.current.currentTime = videoRef.current.duration; // Go to the end
                        // videoRef.current.playbackRate = -1; // Set playback rate to reverse
                        // videoRef.current.play(); // Play in reverse
                    },
                    onEnterBack: () => {
                        gsap.to(videoRef.current, { opacity: 1 });
                        videoRef.current.play(); // Play video normally
                    },
                    onLeaveBack: () => {
                        gsap.to(videoRef.current, { opacity: 0 });
                        // videoRef.current.pause(); // Pause video
                        // videoRef.current.currentTime = videoRef.current.duration; // Go to the end
                        // videoRef.current.playbackRate = -1; // Set playback rate to reverse
                        // videoRef.current.play(); // Play in reverse
                    }
                }
            });
    }, []);

    useEffect(() => {

        // GSAP animation setup
        gsap.fromTo(videoRef1.current,
            { opacity: 0 },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: videoRef1.current,
                    start: "top center",
                    end: "y+=250",
                    toggleActions: "play none none none",
                    onEnter: () => {
                        gsap.to(videoRef1.current, { opacity: 1 });
                        videoRef1.current.play(); // Play video normally
                    },
                    onLeave: () => {
                        gsap.to(videoRef1.current, { opacity: 0 });
                        // videoRef.current.pause(); // Pause video
                        // videoRef.current.currentTime = videoRef.current.duration; // Go to the end
                        // videoRef.current.playbackRate = -1; // Set playback rate to reverse
                        // videoRef.current.play(); // Play in reverse
                    },
                    onEnterBack: () => {
                        gsap.to(videoRef1.current, { opacity: 1 });
                        videoRef1.current.play(); // Play video normally
                    },
                    onLeaveBack: () => {
                        gsap.to(videoRef1.current, { opacity: 0 });
                        // videoRef.current.pause(); // Pause video
                        // videoRef.current.currentTime = videoRef.current.duration; // Go to the end
                        // videoRef.current.playbackRate = -1; // Set playback rate to reverse
                        // videoRef.current.play(); // Play in reverse
                    }
                }
            });
    }, []);

    return (
        <>
            {/* Desktop */}
            <div className='hidden sm:flex w-full h-screen bg-[#DBD9DC]'>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    muted
                    className='w-full h-full object-cover object-center'
                ></video>
            </div>

            {/* Mobile */}
            <div className='flex w-full h-[45vh] justify-center bg-[#DBD9DC] sm:hidden'>
                <video
                    ref={videoRef1}
                    src={videoSrc}
                    autoPlay
                    muted
                    className='w-full h-full object-cover object-center'
                ></video>
            </div>

        </>
    );
}

export default Page1Animation1;