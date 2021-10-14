import React, { useContext } from 'react';
import { Player, BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css'
import myvideo from '../../../video/myvideo.mp4'
import clothcarousel from '../../../img/clothcarousel.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LoadingSpinner from 'video-react/lib/components/LoadingSpinner';
import ControlBar from 'video-react/lib/components/control-bar/ControlBar';
import { RatingContext } from '../../GlobalContext/RatingContext';




const SellerHomepage = ({ show }) => {



    return (
        <div className={show ? "d-block" : "d-none"}>
            <div className="container px-1">
                <div className="row row-cols-1 gy-5 m-0 w-100">

                    <div className="col px-5">
                        <div className="border border-secondary bg-white p-5 rounded">
                            <div className="px-5">

                                <Player
                                    className="px-4"
                                    poster={clothcarousel}
                                >
                                    <BigPlayButton position="center" />
                                    <LoadingSpinner />
                                    <ControlBar autoHide={true} />
                                    <source src={myvideo} type="video/mp4" />
                                </Player>
                            </div>

                        </div>
                    </div>


                    <div className="col">
                        <div className="border bg-white rounded p-5">
                            <Slider
                                slidesToShow={1}
                                slidesToScroll={1}
                                dots
                                autoplay
                            >
                                <img src={clothcarousel} alt="" height="400px" width="100%" />
                                <img src={clothcarousel} alt="" height="400px" width="100%" />
                                <img src={clothcarousel} alt="" height="400px" width="100%" />
                            </Slider>
                        </div>
                    </div>


                    <div className="col p-0">
                        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 gx-2 m-0 w-100">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Product = () => {

    const { Rating } = useContext(RatingContext)



    return (
        <div className="col">
            <div className="border bg-white p-2 custom-rounded shadow-sm w-100">
                <div className="row row-cols-1 m-0 w-100">
                    <div className="col p-0 custom-rounded-topleft custom-rounded-topright">
                        <img src={clothcarousel} alt="image" className="custom-rounded-topleft custom-rounded-topright" style={{ minHeight: "220px", maxHeight: "300px", width: "100%" }} />
                    </div>
                    <div className="col p-0">
                        <p>
                            other sandy product of foot shoes other sandy product of foot shoes other sandy product of foot shoes
                        </p>
                    </div>
                    <div className="col p-0">
                        <p className="my-1">$100 - $200</p>
                    </div>
                    <div className="col p-0">
                        <div className="my-2">
                            {Rating(4)}
                        </div>
                    </div>
                    <div className="col p-0 d-flex justify-content-between">
                        <button className="btn btn-sm btn-outline-secondary">Min order</button>
                        <button className="btn btn-sm btn-primary">Group Import</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default SellerHomepage
