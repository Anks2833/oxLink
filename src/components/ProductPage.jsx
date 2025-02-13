import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


import { useParams } from 'react-router-dom';
import '../assets/productPage.css';
import Footer from './Footer';

const ProductPage = () => {
    const { categorySlug, productSlug } = useParams();
    const [isVisible, setIsVisible] = useState(true);
    const [overflowStyle, setOverflowStyle] = useState('hidden');
    const [applications, setApplications] = useState(null);
    const [data, setData] = useState({});
    const [description, setDescription] = useState(null);
    const [characteristics, setCharacteristics] = useState(null);
    const [applicationStandard, setApplicationStandard] = useState(null);
    const [outerImage, setOuterImage] = useState(null);
    const [wireImage, setWireImage] = useState(null);
    const [wireImageWithFunctions, setWireImageWithFunctions] = useState(null);
    const [approvalImage, setApprovalImage] = useState(null);
    const [cableName, setCableName] = useState("");


    useEffect(() => {
        fetch(`https://ox-admin.wtmmedia.com/api/products?slug=${productSlug}`)
            .then(res => res.json())
            .then((data) => {
                setData(data.data)
                setCableName(data.data.title)
                // console.log("data", data)
                setApplications(data.data.applications);

                setDescription(data.data.description);

                setCharacteristics(data.data.characteristics);

                setApplicationStandard(data.data.applicableStandard);
                setOuterImage(data.data.image);
                setWireImage(data.data.wireImage);
                setWireImageWithFunctions(data.data.wireInnerImage);
                setApprovalImage(data.data.approvalImage);
            })
    }, [categorySlug, productSlug])
    // const location = useLocation();
    const pageRef = useRef(null);
    const titleRef = useRef(null)

    const svgRef = useRef();
    const headingRef = useRef();
    const heading1Ref = useRef();
    const heading2Ref = useRef();
    const heading3Ref = useRef();
    const heading4Ref = useRef();
    // const heading5Ref = useRef();
    const contentRef = useRef();
    const content1Ref = useRef();
    const content2Ref = useRef();
    const content3Ref = useRef();
    const content4Ref = useRef();
    // const content5Ref = useRef();
    // const content6Ref = useRef();
    // const content7Ref = useRef();
    // const content8Ref = useRef();

    const imgRef = useRef(null);

    const controlSvgRef = useRef();
    const controlOuterSvgRef = useRef();

    const dimensionRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    }, []);

    useEffect(() => {
        const dimensionDiv = dimensionRef.current;


        const tl = gsap.timeline({
            onStart: () => {
                setIsVisible(false); // Hide the dimensionDiv
                setOverflowStyle('hidden'); // Set overflow to hidden
            },
            onEnd: () => {
                setIsVisible(true); // Show the dimensionDiv
                setOverflowStyle('auto'); // Reset overflow to auto
            }
        });

        tl.fromTo(svgRef.current,
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 3
            }
        )
        tl.to(svgRef.current, {
            opacity: 0,
            scale: 0
        });

        tl.fromTo(controlOuterSvgRef.current,
            {
                x: "-100%"
            },
            {
                x: "0%"
            },
            "a"
        )

        tl.fromTo(titleRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1
            },
            "a"
        )

        tl.fromTo(headingRef.current,
            {
                x: "-100%"
            },
            {
                x: "0%"
            },
            "a"
        )

        tl.from(contentRef.current, {
            opacity: 0,
            x: "-100%",
            duration: 1,
        },
            "b"
        );

        tl.fromTo(heading1Ref.current,
            {
                x: "-100%"
            },
            {
                x: "0%"
            },
            "a"
        )

        tl.from(content1Ref.current, {
            opacity: 0,
            x: "-100%",
            duration: 1,
        },
            "b"
        );

        tl.fromTo(heading2Ref.current,
            {
                x: "-100%"
            },
            {
                x: "0%"
            },
            "c"
        )

        tl.from(content2Ref.current, {
            opacity: 0,
            x: "-100%",
            duration: 1,
        },
            "d"
        );

        tl.fromTo(heading3Ref.current,
            {
                x: "-100%"
            },
            {
                x: "0%"
            },
            "c"
        )

        tl.from(content3Ref.current, {
            opacity: 0,
            x: "-100%",
            duration: 1,
        },
            "d"
        );

        tl.fromTo(heading4Ref.current,
            {
                x: "-100%"
            },
            {
                x: "0%"
            }
        )

        tl.from(content4Ref.current, {
            opacity: 0,
            x: "-100%",
            duration: 1,
        });

        tl.fromTo(controlSvgRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        );

        tl.fromTo(imgRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        );


        // Cleanup function
        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            setIsVisible(true);
            setOverflowStyle('auto');
        };

    }, []);



    return (
        <>

            {/* Desktop */}
            <div ref={pageRef} className={`hidden sm:flex w-full min-h-screen pt-32 pb-16 flex-col gap-5 overflow-${overflowStyle}`}>

                <div className='w-fit absolute top-1/2 right-[50%] translate-x-1/2 -translate-y-1/2'>
                    <div className='relative'>
                        <img ref={svgRef} className='w-[40vw]' src={`https://ox-admin.wtmmedia.com/${outerImage}`} alt="svgElem" />


                    </div>
                </div>

                <div className='w-full flex justify-start items-end pl-6'>
                    <h1 ref={titleRef}  style={{ WebkitTextStroke: "0.4px black" }} className='text-4xl font-bold text-[#FFA500]'>{cableName}</h1>
                </div>

                {/* The outer cable image */}
                <div ref={controlOuterSvgRef} className=''>
                    <img src={`https://ox-admin.wtmmedia.com/${wireImage}`} alt="outer-cable-img" />
                </div>

                {/* Application and Product Feature */}
                <div className='w-full grid grid-cols-2 px-16 mt-8'>

                    <div className='flex flex-col overflow-hidden w-1/2'>
                        <h1 ref={headingRef} className='text-[#272880] font-bold text-2xl'>APPLICATION</h1>

                        <div ref={contentRef} className='flex flex-col'>
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: applications }} />
                        </div>
                    </div>

                    <div className='flex flex-col overflow-hidden'>
                        <h1 ref={heading1Ref} className='text-[#272880] font-bold text-2xl'>PRODUCT FEATURES</h1>

                        <div ref={content1Ref} className='flex flex-col flex-wrap'>
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: characteristics }} />
                        </div>
                    </div>

                </div>


                {/* Product BuildUp and Approvals */}
                <div className='w-full grid grid-cols-2 px-16 mt-8'>

                    <div className='flex flex-col gap-1'>
                        <h1 ref={heading2Ref} className='text-[#272880] font-bold text-2xl'>PRODUCT BUILD UP</h1>

                        <div ref={content2Ref} className='flex flex-col gap-1'>
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 pr-10 overflow-hidden'>
                        <h1 ref={heading3Ref} className='text-[#272880] font-bold text-2xl'>APPROVALS</h1>

                        <div ref={content3Ref} className='flex items-center gap-1'>
                            <div className='w-1 h-1 bg-black rounded-full'></div>
                            <p className='text-black text-lg'>Using RoHS* Compliances compounds</p>
                        </div>
                        <div className='mt-2'>
                            <img ref={imgRef} src={`https://ox-admin.wtmmedia.com/${approvalImage}`} alt="ox-control-10-approval" className='block' />
                        </div>


                        <div ref={controlSvgRef} className="flex flex-col items-center gap-4">
                            <img
                                src={`https://ox-admin.wtmmedia.com/${wireImageWithFunctions}`}
                                alt="ox-control-10-svg"
                                className="w-full max-w-md"
                            />
                            <a
                                href={`https://ox-admin.wtmmedia.com/${data.pdf}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                <button className="bg-[#FFA500] text-white py-2 px-4 rounded">
                                    CLICK TO DOWNLOAD DATA SHEET {data.title}
                                </button>
                            </a>
                        </div>


                    </div>

                </div>

                {/* Technical Data */}
                <div className="w-full grid grid-cols-1 px-16 mt-8 overflow-hidden">
                    <div className="w-full flex flex-col">
                        <h1
                            ref={heading4Ref}
                            className="text-[#272880] font-bold text-2xl mb-1"
                        >
                            TECHNICAL DATA
                        </h1>

                        <div ref={content4Ref} className="flex flex-col gap-2">
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: applicationStandard }} />
                        </div>
                    </div>
                </div>

                <div className="-mt-[50vw] sm:mt-[2vw]">
                    <Footer />
                </div>
            </div>

            {/* Mobile */}
            <div className={`flex sm:hidden w-full min-h-screen pt-20 pb-16 flex-col gap-5 overflow-${overflowStyle}`}>

                {/* <div className='w-fit absolute top-1/2 right-[50%] translate-x-1/2 -translate-y-1/2'>
                    <div className='relative'>
                        <img ref={svgRef} className='w-[40vw]' src={`https://ox-admin.wtmmedia.com/${outerImage}`} alt="svgElem" />


                    </div>
                </div> */}

                {/* The outer cable image */}
                <div className=''>
                    <img src={`https://ox-admin.wtmmedia.com/${wireImage}`} alt="outer-cable-img" />
                </div>

                {/* Application and Product Feature */}
                <div className='w-full min-h-20 flex flex-col px-8'>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#272880] font-bold text-2xl'>APPLICATION</h1>

                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: applications }} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#272880] font-bold text-2xl'>PRODUCT FEATURES</h1>

                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: characteristics }} />
                        </div>
                    </div>

                </div>


                {/* Product BuildUp and Approvals */}
                <div className='w-full min-h-20 flex flex-col gap-10 px-8'>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#272880] font-bold text-2xl'>PRODUCT BUILD UP</h1>

                        <div className='flex flex-col gap-1'>
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[#272880] font-bold text-2xl'>APPROVALS</h1>

                        <div className='flex items-center gap-1'>
                            <div className='w-1 h-1 bg-black rounded-full'></div>
                            <p className='text-black text-lg'>Using RoHS* Compliances compounds</p>
                        </div>
                        <div className='mt-2'>
                            <img src={`https://ox-admin.wtmmedia.com/${approvalImage}`} alt="ox-control-10-approval" className='block' />
                        </div>


                        <div className="flex flex-col items-center gap-4">
                            <img
                                src={`https://ox-admin.wtmmedia.com/${wireImageWithFunctions}`}
                                alt="ox-control-10-svg"
                                className="w-full max-w-md"
                            />
                            <a
                                href={`https://ox-admin.wtmmedia.com/${data.pdf}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                <button className="bg-[#FFA500] text-white py-2 px-4 rounded">
                                    CLICK TO DOWNLOAD DATA SHEET {data.title}
                                </button>
                            </a>
                        </div>


                    </div>

                </div>

                {/* Technical Data */}
                <div className="w-full min-h-20 flex flex-col px-8">
                    <div className="w-full flex flex-col">
                        <h1
                            className="text-[#272880] font-bold text-2xl mb-1"
                        >
                            TECHNICAL DATA
                        </h1>

                        <div className="flex flex-col gap-2">
                            <div className='flex flex-col' dangerouslySetInnerHTML={{ __html: applicationStandard }} />
                        </div>
                    </div>
                </div>

                <div className="">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default ProductPage