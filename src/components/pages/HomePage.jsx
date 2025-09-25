import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/AWS.jpg'},
        {image: '/images/certificates/Adobe.jpg'},
        {image: '/images/certificates/JP_MORGAN.jpg'},
        {image: '/images/certificates/Training.jpg'},
        {image: '/images/certificates/ISRO.jpg'},
        {image: '/images/certificates/Tech-Surf.jpg'},
        {image: '/images/certificates/Zidio.jpg'},
        {image: '/images/certificates/Excel JPMorgan.jpg'},
        {image: '/images/certificates/Full stack Udemy.jpg'},
        {image: '/images/certificates/React Udemy.jpg'},
        {image: '/images/certificates/Krishna_singh_tcs_certificate.jpg'},
        {image: '/images/certificates/Sparks Foundation.png'},
        {image: '/images/certificates/Java Certificate.jpg'},
        {image: '/images/certificates/Python Certificate.jpg'},
        {image: '/images/certificates/javascript(krishna singh)-images-0.jpg'},
        {image: '/images/certificates/html5(krishna singh).jpg'},
        {image: '/images/certificates/CSS3(krishna singh).jpg'},
        {image: '/images/certificates/Basic Python - Infosys Springboard.jpg'},
        {image: '/images/certificates/Python Part-1 Certificate-images-0.jpg'},
        {image: '/images/certificates/Python Part-2 Certificate-images-0.jpg'},
        {image: '/images/certificates/Software engineering.jpg'},
        {image: '/images/certificates/Time management.jpg'},
        {image: '/images/certificates/Email writing.jpg'},
        {image: '/images/certificates/High impact.jpg'},
        {image: '/images/certificates/Agile Scrum in Practice.jpg'},
        {image: '/images/certificates/Flipkart 6.0 Software.jpg'},
        {image: '/images/certificates/Flipkart 6.0.jpg'},
        {image: '/images/certificates/Flipkart 5.0.jpg'},
        {image: '/images/certificates/Flipkart 5.0 health.jpg'},
        {image: '/images/certificates/Tata Imagination.jpg'},
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Techs />
            <MyProjects />
            <CertificateSlider certificates={certificates} />
            <Contact />
        </>
    )
}

export default HomePage