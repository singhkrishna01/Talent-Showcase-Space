import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from 'react-scroll';
import CertificateModal from './CertificateModal';

const CertificateSlider = ({ certificates }) => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 4000,
        slidesToScroll: 1,
        draggable: false,
        rows: 2,
        arrows: false,
        pauseOnHover: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        fade: false,
        cssEase: "linear",
        easing: "linear",
        responsive: [{
            breakpoint: 3000,
            settings: {
                slidesToShow: 4,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
                draggable: false,
                arrows: false,
                dots: false
                }
        
            }, {
        
                breakpoint: 1200,
                settings: {
                slidesToShow: 3,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
                draggable: false,
                arrows: false,
                dots: false
                }
        
            }, {
        
                breakpoint: 800,
                settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
                draggable: false,
                arrows: false,
                dots: false
                }
        
            },{
        
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4000,
                speed: 4000,
                pauseOnHover: false,
                pauseOnFocus: false,
                draggable: false,
                arrows: false,
                dots: false
                }
        
            }, {
        
                breakpoint: 280,
                settings: "unslick"
        
            }]
    };

    const openCertificateModal = (image) => {
        setSelectedImage(image);
    };
    

    return (
        <section name='Certification' className='relative w-full h-unset md:h-screen text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

                <div className='mb-2 text-center'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1 animated-gradient text-center'>Certifications I've Earned</h2>
                    <p className='py-6'>Check out some of my certificates</p>
                </div>

                <div className="relative overflow-hidden">
                    {/* Left Shadow Gradient */}
                    <div className="certificate-shadow-left"></div>
                    
                    {/* Right Shadow Gradient */}
                    <div className="certificate-shadow-right"></div>
                    
                    <Slider {...settings} className="w-full mx-auto">
                        {certificates.map((certificate, index) => (
                        <div onClick={() => openCertificateModal(certificate.image)} key={index} className="p-4 cursor-pointer group certificate-slide">
                            <div className="relative bg-black/20 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-primary-color/40 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-translate-y-2 certificate-card certificate-hover">
                                <img 
                                    src={certificate.image} 
                                    alt="Certificate" 
                                    className="w-full h-[200px] lg:h-[220px] rounded-lg object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Certificate {index + 1}
                                </div>
                            </div>
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>

            <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>

            <CertificateModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </section>
        
    );
};

export default CertificateSlider;
