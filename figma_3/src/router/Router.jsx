import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../page/Products'
import Solutions from '../page/Solutions'
import Sofiwere from '../page/Sofiwere'
import Services from '../page/Services'
import Corporate from '../page/Corporate'
import News from '../page/News'
import Contact from '../page/Contact'
import Productet from "../page/Productet"
import ContactUs2 from '../conpanents/news_contact/contact2'
export default function Router() {
    return (
        <Routes>
            <Route index element={<Products />} />
            <Route path="/Solutions" element={<Solutions />} />
            <Route path="/Services" element={<Services />} />
            <Route path='/contact_us' element={<ContactUs2 />} />
            <Route path="/Corporate" element={<Corporate />} />
            <Route path="/Sofiwere" element={<Sofiwere />} />
            <Route path='/News' element={<News />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path="/productet/:id" element={<Productet />} />
        </Routes>
    )
}
