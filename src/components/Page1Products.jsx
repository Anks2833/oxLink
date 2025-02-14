import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CircleGrp1 from './subcomponents/CircleGrp1';
import ProductsContent from './subcomponents/ProductsContent';
import CircleGrp2 from './subcomponents/CircleGrp2';
import CircleGrp3 from './subcomponents/CircleGrp3';
import CircleGrp4 from './subcomponents/CircleGrp4';
import CircleGrp5 from './subcomponents/CircleGrp5';
import CircleGrp6 from './subcomponents/CircleGrp6';
import ProductsContent1 from './subcomponents/ProductsContent1';
import ProductsContent2 from './subcomponents/ProductsContent2';
import ProductsContent3 from './subcomponents/ProductsContent3';
import ProductsContent4 from './subcomponents/ProductsContent4';
import ProductsContent5 from './subcomponents/ProductsContent5';
import LineAnimation from './subcomponents/LineAnimation';
import { motion } from 'framer-motion';

const Page1Products = () => {
    const productsContainerRef = useRef(null);
    const productText = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const element = productsContainerRef.current;

        // element.style.opacity = 0;

        ScrollTrigger.create({
            trigger: element,
            start: "top",
            end: "+=3100",
            pin: true,
            scrub: true,
            onEnter: () => gsap.to(".blue-div", { height: '65%', opacity: 1 }),
            onLeave: () => gsap.to(".blue-div", { height: '0%', opacity: 0 }),
            onEnterBack: () => gsap.to(".blue-div", { height: '65%', opacity: 1 }),
            onLeaveBack: () => gsap.to(".blue-div", { height: '0%', opacity: 0 }),
        });

        ScrollTrigger.create({
            trigger: productText.current,
            start: "+=-50",
            end: "+=1200",
            scrub: true,
            onEnter: () => gsap.to(productText.current, { opacity: 1 }),
            onLeave: () => gsap.to(productText.current, { opacity: 0 }),
            onEnterBack: () => gsap.to(productText.current, { opacity: 1 }),
            onLeaveBack: () => gsap.to(productText.current, { opacity: 0 }),
        });

        gsap.to(".blue-div", {
            x: '-250vw',
            y: '53vw',
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "+=-50",
                end: "+=3000",
                scrub: true,
            }
        });

    }, []);

    return (
        <>
            {/* Desktop */}
            <div ref={productsContainerRef} className='hidden sm:flex relative w-full min-h-screen mt-[85vw] overflow-hidden'>
                <motion.h1
                    ref={productText}
                    initial={{ translate: "-100%", opacity: 0 }}
                    whileInView={{ translate: "0%", opacity: 1 }}
                    transition={{ duration: 3, delay: 0.5 }} // Adjust duration for smoother effect
                    className="product-text text-black absolute z-[52] top-32 left-20 text-[5vw]"
                >
                    Products
                </motion.h1>
                {/* The blue div */}
                <div
                    className='blue-div absolute z-[100] -top-52 -left-32 w-[380vw] h-[30vw] bg-[#c8e3ef]/70 -rotate-12 px-40 pt-10 flex overflow-hidden'
                >
                    <CircleGrp1 />
                    <ProductsContent />
                    <CircleGrp2 />
                    <ProductsContent1 />
                    <CircleGrp3 />
                    <ProductsContent2 />
                    <CircleGrp4 />
                    <ProductsContent3 />
                    <CircleGrp5 />
                    <ProductsContent4 />
                    <CircleGrp6 />
                    <ProductsContent5 />
                </div>

                {/* The canvas */}
                <div className='absolute top-0 left-0 w-full h-full'>
                    <LineAnimation />
                </div>
            </div>

            {/* Mobile */}
            <div className='flex sm:hidden relative w-full min-h-screen -mt-[30vw] overflow-hidden'>
                <motion.h1
                    initial={{ translate: '-100%', opacity: 0 }}
                    whileInView={{ translate: '-30%', opacity: 1, }}
                    transition={{ duration: 1 }}
                    className='product-text text-black absolute z-[1] top-32 left-20 text-[10vw]'
                >
                    Products
                </motion.h1>
                {/* The blue div */}
                <div
                    className='absolute z-[1] top-[50vw] -left-32 w-[200vw] h-[60vw] bg-[#c8e3ef]/70 px-40 -rotate-12 flex items-center overflow-x-scroll overflow-y-hidden'
                >
                    <CircleGrp1 />
                    <ProductsContent />
                    <CircleGrp2 />
                    <ProductsContent1 />
                    <CircleGrp3 />
                    <ProductsContent2 />
                    <CircleGrp4 />
                    <ProductsContent3 />
                    <CircleGrp5 />
                    <ProductsContent4 />
                    <CircleGrp6 />
                    <ProductsContent5 />
                </div>

                {/* The canvas */}
                <div className='absolute top-0 left-0 w-full h-full'>
                    <LineAnimation />
                </div>
            </div>

        </>
    );
}

export default Page1Products;