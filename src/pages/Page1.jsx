import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Page1Animation from '../components/Page1Animation';
import Vision from '../components/Vision';
import Mission from '../components/Mission';
import Value from '../components/Value';
import Footer from '../components/Footer';
import Page1Animation1 from '../components/Page1Animation1';
import Page1Products from '../components/Page1Products';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page1 = () => {

  const location = useLocation();

  useEffect(() => {

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [location]);

  return (
    <div className='flex flex-col'>
      <Page1Animation />

      <Page1Animation1 />

      <Vision />

      <Mission />

      <Value />

      <Page1Products />

      <div className="-mt-[50vw] sm:mt-[200vw]">
        <Footer />
      </div>
    </div>
  )
}

export default Page1
// bg-[#cdcace]