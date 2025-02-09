import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Routing from './utils/Routing';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';

const App = () => {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleRightClick = event => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);

  const handleVideoEnd = () => {
    setLoading(false);
  };

  // Check if the view is mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div className='w-full min-h-screen bg-[#DCD9DC] overflow-x-hidden'>
      {loading && location.pathname === '/' && !isMobile ? (
        <div className='w-full h-screen bg-[#DCD9DC] flex items-center justify-center overflow-hidden'>
          <motion.video
            ref={videoRef}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            src="https://res.cloudinary.com/dlchhddqg/video/upload/v1732384430/Ox-Link-Assets/Videos/vbubjyv2mwtr8mbnlk7h.mp4"
            className="preloader-video w-full cursor-none"
          >
          </motion.video>
        </div>
      ) : (
        <div
        >
          <ScrollToTop />
          <Navbar />
          <Routing />
        </div>
      )}
    </div>
  );
}

export default App;
// bg-[#CCCACD]