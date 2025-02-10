import { useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CableLineAnimation from "./productcomponents/CableLineAnimation";
import Footer from "./Footer";

export default function CategoryPage() {
    const { slug } = useParams();  // Capture the slug from the URL path
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState(true); // Track the status of the fetch request

    console.log(slug);  // Log the captured slug (e.g., 'control-cable')

    useEffect(() => {
        // Make sure the URL is correctly formatted
        fetch(`https://ox-admin.wtmmedia.com/api/products?categorySlug=${slug}`)
            .then(res => res.json())
            .then((data) => {
                if (data.status === false || !data.data || data.data.length === 0) {
                    setStatus(false);  // No products found, set status to false
                } else {
                    setProducts(data.data);  // Set products if available
                    setStatus(true);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setStatus(false);  // If an error occurs, set status to false
            });
    }, [slug]); // Update the dependency to slug

    return (
        <>
            {/* For desktop */}
            <div className='hidden sm:flex'>
                <div className='absolute z-10 w-full h-screen flex flex-col justify-start gap-6 pt-40'>

                    <div className='w-full px-28'>
                        <h1 className='product-text text-5xl'>{slug ? slug.toUpperCase() : 'CATEGORY'}</h1>
                    </div>

                    {/* The blue div */}
                    <div className='w-full min-h-52 bg-[#c8e3ef]/70 px-28 py-6 flex flex-col gap-4'>
                        {status === false ? (
                            <h1 className="text-3xl text-center">No products found in category "{slug}"</h1>
                        ) : (
                            products.map((cable, index) => {
                                return (
                                    <NavLink className="w-fit" to={`${cable.slug}`} key={cable.id || index}>
                                        <motion.div
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.1 }}
                                            className='w-fit text-2xl flex items-center gap-1 cursor-pointer'
                                        >
                                            <div className='w-2 h-2 bg-black rounded-full'></div>
                                            <h1 className='product-text text-3xl'>{cable.title}</h1>
                                        </motion.div>
                                    </NavLink>
                                );
                            })
                        )}
                    </div>

                </div>

                {/* Line animation */}
                <CableLineAnimation />
                <div className="-mt-[50vw] sm:mt-[50vw]">
                    <Footer />
                </div>
            </div>

            {/* For mobile */}
            <div className='flex sm:hidden'>
                <div className='absolute z-[9] w-full h-screen flex flex-col justify-start gap-6 pt-24'>

                    <div className='w-full px-8'>
                        <h1 className='product-text text-3xl'>{slug ? slug.toUpperCase() : 'CATEGORY'}</h1>
                    </div>

                    {/* The blue div */}
                    <div className='w-full min-h-52 bg-[#c8e3ef]/70 px-8 py-6 flex flex-col gap-4'>
                        {status === false ? (
                            <h1 className="text-xl text-center">No products found in category "{slug}"</h1>
                        ) : (
                            products.map((cable, index) => {
                                return (
                                    <NavLink className="w-fit" to={`${cable.slug}`} key={cable.id || index}>
                                        <div className='w-fit text-2xl flex items-center gap-2 cursor-pointer'>
                                            <div className='w-2 h-2 bg-black rounded-full'></div>
                                            <h1 className='product-text text-xl'>{cable.title}</h1>
                                        </div>
                                    </NavLink>
                                );
                            })
                        )}
                    </div>

                </div>

                {/* Line animation */}
                {/* <CableLineAnimation /> */}
                <div className="mt-[133vw] sm:mt-[210vw]">
                    <Footer />
                </div>
            </div>
        </>
    );
};
