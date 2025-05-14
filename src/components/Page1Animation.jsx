import React, { useState, useEffect, useRef } from "react";
// import axios from 'axios';

function Page1Animation() {
  const videoRefDesktop = useRef(null);
  const videoRefDesktop1 = useRef(null);
  const videoRefMobile = useRef(null);
  const videoRefMobile1 = useRef(null);

  // const videoSrc = 'https://res.cloudinary.com/dlchhddqg/video/upload/v1731923443/Ox-Link-Assets/Videos/jdj7iymramcikn6kb8kb.mp4';
  const videoSrc = "/videos/mainanimation.mp4";
  const videoSrc1 = "/videos/textonly.mp4";
  const videoDesSrc = "/videos/video1.mp4";

  // Function to ensure videos play on iOS
  const forcePlayVideos = () => {
    if (videoRefDesktop.current) {
      videoRefDesktop.current
        .play()
        .catch((e) => console.log("Desktop autoplay failed:", e));
    }
    if (videoRefMobile.current) {
      videoRefMobile.current
        .play()
        .catch((e) => console.log("Mobile autoplay failed:", e));
    }
  };

  useEffect(() => {
    // Add touch/click event listeners for iOS
    document.addEventListener("touchstart", forcePlayVideos, { once: true });
    document.addEventListener("click", forcePlayVideos, { once: true });

    // Manual initialization of video attributes for iOS
    if (videoRefDesktop.current) {
      videoRefDesktop.current.playsInline = true;
      videoRefDesktop.current.muted = true;
      videoRefDesktop.current.setAttribute("webkit-playsinline", "true");
      videoRefDesktop.current.load();

      // Try to play after a small delay
      setTimeout(() => {
        videoRefDesktop.current
          .play()
          .catch((e) => console.log("Desktop delayed play failed:", e));
      }, 100);
    }

    if (videoRefMobile.current) {
      videoRefMobile.current.playsInline = true;
      videoRefMobile.current.muted = true;
      videoRefMobile.current.setAttribute("webkit-playsinline", "true");
      videoRefMobile.current.load();

      // Try to play after a small delay
      setTimeout(() => {
        videoRefMobile.current
          .play()
          .catch((e) => console.log("Mobile delayed play failed:", e));
      }, 100);
    }

    // Cleanup
    return () => {
      document.removeEventListener("touchstart", forcePlayVideos);
      document.removeEventListener("click", forcePlayVideos);
    };
  }, []);

  return (
    <>
      {/* For desktop */}
      {/* <div className="hidden sm:flex max-w-[100vw] h-full bg-[#DBD9DC] pt-16 justify-center items-center">
        <video
          ref={videoRefDesktop}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          loop
          className="w-full h-[100vh] object-cover bg-[#DBD9DC]"
        ></video>

        <video
          ref={videoRefDesktop1}
          src={videoSrc1}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          loop
          className="absolute bottom-10 left-72 w-80 h-40 object-cover bg-[#DBD9DC]"
        ></video>
      </div> */}

      <div className="hidden sm:flex max-w-[100vw] h-full bg-[#DBD9DC] pt-16 justify-center items-center">
        <video
          ref={videoRefDesktop}
          src={videoDesSrc}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          loop
          className="w-full h-[100vh] object-cover bg-[#DBD9DC]"
        ></video>
      </div>

      {/* For mobile */}
      <div className="flex w-full h-screen justify-center items-center sm:hidden">
        <video
          ref={videoRefMobile}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          loop
          className="w-full h-full rotate-90"
        ></video>

        <video
          ref={videoRefMobile1}
          src={videoSrc1}
          autoPlay
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          loop
          className="absolute bottom-52 left-1/2 -translate-x-1/2 w-40 h-20 object-cover bg-[#DBD9DC]"
        ></video>
      </div>
    </>
  );
}

export default Page1Animation;
