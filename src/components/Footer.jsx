import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { FcOnlineSupport } from "react-icons/fc";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { BsQrCodeScan } from "react-icons/bs";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

// import BottomLeftAnimation from './footeranimations/BottomLeftAnimation';

const Footer = () => {

    const footerRef = useRef(null);
    const [productLinks, setProductLinks] = React.useState([]);
    const [phoneNumber, setPhoneNumber] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [facebookLink, setFacebookLink] = React.useState(null);
    const [instagramLink, setInstagramLink] = React.useState(null);
    const [linkedinLink, setLinkedinLink] = React.useState(null);
    const [youtubeLink, setYoutubeLink] = React.useState(null);

    useEffect(() => {
        fetch("https://ox-admin.wtmmedia.com/api/company")
            .then(res => res.json())
            .then((data) => {
                setPhoneNumber(data.data[0]?.phoneNumber1 || 'No Data Available');
                setEmail(data.data[0]?.infoEmail || 'No Data Available');
                setFacebookLink(data.data[0]?.facebookLink || 'No Data Available');
                setInstagramLink(data.data[0]?.instagramLink || 'No Data Available');
                setLinkedinLink(data.data[0]?.linkedinLink || 'No Data Available');
                setYoutubeLink(data.data[0]?.youtubeLink || 'No Data Available');
            })
    }, []);


    useEffect(() => {
        fetch("https://ox-admin.wtmmedia.com/api/category")
            .then(res => res.json())
            .then((data) => {
                setProductLinks(data.data);
            })
    }, []);
    const qucikLinks = [
        { id: 1, name: "About Us", link: "/about" },
        { id: 2, name: "Careers", link: "/career" },
        // { id: 3, name: "Support", link: "/support" },
        { id: 4, name: "Blog", link: "/blog" },
        { id: 5, name: "Terms & Conditions", link: "/terms" },
        { id: 6, name: "E-Catalog Menu", link: "/src/assets/files/Ox-LinkBrochure.pdf" },
    ];


    const contact = [
        { id: 1, icon: <FaPhoneAlt />, content: "+91-9821118868 , +91-9821117343" },
        { id: 2, icon: <IoMail />, content: "info@ox-link.in" },
        { id: 3, icon: <FaLocationDot />, content: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi-110048" },
    ]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const footerText = document.querySelectorAll('.footer-text');
        const footerText1 = document.querySelectorAll('.footer-text-1');
        const icon = document.querySelectorAll('.icon');

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
            }
        });

        tl.fromTo(footerText,
            { x: -100 },
            { x: 140, duration: 1, ease: 'linear' },
            0
        );

        tl.fromTo(footerText1,
            { x: -100 },
            { x: 140, duration: 1, ease: 'linear' },
            0
        );

        tl.fromTo(icon,
            { opacity: 0 },
            { opacity: 1, ease: 'linear' },
            0
        );

    }, []);

    return (
        <>
            {/* Desktop */}
            <div ref={footerRef} className='hidden sm:flex footer-container relative w-full flex-col pt-[10vh] pb-5'>

                {/* 
                    <div className='w-fit absolute flex'>
                        <BottomLeftAnimation />
                        <BottomLeftAnimation />
                        <BottomLeftAnimation />
                    </div> 
                */}

                {/* Top part */}
                <div className='w-full min-h-20 flex justify-evenly items-center pb-10 border-b border-b-zinc-400'>

                    <div className='flex items-center justify-center gap-4'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='w-fit text-[4vw]'
                        >
                            <FcOnlineSupport />
                        </motion.div>

                        <div className='w-[20vw] flex flex-col leading-none overflow-hidden'>
                            <motion.p
                                initial={{ translateX: "-100%" }}
                                whileInView={{ translateX: "0%" }}
                                transition={{ duration: 0.5 }}
                                className='text-3xl font-semibold text-black leading-none mb-2'
                            >
                                EXPERT ASSISTANCE
                            </motion.p>

                            <motion.p
                                initial={{ translateX: "-100%" }}
                                whileInView={{ translateX: "0%" }}
                                transition={{ duration: 0.5 }}
                                className='text-lg text-black leading-none'
                            >
                                DIAL: {`+91 ${phoneNumber}`}
                            </motion.p>
                        </div>

                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className='w-fit text-[4vw] text-blue-800'
                        >
                            <FaEnvelopeOpenText />
                        </motion.div>

                        <div className='w-[20vw] flex flex-col leading-none overflow-hidden'>
                            <motion.p
                                initial={{ translateX: "-100%" }}
                                whileInView={{ translateX: "0%" }}
                                transition={{ duration: 0.5 }}
                                className='text-3xl font-semibold text-black leading-none mb-2'
                            >
                                WRITE TO US
                            </motion.p>

                            <motion.p
                                initial={{ translateX: "-100%" }}
                                whileInView={{ translateX: "0%" }}
                                transition={{ duration: 0.5 }}
                                className='text-lg text-black leading-none'
                            >
                                EMAIL: {email}
                            </motion.p>
                        </div>
                    </div>


                </div>

                {/* Bottom part */}
                <div className='w-full pt-6 flex justify-evenly items-start'>

                    {/* Logo and socials */}
                    <div className='w-1/4 h-full'>

                        <div className='flex flex-col items-center justify-center gap-2 leading-none'>
                            <img className='ml-60 leading-3' src="/logo-only.png" alt="logo" />
                            <h1 className='text-[3vw] text-[#002A77] font-semibold leading-7'>OX-LINK</h1>
                            <h1 className='text-lg leading-none'>Next-Gen Cable Solutions</h1>

                            <div className='flex items-center gap-3'>
                                <a href={facebookLink} target="_blank" rel="noopener noreferrer">
                                    <FaFacebookSquare className='text-2xl text-black cursor-pointer' />
                                </a>
                                <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='text-2xl text-black cursor-pointer' />
                                </a>
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                                    <FaSquareInstagram className='text-2xl text-black cursor-pointer' />
                                </a>
                                <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
                                    <FaSquareYoutube className='text-2xl text-black cursor-pointer' />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Quick Links and Product Links */}
                    <div className='w-3/4 h-full'>
                        {/* Links */}
                        <div className='flex justify-around'>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold'>Quick Links</h1>

                                {qucikLinks.map((item) => {
                                    if (item.id === 6) { // E-Catalog Menu
                                        return (
                                            <a
                                                key={item.id}
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-fit text-lg"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(item.link, '_blank');
                                                }}
                                                download="ox-link-e-catalog.pdf"
                                            >
                                                {item.name}
                                            </a>
                                        );
                                    }
                                    return (
                                        <NavLink className="w-fit text-lg" key={item.id} to={item.link}>
                                            {item.name}
                                        </NavLink>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold'>Product</h1>

                                {productLinks.map((item) => (
                                    <NavLink className="w-fit text-lg" key={item.id} to={`/${item.slug}`}>
                                        {item.title}
                                    </NavLink>
                                ))}

                            </div>

                        </div>

                        <div className='flex gap-6 ml-36 mt-20'>
                            <NavLink to="/privacy" className='text-xl text-blue-800 cursor-pointer font-semibold'>
                                Privacy
                            </NavLink>

                            <NavLink to="/terms" className='text-xl border-l-2 border-l-black px-10 text-blue-800 cursor-pointer font-semibold'>
                                Terms of us
                            </NavLink>

                            {/* <NavLink to="/sitemap" className='text-xl text-[#0FBBEB] cursor-pointer font-semibold'>
                                Sitemap
                            </NavLink> */}
                        </div>

                    </div>

                    {/* Get in touch */}
                    <div className='w-1/3 h-full flex flex-col gap-32 mt-3'>

                        <div>
                            <h1 className='text-2xl font-bold'>Get in touch</h1>

                            <h1 className='text-lg font-semibold text-[#002A77]'>OX-LINK ELECTRONICS LLP</h1>
                        </div>

                        <div className='flex flex-col items-end gap-3 pr-20'>

                            <div className='w-56 h-28 bg-green-500 rounded-xl flex items-center justify-center gap-2'>

                                <div>
                                    <h1 className='text-white font-semibold leading-none text-2xl'>SCAN</h1>
                                    <h1 className='font-semibold text-4xl leading-none'>ME!</h1>
                                </div>

                                <div>
                                    <MdOutlineKeyboardDoubleArrowRight className='text-white text-4xl' />
                                </div>

                                <div>
                                    <BsQrCodeScan className='bg-white text-7xl p-3 rounded-xl' />
                                </div>

                            </div>

                            <h1 className='text-lg text-right font-semibold'>© <span className='text-[#0FBBEB]'>2024</span> <span className='text-[#002A77]'>OX-LINK ELECTRONICS LLP</span></h1>
                        </div>

                    </div>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex sm:hidden relative w-full min-h-[50vh] flex-col pt-[10vh] pb-5'>

                {/* Top part */}
                <div className='w-full min-h-20 flex flex-col items-center gap-6 pb-10 border-b border-b-zinc-400'>

                    <div className='relative flex items-center justify-center gap-2 overflow-hidden'>
                        <motion.div
                            initial={{ translateY: "100%" }}
                            whileInView={{ translateY: "0%" }}
                            transition={{ duration: 1 }}
                            className='w-fit text-[10vw]'
                        >
                            <FcOnlineSupport />
                        </motion.div>

                        <motion.div

                            initial={{ translateY: "100%" }}
                            whileInView={{ translateY: "0%" }}
                            transition={{ duration: 1 }}
                            className='w-full flex flex-col leading-none overflow-hidden'
                        >
                            <p className='text-lg font-semibold text-black leading-none'>EXPERT ASSISTANCE</p>
                            <p className='text-sm text-black leading-none'>DIAL: +91 982 111 8868</p>
                        </motion.div>
                    </div>

                    <div className='relative flex items-center justify-center gap-2 overflow-hidden'>
                        <motion.div
                            initial={{ translateY: "100%" }}
                            whileInView={{ translateY: "0%" }}
                            transition={{ duration: 1 }}
                            className='w-fit text-[8vw] text-blue-800'
                        >
                            <FaEnvelopeOpenText />
                        </motion.div>

                        <motion.div
                            initial={{ translateY: "100%" }}
                            whileInView={{ translateY: "0%" }}
                            transition={{ duration: 1 }}
                            className='w-full flex flex-col leading-none overflow-hidden'
                        >
                            <p className='text-lg font-semibold text-black leading-none'>WRITE TO US</p>
                            <p className='text-sm text-black leading-none'>EMAIL: INFO@OX-LINK.com</p>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom part */}
                <div className='w-full min-h-20 pt-6 flex flex-col items-start'>

                    {/* Logo and socials */}
                    <div className='w-full h-full flex flex-col items-start pl-6'>
                        <div className='flex flex-col gap-8 items-start leading-none'>
                            <img className='w-24 leading-3' src="/footer-img.png" alt="logo" />

                            {/* Contact */}
                            <div className='flex flex-col justify-center gap-5 text-black'>
                                {contact.map((con) => {
                                    return (
                                        <div className='flex items-center gap-2' key={con.id}>
                                            <div className='w-fit text-blue-800'>{con.icon}</div>
                                            <h1 className='text-sm'>{con.content}</h1>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Socials */}
                            <div className='flex items-center gap-3 mt-4'>
                                <FaFacebookSquare className='text-2xl text-[#0c4cd7] cursor-pointer' />
                                <FaLinkedin className='text-2xl text-[#0077B5] cursor-pointer' />
                                <FaSquareInstagram className='text-2xl text-[#d62976] cursor-pointer' />
                                <FaSquareYoutube className='text-2xl text-[#CD201F] cursor-pointer' />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links and Product Links */}
                    <div className='w-full h-full mt-8 flex flex-col items-start pl-6'>
                        {/* Links */}
                        <div className='flex flex-col items-start gap-8'>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold underline'>Quick Links</h1>

                                {qucikLinks.map((item) => (
                                    <NavLink className="w-fit text-lg" key={item.id} to={item.link}>{item.name}</NavLink>
                                ))}
                            </div>

                            <div className='flex flex-col gap-2'>
                                <h1 className='text-2xl font-bold underline'>Product</h1>

                                {productLinks.map((item) => (
                                    <NavLink className="w-fit text-lg" key={item.id} to={item.link}>{item.name}</NavLink>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Get in touch */}
                    <div className='w-full h-full flex flex-col items-start gap-6 pl-6 mt-12'>

                        <div>
                            <h1 className='text-2xl font-bold underline'>Get in touch</h1>

                            <h1 className='text-lg font-semibold text-[#002A77]'>OX-LINK ELECTRONICS LLP</h1>
                        </div>

                        <div className='flex flex-col items-start gap-3'>

                            <div className='w-56 h-28 bg-green-500 rounded-xl flex items-center justify-center gap-2'>

                                <div>
                                    <h1 className='text-white font-semibold leading-none text-2xl'>SCAN</h1>
                                    <h1 className='font-semibold text-4xl leading-none'>ME!</h1>
                                </div>

                                <div>
                                    <MdOutlineKeyboardDoubleArrowRight className='text-white text-4xl' />
                                </div>

                                <div>
                                    <BsQrCodeScan className='bg-white text-7xl p-3 rounded-xl' />
                                </div>

                            </div>

                            <h1 className='text-lg text-right font-semibold'>© <span className='text-[#0FBBEB]'>2024</span> <span className='text-[#002A77]'>OX-LINK ELECTRONICS LLP</span></h1>
                        </div>

                    </div>

                    {/* Privacy, terms and site map */}
                    <div className='w-full flex justify-center gap-6 mt-20'>
                        <h1 className='text-xs text-blue-800 font-semibold'>
                            Privacy
                        </h1>

                        <h1 className='text-xs border-l-2 border-l-black px-10 text-blue-800 font-semibold'>
                            Terms of us
                        </h1>

                        {/* <h1 className='text-xs text-blue-800 font-semibold'>
                            Sitemap
                        </h1> */}
                    </div>
                </div>

            </div>

        </>
    )
}

export default Footer