import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page1 from '../pages/Page1'
import About from '../pages/About'
import Blog from '../pages/Blog'
// import Support from '../pages/Support'
import ContactUs from '../pages/ContactUs'
import Career from '../pages/Career'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import GetInTouch from '../pages/GetInTouch'
import CategoryPage from '../components/CategoryPage'
import ProductPage from '../components/ProductPage'

const Routing = () => {

    return (
        <div>

            <Routes>


                <Route path='/' element={<Page1 />} />
                <Route path={`/:slug`} element={<CategoryPage />} />
                <Route path={`/:slug/:productSlug`} element={<ProductPage />} />
                {/* About Page */}
                <Route path='/about' element={<About />} />

                {/* Blog Page */}
                <Route path='/blog' element={<Blog />} />

                {/* Support Page */}
                {/* <Route path='/support' element={<Support />} /> */}

                {/* Contact Page */}
                <Route path='/contact-us' element={<ContactUs />} />

                {/* Career Page */}
                <Route path='/career' element={<Career />} />

                {/* Terms page */}
                <Route path='/terms' element={<Terms />} />

                {/* Privacy page */}
                <Route path='/privacy' element={<Privacy />} />

                {/* Get in touch page */}
                <Route path='/get-in-touch' element={<GetInTouch />} />

            </Routes>

        </div>
    )
}

export default Routing