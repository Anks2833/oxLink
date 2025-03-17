import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import '../styles/privacy.css';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState(null);

  // Privacy data
  const privacyData = [
    {
      id: "01",
      title: "Information We Collect",
      para: "We collect personal and non-personal information in order to provide you with the best possible experience on our website.",
      subtitle: "a. Personal Information",
      subpara: "Personal information refers to any information that can be used to identify you, including but not limited to:",
      subpara1: "Name",
      subpara2: "Email address",
      subpara3: "Phone number",
      subpara4: "Mailing address",
      footerpara: "You provide this information when you contact us, subscribe to our newsletter, request a quote, or make inquiries through the Website.",
      subtitle1: "b. Non-Personal Information",
      subpara5: "We may also collect non-personal information such as:",
      subpara6: "Browser type",
      subpara7: "IP address",
      subpara8: "Pages visited on the Website",
      subpara9: "Time spent on the Website",
      subpara10: "Cookies",
      footerpara1: "This data is used to improve the performance and usability of the Website and does not identify you personally.",
    },
    {
      id: "02",
      title: "How We Use Your Information",
      para: "The information we collect is used for the following purposes:",
      para1: "To respond to your inquiries or requests.",
      para2: "To improve our products, services, and website functionality.",
      para3: "To send you updates or promotional materials (if you have opted in to receive them).",
      para4: "To analyse user behaviour and trends to enhance the user experience.",
      footerpara: "We do not sell, rent, or share your personal information with third parties unless required by law or for the purposes outlined below."
    },
    {
      id: "03",
      title: "Sharing of Information",
      para: "Your personal information may be shared with third parties only under the following circumstances:",
      para1: "Service Providers: We may engage third-party service providers to perform tasks on our behalf (e.g., hosting, analytics). These providers are obligated to protect your information and use it only for the purpose of providing their services.",
      para2: "Legal Compliance: We may disclose your personal information if required by law, legal processes, or government requests."
    },
    {
      id: "04",
      title: "Data Security",
      para: "We implement reasonable security measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.",
    },
    {
      id: "05",
      title: "Your Rights and Choices",
      para: "You have the following rights regarding your personal information:",
      para1: "Access: You can request access to the personal information we hold about you.",
      para2: "Correction: You can request corrections to any inaccurate or incomplete information.",
      para3: "Deletion: You can request the deletion of your personal information, subject to legal retention requirements.",
      para4: "Withdraw: You may withdraw from receiving promotional communications from us by following the unsubscribe instructions provided in those communications.",
      footerpara: "To exercise any of these rights, please contact us at info@ox-link.in"
    },
    {
      id: "06",
      title: "Cookies and Tracking Technologies",
      para: "The Website may use cookies and similar tracking technologies to collect non-personal information and enhance your experience. Cookies are small files placed on your device to recognize you on future visits. You can control the use of cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of the Website.",
    },
    {
      id: "07",
      title: "Third-Party Links",
      para: "The Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review their privacy policies before providing any personal information.",
    },
    {
      id: "08",
      title: "Children's Privacy",
      para: "Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us so we can delete it.",
    },
    {
      id: "09",
      title: "Changes to This Policy",
      para: "We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with the date of the latest revision. Your continued use of the Website after any modifications constitutes your acceptance of the revised policy.",
    },
    {
      id: "10",
      title: "Contact Us",
      para: "If you have any questions or concerns about this Privacy Policy or the handling of your personal information, please contact us at:",
      para1: "Ox-Link Electronics PVT. LTD.",
      para2: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi -110048 (INDIA)",
      para3: "Email: info@ox-link.in",
      para4: "Phone: +91-982 111 8868",
      footerpara: "By using this Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms."
    },
  ];

  // Track scroll position to highlight active section in table of contents
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Get all section elements
      const sections = document.querySelectorAll('.privacy-section');
      
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

  return (
    <div className="privacy-policy-page py-14">
      {/* Hero section */}
      <motion.div 
        className="privacy-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="privacy-hero-overlay"></div>
        <div className="privacy-hero-content">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">PRIVACY</span> <span className="text-blue-300">POLICY</span>
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
      <div className="privacy-content">
        <div className="privacy-container">
          {/* Introduction */}
          <motion.div 
            className="privacy-intro"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <p>
              At Ox-Link (the "Website"), your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal
              information when you interact with our website. By using the Website, you agree to the practices described in this policy. If you do
              not agree with these terms, please discontinue use of the Website.
            </p>
          </motion.div>

          <div className="privacy-main">
            {/* Table of contents - visible on larger screens */}
            <div className="privacy-toc">
              <div className="toc-container">
                <h2>Table of Contents</h2>
                <ul>
                  {privacyData.map((section) => (
                    <li key={section.id} className={activeSection === `section-${section.id}` ? 'active' : ''}>
                      <a href={`#section-${section.id}`}>
                        {section.id}. {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Privacy content */}
            <motion.div 
              className="privacy-sections"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {privacyData.map((section) => (
                <motion.section 
                  key={section.id}
                  id={`section-${section.id}`}
                  className="privacy-section"
                  variants={fadeIn}
                >
                  <h2 className="section-title">
                    <span className="section-number">{section.id}.</span> {section.title}
                  </h2>
                  
                  <div className="section-content">
                    <p className="main-para">{section.para}</p>
                    
                    {section.subtitle && (
                      <div className="subsection">
                        <h3>{section.subtitle}</h3>
                        {section.subpara && <p>{section.subpara}</p>}
                        
                        {section.subpara1 && (
                          <ul className="bullet-list">
                            {section.subpara1 && <li>{section.subpara1}</li>}
                            {section.subpara2 && <li>{section.subpara2}</li>}
                            {section.subpara3 && <li>{section.subpara3}</li>}
                            {section.subpara4 && <li>{section.subpara4}</li>}
                          </ul>
                        )}
                        
                        {section.footerpara && <p className="footer-para">{section.footerpara}</p>}
                      </div>
                    )}
                    
                    {section.subtitle1 && (
                      <div className="subsection">
                        <h3>{section.subtitle1}</h3>
                        {section.subpara5 && <p>{section.subpara5}</p>}
                        
                        {section.subpara6 && (
                          <ul className="bullet-list">
                            {section.subpara6 && <li>{section.subpara6}</li>}
                            {section.subpara7 && <li>{section.subpara7}</li>}
                            {section.subpara8 && <li>{section.subpara8}</li>}
                            {section.subpara9 && <li>{section.subpara9}</li>}
                            {section.subpara10 && <li>{section.subpara10}</li>}
                          </ul>
                        )}
                        
                        {section.footerpara1 && <p className="footer-para">{section.footerpara1}</p>}
                      </div>
                    )}
                    
                    {/* Regular paragraphs */}
                    {(section.para1 || section.para2 || section.para3 || section.para4) && (
                      <ul className="number-list">
                        {section.para1 && <li>{section.para1}</li>}
                        {section.para2 && <li>{section.para2}</li>}
                        {section.para3 && <li>{section.para3}</li>}
                        {section.para4 && <li>{section.para4}</li>}
                      </ul>
                    )}
                  </div>
                </motion.section>
              ))}
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

export default Privacy;