import React from 'react'
import "./LogoCarousel.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "./BrandCarousel.css"; // optional for styling

const brands = [
  { id: 1, src: "/logos/logo1.png", alt: "Brand 1" },
  { id: 2, src: "/logos/logo2.png", alt: "Brand 2" },
  { id: 3, src: "/logos/logo3.png", alt: "Brand 3" },
  { id: 4, src: "/logos/logo4.png", alt: "Brand 4" },
  { id: 5, src: "/logos/logo5.png", alt: "Brand 5" },
  { id: 6, src: "/logos/logo6.png", alt: "Brand 6" },
];


const LogoCrousel = () => {

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };



  return (
    <div className="container">
        <div className="row">
            <p>2+ Years Of Experience</p>
        </div>
        <div className="row">
            <div className="brand-carousel">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div key={brand.id} className="brand-slide">
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </Slider>
    </div>

        </div>
    </div>
  )
}

export default LogoCrousel