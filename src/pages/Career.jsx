import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaFileAlt, FaCheck, FaInfoCircle } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../styles/career.css';

const Career = () => {
    // Form state
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        resume: null
    });

    // Validation state
    const [errors, setErrors] = useState({});
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'resume') {
            setFormData({
                ...formData,
                resume: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        // Clear error when field is edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Form validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        
        if (!formData.position.trim()) {
            newErrors.position = 'Position is required';
        }
        
        if (!formData.resume) {
            newErrors.resume = 'Resume is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSubmitting(true);
            
            // Simulate form submission
            setTimeout(() => {
                setIsSubmitting(false);
                setFormSubmitted(true);
                
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    position: '',
                    resume: null
                });
                
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setFormSubmitted(false);
                }, 5000);
            }, 1500);
        }
    };
    
    // List of available positions
    const availablePositions = [
        "Software Engineer",
        "Hardware Engineer",
        "Electronics Technician",
        "Sales Manager",
        "Marketing Specialist",
        "Project Manager",
        "R&D Engineer",
        "Quality Assurance Specialist"
    ];
    
    // Company benefits
    const benefits = [
        {
            title: "Professional Growth",
            description: "Continuous learning opportunities and career advancement pathways."
        },
        {
            title: "Inclusive Environment",
            description: "Diverse and collaborative workplace that values every voice."
        },
        {
            title: "Competitive Compensation",
            description: "Attractive salary packages and comprehensive benefits."
        },
        {
            title: "Work-Life Balance",
            description: "Flexible working options to support your personal needs."
        }
    ];

    return (
        <div className="career-page pt-10">
            <div className="career-hero">
                <div className="career-hero-content">
                    <h1>Join Our Team</h1>
                    <p>Build your career with industry leaders in electronics</p>
                </div>
            </div>
            
            <div className="career-container">
                <div className="career-content">
                    <section className="career-about">
                        <div className="section-heading">
                            <h2 className=''>About Working With Us</h2>
                            <div className="heading-underline"></div>
                        </div>
                        
                        <p>
                            At OX-LINK ELECTRONICS PVT. LTD., we value talent and innovation. If you're
                            passionate about shaping the future of electronics and want to work with a
                            dedicated team, we invite you to apply for a position at our company.
                        </p>
                        
                        <p>
                            We believe in empowering our employees to reach their full potential while
                            contributing to groundbreaking projects that make a difference in the industry.
                            Join us and be part of a team that's committed to excellence and innovation.
                        </p>
                    </section>
                    
                    <section className="career-benefits">
                        <div className="section-heading">
                            <h2>Why Work With Us?</h2>
                            <div className="heading-underline"></div>
                        </div>
                        
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div className="benefit-card" key={index}>
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* <section className="open-positions">
                        <div className="section-heading">
                            <h2>Current Openings</h2>
                            <div className="heading-underline"></div>
                        </div>
                        
                        <div className="positions-list">
                            {availablePositions.map((position, index) => (
                                <div className="position-item" key={index}>
                                    <span>{position}</span>
                                    <button className="apply-btn" onClick={() => {
                                        setFormData({...formData, position});
                                        document.querySelector('.application-form').scrollIntoView({ behavior: 'smooth' });
                                    }}>Apply Now</button>
                                </div>
                            ))}
                        </div>
                    </section> */}
                </div>
                
                <div className="application-form">
                    <div className="form-container">
                        <div className="form-header">
                            <h2>Apply Now</h2>
                            <p>Submit your application and join our team</p>
                        </div>
                        
                        {formSubmitted ? (
                            <div className="success-message">
                                <FaCheck className="success-icon" />
                                <h3>Application Submitted!</h3>
                                <p>Thank you for your interest in joining OX-LINK ELECTRONICS PVT. LTD. We will review your application and contact you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fullName">
                                        <FaUser className="input-icon" />
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={errors.fullName ? 'error' : ''}
                                        placeholder="John Doe"
                                    />
                                    {errors.fullName && <span className="error-message"><FaInfoCircle /> {errors.fullName}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <FaEnvelope className="input-icon" />
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'error' : ''}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <span className="error-message"><FaInfoCircle /> {errors.email}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <FaPhone className="input-icon" />
                                        Phone Number
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? 'error' : ''}
                                        placeholder="9876543210"
                                    />
                                    {errors.phone && <span className="error-message"><FaInfoCircle /> {errors.phone}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="position">
                                        <FaBriefcase className="input-icon" />
                                        Position Applied For
                                    </label>
                                    <input 
                                        type="text" 
                                        id="position"
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                        className={errors.position ? 'error' : ''}
                                        placeholder="Software Engineer"
                                        list="positions"
                                    />
                                    {/* <datalist id="positions">
                                        {availablePositions.map((position, index) => (
                                            <option key={index} value={position} />
                                        ))}
                                    </datalist> */}
                                    {errors.position && <span className="error-message"><FaInfoCircle /> {errors.position}</span>}
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="resume">
                                        <FaFileAlt className="input-icon" />
                                        Upload Your Resume
                                    </label>
                                    <div className="file-input-container">
                                        <input 
                                            type="file" 
                                            id="resume"
                                            name="resume"
                                            onChange={handleChange}
                                            className={errors.resume ? 'error' : ''}
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <div className="file-input-text">
                                            {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                                        </div>
                                    </div>
                                    {errors.resume && <span className="error-message"><FaInfoCircle /> {errors.resume}</span>}
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className="submit-button"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Career;