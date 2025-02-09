import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('https://ox-admin.wtmmedia.com/api/company')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setAboutData(data.data[0]?.about || 'No information available');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setAboutData('Failed to load data');
      });
  }, []);

  return (
    <>
      {/* For desktop */}
      <div className="hidden sm:flex w-full min-h-screen bg-[#DBD9DC] pt-40 flex-col gap-4">
        <div className="w-full px-44">
          <h1 className="text-2xl text-[#f99938] font-semibold border-b border-b-gray-400">
            About OX-Link Electronics LLP
          </h1>
        </div>

        <div className="w-full flex flex-col gap-10 px-44">
          {aboutData ? (
            <p
              className="text-base text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutData }}
            />
          ) : (
            <p className="text-base text-gray-500">Loading...</p>
          )}
        </div>

        <div className="mt-5">
          <Footer />
        </div>
      </div>

      {/* For mobile */}
      <div className="flex sm:hidden w-full min-h-screen bg-[#DBD9DC] pt-20 flex-col gap-4">
        <div className="w-full px-3">
          <motion.h1 className="text-lg text-[#f99938] font-semibold border-b border-b-gray-400 overflow-hidden">
            About OX-Link Electronics LLP
          </motion.h1>
        </div>

        <div className="w-full flex flex-col gap-10 px-3">
          {aboutData ? (
            <p
              className="text-sm text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: aboutData }}
            />
          ) : (
            <p className="text-sm text-gray-500">Loading...</p>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
