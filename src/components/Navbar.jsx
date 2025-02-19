import React, { useEffect, useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isDropdownTranslated, setIsDropdownTranslated] = useState(false);
  const [productDropdownContent, setProductContent] = useState([]);
  // const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    fetch('https://ox-admin.wtmmedia.com/api/category')
      .then(res => res.json())
      .then((data) => {
        setProductContent(data.data);
        console.log("Prod content", productDropdownContent)
      })
  }, []);
  // const productDropdownContent = [
  //   { id: 1, title: "Control Cable", delay: 0.3, Link: "/product/control-cable" },
  //   { id: 2, title: "Data Cable", delay: 0.4, Link: "/product/data-cable" },
  //   { id: 3, title: "Bus Cable", delay: 0.5, Link: "/product/bus-cable" },
  //   { id: 4, title: "LAN Cable", delay: 0.6, Link: "/product/lan-cable" },
  //   { id: 5, title: "Solar Cable", delay: 0.7, Link: "/product/solar-cable" },
  //   { id: 6, title: "Drag/energy Chain Cable", delay: 0.8, Link: "/product/drag-energy-chain-cable" },
  // ];
  console.log(productDropdownContent)
  const navContent = [
    { id: 1, title: "HOME", link: "/" },
    { id: 2, title: "ABOUT US", link: "/about" },
    { id: 3, title: "PRODUCTS", link: "#" },
    { id: 4, title: "BLOG", link: "/blog" },
    { id: 5, title: "Career", link: "/career" },
    { id: 6, title: "GET IN TOUCH", link: "/get-in-touch" },
  ]

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownTranslated(!isMobileMenuOpen); // Update dropdown translation state
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // const handleLogoClick = () => {
  //   if(location.pathname === "/"){
  //     console.log("You are on slash route!!");
  //   } else {
  //     navigate('/');
  //     window.location.reload();
  //   }
  // };

  return (
    <>
      {/* For desktop */}
      <div className='main-container hidden sm:flex fixed top-0 z-[60] bg-[#DBD9DC] w-full h-[12vh] justify-between items-center px-20 border-b-2 border-b-[#FFA500]'>
        <NavLink to="/" className='logo-container w-60 flex items-center'>
          <img className='logo' src="/logo.png" alt="logo" />
        </NavLink>

        <div className='nav-links flex items-center gap-12'>
          <div className='flex items-center'
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}>
            <h1 className='text-blue-800 font-semibold text-[1.2vw] cursor-pointer'>Products</h1>
            <motion.div
              className='arrow text-2xl text-blue-800'
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowDownSLine className='arrow' />
            </motion.div>
            {isDropdownOpen && (
              <motion.div
                className='absolute top-14 bg-white shadow-lg'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {productDropdownContent.map((prod, index) => {
                  const delay = 0.3 + index * 0.1; // Increment delay by 0.1 for each item

                  return (
                    <ul className='overflow-hidden bg-[#DBD9DC] manualCss' key={prod.id}>
                      <NavLink to={`${prod.slug}`}> {/* Keep query parameter in the URL */}
                        <motion.li
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1, transition: { delay } }}
                          className='px-3 py-2 cursor-pointer text-white bg-[#f59837] border-b border-b-[#dfd0c5]'
                        >
                          {prod.title}
                        </motion.li>
                      </NavLink>
                    </ul>
                  );
                })}
              </motion.div>
            )}
          </div>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `w-fit flex items-center font-semibold text-[1.2vw] cursor-pointer hover:text-[#f99938] transition-all ${isActive ? 'text-[#f99938]' : 'text-blue-800'}`
            }
          >
            <h1>About Us</h1>
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) =>
              `w-fit flex items-center font-semibold text-[1.2vw] cursor-pointer hover:text-[#f99938] transition-all ${isActive ? 'text-[#f99938]' : 'text-blue-800'}`
            }
          >
            <h1>Career</h1>
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `w-fit flex items-center font-semibold text-[1.2vw] cursor-pointer hover:text-[#f99938] transition-all ${isActive ? 'text-[#f99938]' : 'text-blue-800'}`
            }
          >
            <h1>Blog</h1>
          </NavLink>
        </div>

        <NavLink to="/get-in-touch">
          <motion.div className='w-fit cursor-pointer' whileTap={{ scale: 0.9 }}>
            <h1 className='bg-[#FFA500] px-6 py-2 font-semibold rounded-md text-white'>Get in touch</h1>
          </motion.div>
        </NavLink>
      </div>

      {/* For mobile */}
      <div className='flex fixed top-0 z-10 bg-[#DBD9DC] w-full h-[8vh] justify-between items-center px-5 border-b-2 border-b-[#FFA500] sm:hidden'>
        <NavLink to="/" className='w-40 flex items-center'>
          <img src="/logo.png" alt="logo" />
        </NavLink>

        <div className='w-fit text-3xl' onClick={toggleMobileMenu}>
          {/* {isMobileMenuOpen ? (
            <motion.div
              className={`${isMobileMenuOpen ? "opacity-1" : "opacity-0"}`}
            >
              <RxCross1 />
            </motion.div>
          ) : (
            <motion.div
              className={`${isMobileMenuOpen ? "opacity-0" : "opacity-1"}`}
            >
              <RiMenu2Line />
            </motion.div>
          )} */}
          <div className='flex flex-col gap-2'>
            <div className={`w-6 h-[0.2vw] bg-black origin-left ${isMobileMenuOpen ? "rotate-45 transition-all duration-500" : "rotate-0 transition-all duration-500"}`}></div>
            <div className={`w-6 h-[0.2vw] bg-black ${isMobileMenuOpen ? "opacity-0 transition-all duration-500" : "opacity-1 transition-all duration-500"}`}></div>
            <div className={`w-6 h-[0.2vw] bg-black origin-left ${isMobileMenuOpen ? "-rotate-45 transition-all duration-500" : "rotate-0 transition-all duration-500"}`}></div>
          </div>
        </div>

        {/* Dropdown div */}
        {isMobileMenuOpen && (
          <motion.div
            className='absolute top-12 -z-50 left-0 -translate-x-1/2 bg-zinc-300 w-full min-h-32 flex flex-col items-center border-b'
            initial={{ translateY: isDropdownTranslated ? "-100%" : "0%" }} // Use the new state for translation
            animate={{ translateY: "0%" }}
            transition={{ duration: 0.5 }}
          >
            {navContent.map((prod) => (
              <NavLink
                to={prod.link}
                key={prod.id}
                className={`relative w-full text-center font-semibold py-5 text-blue-800 border-b border-b-zinc-400 ${prod.id === 6 && "border-b border-b-zinc-300 text-white bg-[#ee674e] py-6"}`}
                onClick={() => {
                  if (prod.id === 3)
                    setIsProductsDropdownOpen(!isProductsDropdownOpen);

                  if (prod.id === 3) {
                    setIsProductsDropdownOpen(!isProductsDropdownOpen);
                    // Do not close the navbar when clicking on the third product
                  } else {
                    handleNavLinkClick(); // Close the navbar for other links
                  }
                }
                }
              >
                {prod.title}
                {prod.id === 3 && (
                  <div
                    className={`absolute top-16 z-[55] left-1/2 -translate-x-1/2 bg-zinc-100 w-full h-[50vh] flex flex-col justify-start items-center gap-5 transition-all ${isProductsDropdownOpen ? "flex" : "hidden"} overflow-scroll`}
                  >
                    {productDropdownContent.map((product) => (
                      <NavLink
                        to={product.slug}
                        key={product.id}
                        className="w-full py-5 border-b border-b-zinc-200"
                        onClick={handleNavLinkClick}
                      >
                        {product.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </NavLink>
            ))}
          </motion.div>
        )}

      </div>

    </>
  )
}

export default Navbar;