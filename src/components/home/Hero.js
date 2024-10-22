import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  // const images = [
  //   'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1600&h=600&q=80',
  //   'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&h=600&q=80',
  //   'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&h=600&q=80',
  //   'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1600&h=600&q=80',
  // ];

  return (
    <div className="relative overflow-hidden h-screen">
      <Slider {...sliderSettings} className="h-full">
        {images.map((img, index) => (
          <div key={index} className="h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black opacity-30" />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white shadow-text">
              {title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white shadow-text">
              {subtitle}
            </p>
            <Link 
              to={ctaLink} 
              className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              {ctaText}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto"> 
         <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path> 
       </svg>
      </div>
    </div>
  );
};

export default Hero;