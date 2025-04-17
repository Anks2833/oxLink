import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import "../styles/about.css";

const About = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://ox-admin.wtmmedia.com/api/company')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setAboutData(data.data[0]?.about || 'No information available');
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setAboutData('Failed to load data');
        setError(true);
        setLoading(false);
      });
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="about-page pt-10">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About OX-Link Electronics PVT. LTD.</h1>
          <div className="about-hero-underline"></div>
          {/* <p></p> */}
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <div className="about-container">
          {/* Company Overview */}
          <motion.div 
            className="about-section"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <div className="section-header">
              <h2>Company Overview</h2>
              <div className="section-underline"></div>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading company information...</p>
              </div>
            ) : error ? (
              <div className="error-container">
                <p>We couldn't load the company information. Please try again later.</p>
              </div>
            ) : (
              <motion.div 
                className="about-text-container"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <div
                  className="about-text"
                  dangerouslySetInnerHTML={{ __html: aboutData }}
                />
              </motion.div>
            )}
          </motion.div>

          {/* Vision & Mission */}
          {/* <motion.div 
            className="about-section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <h2>Our Vision & Mission</h2>
              <div className="section-underline"></div>
            </div>

            <div className="vision-mission-container">
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>To be the leading provider of innovative cable solutions, recognized for excellence, reliability, and customer satisfaction across all industries we serve.</p>
              </div>
              
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>To deliver high-quality cable solutions that empower our customers to achieve their goals, while maintaining the highest standards of service, innovation, and sustainability.</p>
              </div>
            </div>
          </motion.div> */}

          {/* Key Values */}
          {/* <motion.div 
            className="about-section"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="section-header">
              <h2>Our Core Values</h2>
              <div className="section-underline"></div>
            </div>

            <div className="values-container">
              <div className="value-card">
                <h3>Quality</h3>
                <p>We are committed to providing products of the highest quality that meet and exceed industry standards.</p>
              </div>
              
              <div className="value-card">
                <h3>Innovation</h3>
                <p>We continuously strive to develop new and improved solutions that address evolving customer needs.</p>
              </div>
              
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We conduct our business with transparency, honesty, and ethical practices in all our dealings.</p>
              </div>
              
              <div className="value-card">
                <h3>Customer Focus</h3>
                <p>We prioritize understanding and meeting the specific requirements of our customers.</p>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;