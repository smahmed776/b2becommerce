import React from 'react'
import Slider from 'react-slick'
import carousel from '../../img/carousel.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'

const HeroCarousel = () => {
    return (
        <div className="col-12 col-sm-6 m-0 p-0 h-100">
            <Slider 
              autoplay
              dots
              slidesToShow={1}
              className="w-100 h-100"
            >
                
                    <img src={carousel} alt="" height="100%" width="100%"/>
               
                    <img src={carousel} alt="" height="100%" width="100%"/>
               
                    <img src={carousel} alt="" height="100%" width="100%"/>
                
               
            </Slider>
        </div>
    )
}

export default HeroCarousel
