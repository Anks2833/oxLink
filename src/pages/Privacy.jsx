import React from 'react'
import Footer from '../components/Footer'

const Privacy = () => {

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
      title: "Children’s Privacy",
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
      para1: "Ox-Link Electronics LLP",
      para2: "205, 12, Zamrudpur Community Centre, Kailash Colony, New Delhi -110048 (INDIA)",
      para3: "Email: info@ox-link.in",
      para4: "Phone: +91-982 111 8868",
      footerpara: "By using this Website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms."
    },
  ]

  return (
    <>

      {/* Desktop */}
      <div className='hidden sm:flex w-full min-h-screen flex-col pt-40'>
        {/* The heading */}
        <div className='w-full flex justify-center'>
          <h1 className='text-4xl font-bold'>PRIVACY <span className='text-blue-800'>POLICY</span></h1>
        </div>
        {/* Last updated */}
        <div className='w-full flex flex-col items-start gap-3 px-[15vw] mt-20 mb-10'>
          <h1 className='text-2xl font-bold'>Last Updated: December 2024</h1>
          <div className='w-full flex flex-col'>
            <p>At Ox-Link (the “Website”), your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal</p>
            <p>information when you interact with our website. By using the Website, you agree to the practices described in this policy. If you do</p>
            <p>not agree with these terms, please discontinue use of the Website.</p>
          </div>
        </div>


        <div className='flex flex-col gap-6 px-[12vw]'>
          {privacyData.map((pri, index) => {
            return (
              <div key={pri.id || index} className='px-10'>
                <h1 className='text-xl font-semibold'>{pri.id}. {pri.title}</h1>
                <p>{pri.para}</p>
                <div className='flex flex-col'>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-blue-800 text-xl'>{pri.subtitle}</h1>
                    {/* <p>{pri.para}</p> */}

                    <div className='ml-4 flex flex-col'>
                      <p>{pri.subpara1}</p>
                      <p>{pri.subpara2}</p>
                      <p>{pri.subpara3}</p>
                      <p>{pri.subpara4}</p>
                  </div>

                  <div className='flex flex-col ml-3'>
                      <p>{pri.para1}</p>
                      <p>{pri.para2}</p>
                      <p>{pri.para3}</p>
                      <p>{pri.para4}</p>
                  </div>

                    <p>{pri.footerpara}</p>
                  </div>

                  <div className='flex flex-col'>
                    <h1 className='text-blue-800 text-xl'>{pri.subtitle1}</h1>
                    <p>{pri.subpara5}</p>

                    <div className='ml-4 flex flex-col'>
                      <p>{pri.subpara6}</p>
                      <p>{pri.subpara7}</p>
                      <p>{pri.subpara8}</p>
                      <p>{pri.subpara9}</p>
                      <p>{pri.subpara10}</p>
                    </div>

                    <p>{pri.footerpara1}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Footer */}
        <Footer />

      </div>

      {/* Mobile */}
      <div className='flex sm:hidden w-full min-h-screen flex-col pt-40'>
        {/* The heading */}
        <div className='w-full flex flex-col items-center'>
          <h1 className='text-4xl tracking-widest font-bold'>PRIVACY</h1>
          <h1 className='text-3xl tracking-widest font-bold text-blue-800'>POLICY</h1>
        </div>
        {/* Last updated */}
        <div className='w-full flex flex-col items-start gap-3 px-[8vw] mt-20 mb-10'>
          <h1 className='text-[6vw] font-bold'>Last Updated: December 2024</h1>
          <div className='w-full flex flex-col'>
            <p>At Ox-Link (the “Website”), your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal</p>
            <p>information when you interact with our website. By using the Website, you agree to the practices described in this policy. If you do</p>
            <p>not agree with these terms, please discontinue use of the Website.</p>
          </div>
        </div>


        <div className='flex flex-col gap-6 px-[0vw]'>
          {privacyData.map((pri, index) => {
            return (
              <div key={pri.id || index} className='px-10'>
                <h1 className='text-xl font-semibold'>{pri.id}. {pri.title}</h1>
                <p>{pri.para}</p>
                <div className='flex flex-col'>
                  <div className='flex flex-col gap-1'>
                    <h1 className='text-blue-800 text-xl'>{pri.subtitle}</h1>
                    {/* <p>{pri.para}</p> */}

                    <div className='ml-4 flex flex-col'>
                      <p>{pri.subpara1}</p>
                      <p>{pri.subpara2}</p>
                      <p>{pri.subpara3}</p>
                      <p>{pri.subpara4}</p>
                  </div>

                  <div className='flex flex-col ml-3'>
                      <p>{pri.para1}</p>
                      <p>{pri.para2}</p>
                      <p>{pri.para3}</p>
                      <p>{pri.para4}</p>
                  </div>

                    <p>{pri.footerpara}</p>
                  </div>

                  <div className='flex flex-col'>
                    <h1 className='text-blue-800 text-xl'>{pri.subtitle1}</h1>
                    <p>{pri.subpara5}</p>

                    <div className='ml-4 flex flex-col'>
                      <p>{pri.subpara6}</p>
                      <p>{pri.subpara7}</p>
                      <p>{pri.subpara8}</p>
                      <p>{pri.subpara9}</p>
                      <p>{pri.subpara10}</p>
                    </div>

                    <p>{pri.footerpara1}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Footer */}
        <Footer />

      </div>

    </>
  )
}

export default Privacy