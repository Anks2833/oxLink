import React, { useEffect, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../components/Footer';
import "../styles/contact.css";

const GetInTouch = () => {
    const [loading, setLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('Loading...');
    const [email, setEmail] = useState('Loading...');
    const [address, setAddress] = useState('Loading...');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleLoad = () => {
        setLoading(false);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        
        // Clear error when typing
        if (formErrors[e.target.name]) {
            setFormErrors({
                ...formErrors,
                [e.target.name]: ''
            });
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            errors.phone = "Phone number should be 10 digits";
        }
        if (!formData.message.trim()) errors.message = "Message is required";
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setFormLoading(true);
            
            // Simulate form submission
            setTimeout(() => {
                setFormLoading(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    message: ''
                });
                alert("Thank you for your message! We'll get back to you soon.");
            }, 1500);
        }
    };

    useEffect(() => {
        fetch("https://ox-admin.wtmmedia.com/api/company")
            .then(res => res.json())
            .then((data) => {
                setPhoneNumber(data.data[0]?.phoneNumber1 || 'No information available');
                setEmail(data.data[0]?.infoEmail || 'No information available');
                setAddress(data.data[0]?.address || 'No information available');
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setPhoneNumber('No information available');
                setEmail('No information available');
                setAddress('No information available');
            });
    }, []);

    return (
        <div className='w-full min-h-screen bg-[#DCD9DC] pt-20 md:pt-32 lg:pt-40 pb-10'>
            {/* Contact Info Cards */}
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10'>
                <h1 className='text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800'>Get In Touch</h1>
                
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                    <div className='contact-card bg-white rounded-xl border border-zinc-400 p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4'>
                                <FaPhoneAlt size={20} />
                            </div>
                            <h2 className='text-xl font-semibold text-gray-800'>Phone</h2>
                        </div>
                        <p className='text-gray-700 font-medium'>{phoneNumber.startsWith('+91') ? phoneNumber : `+91 ${phoneNumber}`}</p>
                        <a href={`tel:+91${phoneNumber}`} className='inline-block mt-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-200 text-sm font-medium'>Call us now</a>
                    </div>
                    
                    <div className='contact-card bg-white rounded-xl border border-zinc-400 p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4'>
                                <IoMail size={20} />
                            </div>
                            <h2 className='text-xl font-semibold text-gray-800'>Email</h2>
                        </div>
                        <p className='text-gray-700 font-medium'>{email}</p>
                        <a href={`mailto:${email}`} className='inline-block mt-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-200 text-sm font-medium'>Send an email</a>
                    </div>
                    
                    <div className='contact-card bg-white rounded-xl border border-zinc-400 p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
                        <div className='flex items-center mb-4'>
                            <div className='bg-indigo-100 p-3 rounded-full text-indigo-600 mr-4'>
                                <FaLocationDot size={20} />
                            </div>
                            <h2 className='text-xl font-semibold text-gray-800'>Address</h2>
                        </div>
                        <p className='text-gray-700 font-medium'>{address}</p>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className='inline-block mt-3 text-indigo-600 hover:text-indigo-800 transition-colors duration-200 text-sm font-medium'>Get directions</a>
                    </div>
                </div>
            </div>

            {/* Map and Form Section */}
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Map */}
                    <div className='w-full lg:w-1/2 '>
                        <div className='relative w-full h-96 md:h-[450px] bg-white rounded-xl shadow-lg overflow-hidden'>
                            {loading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                                    <div className="map-spinner"></div>
                                </div>
                            )}
                            <iframe
                                onLoad={handleLoad}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7079.4372681711775!2d75.58299520947003!3d27.121788661935604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c57f8bcf15d1d%3A0xc2439aca627b8f89!2sOx-link%20electronics%20LLP!5e0!3m2!1sen!2sin!4v1733823855204!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className='w-full lg:w-1/2 border border-zinc-400 rounded-xl'>
                        <div className='bg-white p-6 md:p-8 rounded-xl shadow-lg'>
                            <h2 className='text-2xl md:text-3xl font-bold mb-6 text-gray-800'>Send Us a Message</h2>
                            
                            <form onSubmit={handleSubmit} className='space-y-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div>
                                        <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>Your Name</label>
                                        <input 
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                            type="text" 
                                            placeholder='John Doe' 
                                        />
                                        {formErrors.name && <p className='text-red-500 text-xs mt-1'>{formErrors.name}</p>}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-1'>Email Address</label>
                                        <input 
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                            type="email" 
                                            placeholder='your@email.com' 
                                        />
                                        {formErrors.email && <p className='text-red-500 text-xs mt-1'>{formErrors.email}</p>}
                                    </div>
                                </div>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                                    <div>
                                        <label htmlFor="phone" className='block text-sm font-medium text-gray-700 mb-1'>Phone Number</label>
                                        <input 
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
                                            type="tel" 
                                            placeholder='9876543210' 
                                        />
                                        {formErrors.phone && <p className='text-red-500 text-xs mt-1'>{formErrors.phone}</p>}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="address" className='block text-sm font-medium text-gray-700 mb-1'>Your Address <span className='text-gray-500 text-xs'>(Optional)</span></label>
                                        <input 
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors'
                                            type="text" 
                                            placeholder='Your address' 
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>Your Message</label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none`}
                                        rows={5} 
                                        placeholder='How can we help you?'
                                    ></textarea>
                                    {formErrors.message && <p className='text-red-500 text-xs mt-1'>{formErrors.message}</p>}
                                </div>

                                <div>
                                    <button 
                                        type="submit"
                                        disabled={formLoading}
                                        className='px-8 py-3 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center'
                                    >
                                        {formLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : 'GET A QUOTE'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mt-16'>
                <Footer />
            </div>
        </div>
    );
};

export default GetInTouch;