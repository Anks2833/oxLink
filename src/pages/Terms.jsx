import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import '../styles/terms.css';

const Terms = () => {
  const [activeSection, setActiveSection] = useState(null);
  
  // Terms data
  const terms = [
    { 
      id: "01", 
      title: "General Use", 
      para1: "Ox-Link Electronics provides information on products and services related to Electronics Cable. The content provided on the Website is for general information purposes only and does not constitute a binding offer for any services or products unless explicitly stated otherwise.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "02", 
      title: "Intellectual Property Rights", 
      para1: "All content, including but not limited to images, text, graphics, logos, designs, product descriptions, and other materials available on this Website, are owned by Ox-Link Electronics PVT. LTD. and are protected by intellectual property laws. You may not copy, reproduce, or use any part of the content without express written permission from Ox-Link.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "03", 
      title: "Website Content", 
      para1: "While we strive to ensure the accuracy and timeliness of the information on the Website, Ox-Link makes no guarantees or warranties regarding the accuracy, completeness, or reliability of the content. Information regarding product specifications, pricing, and availability is subject to change without notice.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "04", 
      title: "Prohibited Activities", 
      para1: "Violating any local, national, or international laws or regulations.", 
      para2: "Attempting to gain unauthorized access to any portion of the Website, server, or database.", 
      para3: "Transmitting any malicious software, including viruses or harmful code.", 
      para4: "Using the Website for any fraudulent or misleading activities." 
    },
    { 
      id: "05", 
      title: "Third-Party Links", 
      para1: "The Website may contain links to third-party websites. These links are provided for your convenience, and Ox-Link does not endorse or assume responsibility for any third-party websites or their content. You access third-party websites at your own risk.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "06", 
      title: "Limitation of Liability", 
      para1: "Ox-Link Electronics will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the Website, even if Ox-Link Electronics has been advised of the possibility of such damages. This includes but is not limited to damages resulting from loss of data, loss of profits, or interruptions in service.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "07", 
      title: "Changes to the Terms", 
      para1: "Ox-Link Electronics reserves the right to modify these Terms at any time without prior notice. Your continued use of the Website after any changes are made constitutes your acceptance of the updated Terms. It is your responsibility to review these Terms regularly for updates.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "08", 
      title: "Privacy Policy", 
      para1: "Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data. By using the Website, you consent to the processing of your personal information as described in the Privacy Policy.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "09", 
      title: "Governing Law", 
      para1: "These Terms are governed by and construed in accordance with the laws of Government of India, and you agree to submit to the exclusive jurisdiction of the courts located within India for the resolution of any disputes.", 
      para2: "", 
      para3: "", 
      para4: "" 
    },
    { 
      id: "10", 
      title: "Contact Information", 
      para1: "Ox-Link Electronics PVT. LTD.", 
      para2: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi-110048 (INDIA)", 
      para3: "Email: info@ox-link.in", 
      para4: "Phone: +91-982 111 8868" 
    },
  ];

  // Track scroll position to highlight active section in table of contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements
      const sections = document.querySelectorAll('.terms-section');
      
      // Find the current section
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Function to check if paragraph has content
  const hasPara = (para) => para && para.trim() !== '';

  return (
    <div className="terms-page py-14">
      {/* Hero section */}
      <motion.div 
        className="terms-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="terms-hero-overlay"></div>
        <div className="terms-hero-content">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">TERMS</span> <span className="text-blue-300">&</span> <span className="text-blue-300">CONDITIONS</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Last Updated: December 2024
          </motion.p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="terms-content">
        <div className="terms-container">
          {/* Introduction */}
          <motion.div 
            className="terms-intro"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              Welcome to Ox-Link (the "Website"), your trusted provider of high-quality
              Electronics Cable. By accessing or using the Website, you agree to comply with and
              be bound by the following terms and conditions (the "Terms"). Please read them
              carefully before using the Website. If you do not agree to these Terms, you should
              not use the Website.
            </p>
          </motion.div>

          <div className="terms-main">
            {/* Table of contents - visible on larger screens */}
            <div className="terms-toc">
              <div className="toc-container">
                <h2>Table of Contents</h2>
                <ul>
                  {terms.map((section) => (
                    <li key={section.id} className={activeSection === `section-${section.id}` ? 'active' : ''}>
                      <a href={`#section-${section.id}`}>
                        {section.id}. {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Terms content */}
            <motion.div 
              className="terms-sections"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {terms.map((section) => (
                <motion.section 
                  key={section.id}
                  id={`section-${section.id}`}
                  className="terms-section"
                  variants={fadeIn}
                >
                  <h2 className="section-title">
                    <span className="section-number">{section.id}.</span> {section.title}
                  </h2>
                  
                  <div className="section-content">
                    {/* Display paragraphs conditionally */}
                    {section.id === "04" ? (
                      <ul className="bullet-list">
                        {hasPara(section.para1) && <li>{section.para1}</li>}
                        {hasPara(section.para2) && <li>{section.para2}</li>}
                        {hasPara(section.para3) && <li>{section.para3}</li>}
                        {hasPara(section.para4) && <li>{section.para4}</li>}
                      </ul>
                    ) : section.id === "10" ? (
                      <div className="contact-info">
                        <h3>{section.para1}</h3>
                        <p>{section.para2}</p>
                        <p>{section.para3}</p>
                        <p>{section.para4}</p>
                      </div>
                    ) : (
                      <p className="main-para">{section.para1}</p>
                    )}
                  </div>
                </motion.section>
              ))}
              
              <motion.div 
                className="terms-agreement"
                variants={fadeIn}
              >
                <p>By using this Website, you acknowledge that you have read and agree to these Terms and Conditions.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating back to top button */}
      {/* <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button> */}

      <Footer />
    </div>
  );
};

export default Terms;