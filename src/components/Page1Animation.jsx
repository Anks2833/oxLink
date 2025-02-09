import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function Page1Animation() {

    const videoSrc = 'https://res.cloudinary.com/dlchhddqg/video/upload/v1731923443/Ox-Link-Assets/Videos/jdj7iymramcikn6kb8kb.mp4';

    return (
        <>
            {/* For desktop */}
            <div className='hidden sm:flex max-w-[100vw] h-full bg-[#DBD9DC] pt-16 justify-center items-center'>
                <video
                    src={videoSrc}
                    autoPlay
                    muted
                    loop
                    className='w-full h-[100vh] object-cover bg-[#DBD9DC]'
                ></video>
            </div>

            {/* For mobile */}
            <div className='flex w-full h-screen bg-[#cdcace] justify-center items-center sm:hidden'>
                <video
                    src="../../mobile-anim.mp4"
                    autoPlay
                    muted
                    loop
                    className='w-[85vw] h-[85vh] object-cover'
                ></video>
            </div>

        </>
    );
}

export default Page1Animation;