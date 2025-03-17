import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowDownSLine } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import '../styles/navbar.css';

const Navbar = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);
  
  // Fetch product categories
  useEffect(() => {
    fetch('https://ox-admin.wtmmedia.com/api/category')
      .then(res => res.json())
      .then((data) => {
        setProductCategories(data.data || []);
      })
      .catch(err => {
        console.error("Error fetching categories:", err);
        setProductCategories([
          { id: 1, title: "Control Cable", slug: "/control-cable" },
          { id: 2, title: "Data Cable", slug: "/data-cable" },
          { id: 3, title: "Bus Cable", slug: "/bus-cable" },
          { id: 4, title: "LAN Cable", slug: "/lan-cable" },
          { id: 5, title: "Solar Cable", slug: "/solar-cable" },
        ]);
      });
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        if (!event.target.closest('.mobile-dropdown')) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef, mobileDropdownRef]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileProductsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    // { id: 1, title: "Home", path: "/" },
    { id: 3, title: "Products", path: "#", hasDropdown: true },
    { id: 2, title: "About Us", path: "/about" },
    { id: 5, title: "Career", path: "/career" },
    { id: 4, title: "Blog", path: "/blog" },
  ];

  // Framer motion variants
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  const mobileMenuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: [0.65, 0, 0.35, 1] }
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07
      }
    }
  };
  
  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const toggleMobileProducts = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <img src="/logo.png" alt="OX-Link Electronics" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map(link => (
            <div 
              key={link.id} 
              className={`nav-item ${link.hasDropdown ? 'has-dropdown' : ''}`}
              ref={link.hasDropdown ? dropdownRef : null}
            >
              {link.hasDropdown ? (
                <div 
                  className="dropdown-trigger"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <span>Products</span>
                  <motion.div
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="dropdown-icon"
                  >
                    <RiArrowDownSLine />
                  </motion.div>
                  
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div 
                        className="dropdown-menu"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        {productCategories.map((category, index) => (
                          <NavLink 
                            key={category.id} 
                            to={category.slug}
                            className="dropdown-item"
                          >
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {category.title}
                            </motion.div>
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink 
                  to={link.path}
                  className={({ isActive }) => 
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  {link.title}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <NavLink to="/get-in-touch" className="cta-button">
          <motion.span 
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in touch
          </motion.span>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <IoCloseOutline />
            </motion.div>
          ) : (
            <CgMenuRight />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            ref={mobileDropdownRef}
          >
            <motion.div 
              className="mobile-nav-links"
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map(link => (
                <motion.div key={link.id} variants={childVariant}>
                  {link.hasDropdown ? (
                    <div className="mobile-dropdown-container">
                      <button 
                        className="mobile-dropdown-trigger"
                        onClick={toggleMobileProducts}
                      >
                        Products
                        <motion.div
                          animate={{ rotate: isMobileProductsOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <RiArrowDownSLine />
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isMobileProductsOpen && (
                          <motion.div 
                            className="mobile-dropdown"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {productCategories.map((category, index) => (
                              <NavLink 
                                key={category.id} 
                                to={category.slug}
                                className="mobile-dropdown-item"
                              >
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  {category.title}
                                </motion.div>
                              </NavLink>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink 
                      to={link.path}
                      className={({ isActive }) => 
                        isActive ? 'mobile-nav-link active' : 'mobile-nav-link'
                      }
                    >
                      {link.title}
                    </NavLink>
                  )}
                </motion.div>
              ))}
              
              <motion.div variants={childVariant} className="mobile-cta">
                <NavLink to="/get-in-touch" className="mobile-cta-button">
                  Get in touch
                </NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;