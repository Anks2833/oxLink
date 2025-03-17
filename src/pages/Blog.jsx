import React, { useState, useEffect } from 'react';
import { SlCalender } from "react-icons/sl";
import { BsArrowUp } from "react-icons/bs";
import { FaUser, FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import '../styles/blogs.css';

const Blog = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    // Handle scroll for progress bar and scroll-to-top button
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            
            if (window.scrollY > 500) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Blog content array
    const blogContent = [
        { id: 1, title: "What are Ethernet Cables?", content: "Ethernet cables are the unsung heroes of our digital world, connecting our devices to the internet and local networks. They come in various categories, each with different capabilities and performance levels. Let's dive into the world of Cat5e, Cat6, Cat6a, Cat7, and Cat8 cables to unravel their differences and understand which one suits your needs best." },
        { id: 2, title: "Understanding Cat5e Cables", content: "" },
        { id: 3, title: "Features of Cat5e Cables", content: "Cat5e cables are like the reliable Toyota Corolla of the Ethernet cable world - affordable, versatile, and suitable for most everyday needs. They support speeds up to 1 gigabit per second and are excellent for casual internet usage, home networks, and small businesses." },
        { id: 4, title: "Common Uses of Cat5e Cables", content: "You'll often find Cat5e cables snaking their way around homes, offices, and classrooms, connecting computers, printers, gaming consoles, and other devices to routers and switches. They're perfect for streaming Netflix, scrolling through social media, and getting work done without breaking the bank." },
        { id: 5, title: "Exploring Cat6 Cables", content: "" },
        { id: 6, title: "Key Characteristics of Cat6 Cables", content: "Cat6 cables are like the upgraded sports car of Ethernet cables - faster, more efficient, and ready to handle heavy data traffic. They support speeds up to 10 gigabits per second and offer better insulation to reduce crosstalk and interference." },
        { id: 7, title: "Benefits of Upgrading to Cat6 Cables", content: "Upgrading to Cat6 cables is like trading in your old smartphone for the latest model - you'll experience smoother and more consistent internet speeds, ideal for large file transfers, online gaming, and video conferencing. If you want a bit more oomph in your network, Cat6 cables are the way to go." },
        { id: 8, title: "Advantages of Cat6a Cables", content: "" },
        { id: 9, title: "Enhanced Performance of Cat6a Cables", content: "Cat6a cables are the superheroes of the Ethernet cable world - faster, stronger, and capable of leaping tall data demands in a single bound. They support speeds up to 10 gigabits per second over longer distances and provide better resistance to alien crosstalk." },
        { id: 10, title: "Applications of Cat6a Cables", content: "Cat6a cables are like the VIP pass to the high-speed internet party, perfect for data centers, server rooms, and environments where peak performance is non-negotiable. If you're serious about future-proofing your network and maximizing data transfer speeds, Cat6a cables are the top choice.**The Enhanced Performance of Cat7 Cables**", content1: "If you're looking to ramp up your network's performance, Cat7 cables might just be the high-speed solution you need. These cables are like the espresso shots of the networking world, offering enhanced speed and performance compared to their predecessors." },
        { id: 11, title: "Features and Specifications of Cat7 Cables", content: "Cat7 cables boast impressive features and specifications that set them apart from the pack. With their shielding technology and twisted wire construction, Cat7 cables minimize interference and crosstalk, providing a clearer and faster signal transmission. They can support bandwidths of up to 600 MHz, making them ideal for high-speed data transfers and demanding applications." },
        { id: 12, title: "Speed and Performance Comparison with Previous Versions", content: "Compared to Cat5e, Cat6, and even Cat6a cables, Cat7 cables take the speed game up a notch. Their ability to handle higher frequencies and larger data volumes means smoother and more reliable network performance. If you're all about that need for speed, Cat7 cables are definitely worth considering." },
        { id: 13, title: "Cat8 Cables: The Latest in Ethernet Technology", content: "Enter Cat8 cables, the shiny new toys in the world of Ethernet technology. These cables are the trendsetters, pushing boundaries and raising the bar when it comes to network performance." },
        { id: 14, title: "Introduction to Cat8 Cables", content: "Cat8 cables are the cool kids on the block, offering blazing fast speeds and top-notch reliability. With their impressive bandwidth capacity of up to 2 GHz, Cat8 cables are designed to handle the demands of modern networks with ease." },
        { id: 15, title: "Benefits and Potential Applications of Cat8 Cables", content: "From gaming to streaming and everything in between, Cat8 cables promise to deliver a seamless networking experience. Their superior performance and future-proof design make them ideal for high-bandwidth applications and environments where speed is of the essence." },
        { id: 16, title: "A Comparison of Cat5e, Cat6, Cat6a, Cat7, and Cat8 Cables", content: "In the jungle of Ethernet cables, navigating the differences among Cat5e, Cat6, Cat6a, Cat7, and Cat8 can feel like a wild adventure. Each cable category has its strengths and weaknesses, so understanding their nuances is crucial in choosing the right cable for your networking needs." },
        { id: 17, title: "Overview of Different Cable Categories", content: "From the reliable workhorse Cat5e to the speed demons Cat7 and Cat8, each cable category brings something unique to the table. Whether you prioritize affordability, speed, or future-proofing, there's a cable type that fits your requirements." },
        { id: 18, title: "Key Differences and Considerations for Choosing the Right Cable Type", content: "When it comes to choosing between Cat5e, Cat6, Cat6a, Cat7, and Cat8 cables, it all boils down to your specific needs and budget. Consider factors like data speed requirements, cable length, and future scalability to make an informed decision. Remember, the right cable can make all the difference in your network's performance.In conclusion, the world of Ethernet cables is diverse, with each category offering distinct advantages and performance enhancements. Whether you opt for the reliability of Cat5e, the speed of Cat6, the superior performance of Cat6a, the advanced features of Cat7, or the cutting-edge technology of Cat8, understanding the differences among these cables is crucial for optimizing your network infrastructure. By choosing the right Ethernet cable that aligns with your specific requirements, you can ensure seamless data transmission and reliable connectivity in your digital environment." },
    ];

    // Create table of contents from blog sections
    const tableOfContents = blogContent
        .filter(item => item.content !== "") // Filter out empty sections
        .map(item => ({
            id: item.id,
            title: item.title
        }));

    // Group blog content into sections
    const mainSections = [
        { title: "Introduction", items: blogContent.slice(0, 2) },
        { title: "Cat5e Cables", items: blogContent.slice(2, 5) },
        { title: "Cat6 Cables", items: blogContent.slice(5, 8) },
        { title: "Cat6a Cables", items: blogContent.slice(8, 10) },
        { title: "Cat7 Cables", items: blogContent.slice(10, 13) },
        { title: "Cat8 Cables", items: blogContent.slice(13, 16) },
        { title: "Comparison", items: blogContent.slice(16, 19) }
    ];

    return (
        <div className="blog-container">
            {/* Reading progress bar */}
            {/* <div className="reading-progress-bar" style={{ width: `${scrollProgress}%` }}></div> */}
            
            {/* Hero section */}
            <motion.div 
                className="blog-hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="blog-hero-overlay"></div>
                <motion.h1 
                    className="blog-hero-title"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    OUR BLOGS
                </motion.h1>
            </motion.div>
            
            <div className="blog-content-container">
                <div className="blog-main">
                    {/* Blog header */}
                    <motion.div 
                        className="blog-header"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <div className="blog-meta">
                            <div className="blog-date">
                                <SlCalender />
                                <span>13 Nov 2024</span>
                            </div>
                        </div>
                        
                        <h1 className="blog-title">The Differences Among Cat5e, Cat6, Cat6a, Cat7, and Cat8 Cables</h1>
                        
                        <div className="blog-intro">
                            <p>Ethernet cables are the backbone of modern networking, facilitating the transmission of data between devices in homes, offices, and data centers. Understanding the differences among Cat5e, Cat6, Cat6a, Cat7, and Cat8 cables is essential for making informed decisions when setting up a network infrastructure. Each category offers unique features and capabilities that cater to specific requirements in terms of speed, bandwidth, and performance. In this article, we will delve into the characteristics of these Ethernet cable types, explore their advantages, and provide insights into selecting the most suitable option for your networking needs.</p>
                        </div>
                    </motion.div>
                    
                    {/* Table of contents - mobile only */}
                    <div className="blog-toc-mobile">
                        <details>
                            <summary>Table of Contents</summary>
                            <ul>
                                {tableOfContents.map((item) => (
                                    <li key={`toc-${item.id}`}>
                                        <a href={`#section-${item.id}`}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </div>
                    
                    {/* Blog content */}
                    <div className="blog-sections">
                        <h2 className="section-title">Introduction to Ethernet Cables</h2>
                        
                        {mainSections.map((section, sectionIndex) => (
                            <div key={`section-${sectionIndex}`} className="blog-section">
                                {section.title !== "Introduction" && (
                                    <h2 className="section-title">{section.title}</h2>
                                )}
                                
                                {section.items.map((blog) => (
                                    <motion.div 
                                        key={blog.id} 
                                        id={`section-${blog.id}`}
                                        className={`blog-item ${!blog.content ? 'blog-item-empty' : ''}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {blog.content && (
                                            <>
                                                <h3 className="blog-item-title">{blog.title}</h3>
                                                <div className="blog-item-content">
                                                    <p>{blog.content}</p>
                                                    {blog.content1 && <p>{blog.content1}</p>}
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Sidebar - desktop only */}
                <div className="blog-sidebar">
                    <div className="sidebar-section toc-section">
                        <h3>Table of Contents</h3>
                        <ul className="toc-list">
                            {tableOfContents.map((item) => (
                                <li key={`sidebar-${item.id}`}>
                                    <a href={`#section-${item.id}`}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Scroll to top button */}
            {/* <motion.button 
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <BsArrowUp />
            </motion.button> */}
            
            <Footer />
        </div>
    );
};

export default Blog;