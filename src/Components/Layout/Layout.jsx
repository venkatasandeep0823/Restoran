import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import { Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import AboutUs from '../Pages/AboutUs'
import Contact from '../Pages/Contact'



function Layout() {
    return (
        <>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    )
}

export default Layout