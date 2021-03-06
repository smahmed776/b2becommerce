import React, { useContext, useRef, useState } from 'react';
import './Profile.css';
import user from '../../../img/user.png'
import { RatingContext } from '../../GlobalContext/RatingContext';
import About from './About';
import SellerProducts from './SellerProducts';
import SellerHomepage from './SellerHomepage';
import LiveStreams from './LiveStrams';

const Profile = () => {

    const [toShowAbout, setToshowAbout] = useState(true)
    const [toShowHome, setToshowHome] = useState(false)
    const [toShowProduct, setToshowProduct] = useState(false)
    const [toShowLive, setToshowLive] = useState(false)
    const { Rating } = useContext(RatingContext)
    const aboutbtn = useRef()
    const productbtn = useRef()
    const livebtn = useRef()
    const homebtn = useRef()

    const showMe = (e) => {
        const text = e.target.dataset.bsText;
        if (text === 'about') return (
            setToshowAbout(prevState => !prevState),
            setToshowHome(false),
            setToshowLive(false),
            setToshowProduct(false),
            aboutbtn.current.setAttribute('disabled', 'true'),
            homebtn.current.removeAttribute('disabled'),
            livebtn.current.removeAttribute('disabled'),
            productbtn.current.removeAttribute('disabled')

        )
        if (text === 'product') return (

            setToshowProduct(prevState => !prevState),
            setToshowHome(false),
            setToshowLive(false),
            setToshowAbout(false),
            productbtn.current.setAttribute('disabled', 'true'),
            homebtn.current.removeAttribute('disabled'),
            livebtn.current.removeAttribute('disabled'),
            aboutbtn.current.removeAttribute('disabled')
        )
        if (text === 'home') return (
            setToshowHome(prevState => !prevState),
            setToshowAbout(false),
            setToshowLive(false),
            setToshowProduct(false),
            homebtn.current.setAttribute('disabled', 'true'),
            productbtn.current.removeAttribute('disabled'),
            livebtn.current.removeAttribute('disabled'),
            aboutbtn.current.removeAttribute('disabled')
        )
        if (text === 'live') return (

            setToshowLive(prevState => !prevState),
            setToshowHome(false),
            setToshowProduct(false),
            setToshowAbout(false),
            livebtn.current.setAttribute('disabled', 'true'),
            homebtn.current.removeAttribute('disabled'),
            productbtn.current.removeAttribute('disabled'),
            aboutbtn.current.removeAttribute('disabled')
        )
    }

    return (
        <main className="px-0 px-sm-5 my-3">

            <div className="row row-cols-1 m-0 gy-3 gy-lg-0 w-100  bg-white">

                <div className="col p-0">
                    <div className="cover position-relative">
                        <img src="https://www.chirripeppers.com/sitepad-data/uploads//2020/08/wild-triad2.jpg" height="235px" width="100%" alt="" className="" />
                        <div className="w-100 d-flex justify-content-center position-absolute" style={{ bottom: "-55px" }}>
                            <div className="rounded-pill p-2 bg-white" style={{ height: "120px", width: "120px", overflow: "hidden" }}>

                                <img src={user} alt="" style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                    borderRadius: "50%"

                                }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col p-0 mt-5 mt-lg-0 p-sm-2 border border-warning">

                    <div className="d-flex flex-column flex-lg-row m-0 gx-5 w-100 align-items-center justify-content-between">
                        <div className="col-12  col-lg-5 justify-selt-start">
                            <div className="d-flex justify-content-evenly p-2 p-lg-0 p-xl-2 pe-0 flex-wrap pe-md-0">
                                <div className="border-end d-flex justify-content-center flex-column p-3 p-lg-0 p-xl-3">
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">15</p>
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">Products</p>
                                </div>
                                <div className="border-end d-flex justify-content-center flex-column p-3 p-lg-0 p-xl-3">
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">1.5k</p>
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">Followers</p>
                                </div>
                                <div className="border-end d-flex justify-content-center flex-column p-3 p-lg-0 p-xl-3">
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">1st</p>
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">Level</p>
                                </div>
                                <div className="border-end d-flex justify-content-center flex-column p-3 p-lg-0 p-xl-3">
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">4.5</p>
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">reviews</p>
                                </div>
                                <div className=" d-flex justify-content-center flex-column p-3 p-lg-0 p-xl-3">
                                    <p className="text-center bi bi-flag m-0  p-lg-2 p-xl-0"></p>
                                    <p className="text-center  m-0 p-lg-2 p-xl-0">Bangladesh</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-md-8 col-lg-5 justify-self-end">
                            <div className="d-flex justify-content-evenly p-2 ps-0 ps-sm-5">
                                <div className="rounded bg-white border shadow-sm p-3">
                                    <span className="bi bi-geo-alt-fill"></span>
                                </div>
                                <div className="rounded bg-white border shadow-sm p-3">
                                    <span className="bi bi-facebook"></span>
                                </div>
                                <div className="rounded bg-white border shadow-sm p-3">
                                    <span className="bi bi-whatsapp"></span>
                                </div>
                                <div className="rounded bg-white border shadow-sm p-3">
                                    <span className="bi bi-chat"></span>
                                </div>
                                <div className="rounded bg-white border shadow-sm p-3">
                                    <span className="bi bi-flag"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row row-cols-1 g-0 bg-white my-4 border m-0 w-100 p-0">
                <div className="col">
                    <div className=" d-flex flex-md-row flex-column justify-content-between pt-2 px-1 px-lg-4">

                        <ul className="col-12 col-md-8 col-lg-7 col-xl-5 d-flex flex-wrap justify-content-evenly navbar-nav flex-row">
                            <li className={
                                toShowAbout ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary" 
                                :
                                "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                            }>
                                <button ref={aboutbtn} onClick={(e) => showMe(e)} data-bs-text="about" className="btn text-muted">About</button>
                            </li>
                            <li className={
                                toShowProduct? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                                :
                                "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                            }>
                                <button ref={productbtn} onClick={(e) => showMe(e)} data-bs-text="product" className="btn text-muted">Product</button>

                            </li>
                            <li className={
                                toShowHome ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                                :
                                "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                            }>

                                <button ref={homebtn} onClick={(e) => showMe(e)} data-bs-text="home" className="btn text-muted">Home page</button>
                            </li>
                            <li className={
                                toShowLive ? "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0 border-bottom border-primary"
                                : 
                                "nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0"
                            }>
                                <button ref={livebtn} onClick={(e) => showMe(e)} data-bs-text="live" className="btn text-muted">Live Stream</button>
                            </li>
                            <li className="nav-item mt-2 mt-sm-0 px-3 px-sm-0 px-lg-2 px-xl-0">
                                <button className=" btn btn-primary">Chat now</button>
                            </li>
                        </ul>

                        <div className="col-8 col-md-3 mx-auto mx-md-0 my-3 my-sm-2 my-md-0">
                            <input type="search" className="form-control" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Components  */}

            <About show={toShowAbout} />
            <SellerProducts show={toShowProduct} />
            <SellerHomepage show={toShowHome} />
            <LiveStreams show={toShowLive} />






        </main>
    )
}

export default Profile
