import React from 'react'
import Footer from '../components/Footer'

const Terms = () => {

    const terms = [
        { id: "01", title: "General Use", para1: "Ox-Link Electronics provides information on products and services related to Electronics Cable. The content provided on the Website is for general information purposes only and does not constitute a binding offer for any services or products unless explicitly stated otherwise.", para2: "", para3: "", para4: "" },
        { id: "02", title: "Intellectual Property Rights", para1: "All content, including but not limited to images, text, graphics, logos, designs, product descriptions, and other materials available on this Website, are owned by Ox-Link Electronics LLP and are protected by intellectual property laws. You may not copy, reproduce, or use any part of the content without express written permission from Ox-Link.", para2: "", para3: "", para4: "" },
        { id: "03", title: "Website Content", para1: "While we strive to ensure the accuracy and timeliness of the information on the Website, Ox-Link makes no guarantees or warranties regarding the accuracy, completeness, or reliability of the content. Information regarding product specifications, pricing, and availability is subject to change without notice.", para2: "", para3: "", para4: "" },
        { id: "04", title: "Prohibited Activities", para1: "Violating any local, national, or international laws or regulations.", para2: "Attempting to gain unauthorized access to any portion of the Website, server, or database.", para3: "Transmitting any malicious software, including viruses or harmful code.", para4: "Using the Website for any fraudulent or misleading activities." },
        { id: "05", title: "Third-Party Links", para1: "The Website may contain links to third-party websites. These links are provided for your convenience, and Ox-Link does not endorse or assume responsibility for any third-party websites or their content. You access third-party websites at your own risk.", para2: "", para3: "", para4: "" },
        { id: "06", title: "Limitation of Liability", para1: "Ox-Link Electronics will not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the Website, even if Ox-Link Electronics has been advised of the possibility of such damages. This includes but is not limited to damages resulting from loss of data, loss of profits, or interruptions in service.", para2: "", para3: "", para4: "" },
        { id: "07", title: "Changes to the Terms", para1: "Ox-Link Electronics reserves the right to modify these Terms at any time without prior notice. Your continued use of the Website after any changes are made constitutes your acceptance of the updated Terms. It is your responsibility to review these Terms regularly for updates.", para2: "", para3: "", para4: "" },
        { id: "08", title: "Privacy Policy", para1: "Your use of the Website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal data. By using the Website, you consent to the processing of your personal information as described in the Privacy Policy.", para2: "", para3: "", para4: "" },
        { id: "09", title: "Governing Law", para1: "These Terms are governed by and construed in accordance with the laws of Government of India, and you agree to submit to the exclusive jurisdiction of the courts located within India for the resolution of any disputes.", para2: "", para3: "", para4: "" },
        { id: "10", title: "Contact Information", para1: "Ox-Link Electronics LLP", para2: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi-110048 (INDIA)", para3: "Email: info@ox-link.in", para4: "Phone: +91-982 111 8868" },
    ]

    return (
        <>
            {/* Desktop */}
            <div className='hidden sm:flex w-full min-h-screen flex-col pt-40'>

                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-bold'>TERMS <span className='text-blue-800'>& CONDITIONS</span></h1>
                </div>

                <div className='w-full flex flex-col items-start px-[30vw] mt-20'>
                    <h1 className='font-bold'>Last Updated: December 2024</h1>
                    <div className='flex flex-col'>
                        <p>Welcome to Ox-Link (the “Website”), your trusted provider of high-quality</p>
                        <p>Electronics Cable. By accessing or using the Website, you agree to comply with and</p>
                        <p>be bound by the following terms and conditions (the “Terms”). Please read them</p>
                        <p>carefully before using the Website. If you do not agree to these Terms, you should</p>
                        <p>not use the Website.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 mt-10 px-[30vw]'>
                    {terms.map((term, index) => {
                        return (
                            <div key={term.id || index} className='flex flex-col gap-2'>
                                <h1 className='text-xl tracking-wide'>{term.id}. {term.title}</h1>
                                <div className='flex flex-col gap-1'>
                                    <p className='ml-9'>{term.para1}</p>
                                    <p className='ml-9'>{term.para2}</p>
                                    <p className='ml-9'>{term.para3}</p>
                                    <p className='ml-9'>{term.para4}</p>
                                </div>
                            </div>
                        )
                    })}

                    <p className='text-md'>By using this Website, you acknowledge that you have read and agree to these Terms and Conditions.</p>
                </div>

                <Footer />

            </div>
            
            {/* Mobile */}
            <div className='flex sm:hidden w-full min-h-screen flex-col pt-40'>

                <div className='w-full flex flex-col items-center'>
                    <h1 className='text-4xl font-bold'>TERMS</h1>
                    <h1 className='text-4xl font-bold text-blue-800'>&</h1>
                    <h1 className='text-4xl font-bold text-blue-800'>CONDITIONS</h1>
                </div>

                <div className='w-full flex flex-col items-start px-8 mt-20'>
                    <h1 className='font-bold'>Last Updated: December 2024</h1>
                    <div className='flex flex-col'>
                        <p>Welcome to Ox-Link (the “Website”), your trusted provider of high-quality</p>
                        <p>Electronics Cable. By accessing or using the Website, you agree to comply with and</p>
                        <p>be bound by the following terms and conditions (the “Terms”). Please read them</p>
                        <p>carefully before using the Website. If you do not agree to these Terms, you should</p>
                        <p>not use the Website.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 mt-10 px-8'>
                    {terms.map((term, index) => {
                        return (
                            <div key={term.id || index} className='flex flex-col gap-2'>
                                <h1 className='text-xl tracking-wide'>{term.id}. {term.title}</h1>
                                <div className='flex flex-col gap-1'>
                                    <p className='ml-9'>{term.para1}</p>
                                    <p className='ml-9'>{term.para2}</p>
                                    <p className='ml-9'>{term.para3}</p>
                                    <p className='ml-9'>{term.para4}</p>
                                </div>
                            </div>
                        )
                    })}

                    <p className='text-md'>By using this Website, you acknowledge that you have read and agree to these Terms and Conditions.</p>
                </div>

                <Footer />

            </div>

        </>
    )
}

export default Terms