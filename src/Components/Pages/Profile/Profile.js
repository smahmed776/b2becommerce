import React, { useContext } from 'react';
import './Profile.css';
import user from '../../../img/user.png'
import { RatingContext } from '../../GlobalContext/RatingContext';

const Profile = () => {


    const { Rating } = useContext(RatingContext)



    return (
        <main className="px-5 my-3">

            <div className="row row-cols-1 m-0 gy-0-sm w-100  bg-white">

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

                <div className="col p-2 border border-warning">

                    <div className="d-flex m-0 gx-5 w-100 align-items-center justify-content-between">
                        <div className="col-5 justify-selt-start">
                            <div className="d-flex justify-content-evenly p-2 pe-5">
                                <div className="border-end">
                                    <p>15</p>
                                    <p>Products</p>
                                </div>
                                <div className="border-end">
                                    <p>1.5k</p>
                                    <p>Followers</p>
                                </div>
                                <div className="border-end">
                                    <p>1st</p>
                                    <p>Level</p>
                                </div>
                                <div className="border-end">
                                    <p>4.5</p>
                                    <p>reviews</p>
                                </div>
                                <div className="">
                                    <p className="bi bi-flag"></p>
                                    <p>Bangladesh</p>
                                </div>
                            </div>
                        </div>


                        <div className="col-5 justify-self-end">
                            <div className="d-flex justify-content-evenly p-2 ps-5">
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
                    <div className=" d-flex justify-content-between pt-2 px-4">

                        <ul className="col-5 d-flex justify-content-evenly navbar-nav flex-row">
                            <li className="nav-item border-bottom border-primary">
                                <a href="/" className="nav-link text-muted">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-muted">Product</a>

                            </li>
                            <li className="nav-item">

                                <a href="/" className="nav-link text-muted">Home page</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-muted">Live Stream</a>
                            </li>
                            <li className="nav-item">
                                <button className=" btn btn-primary">Chat now</button>
                            </li>
                        </ul>

                        <div>
                            <input type="search" className="form-control" />
                        </div>

                    </div>
                </div>
            </div>

            {/* reviews  */}

            <div className="row row m-0 gy-3 gx-3 w-100 px-3 mb-2" style={{ fontSize: ".8rem" }}>
                <div className="col-5">
                    <div className="bg-white rounded">


                        <div className="row row-cols-2 m-0 gy-3 w-100" style={{ fontSize: ".8rem" }}>

                            <div className="col">
                                <div className=" px-5 p-md-3">
                                    <h3>4.4 <small className="text-muted">/5</small></h3>
                                    <div className="my-2" style={{ fontSize: "1.5rem" }}>{Rating(4)}</div>
                                    <small className="text-muted">90 reveiws</small>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row row-cols-1 m-0 gy-3 w-100" style={{ fontSize: ".8rem" }}>

                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "94%" }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">90</div>
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15</div>
                                        </div>

                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">3</div>
                                        </div>

                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "3%" }} aria-valuenow="3" aria-valuemin="0" aria-valuemax="100">1</div>
                                        </div>

                                    </div>
                                    <div className="col d-flex justify-content-start">
                                        <div className=" pe-3">
                                            <span className="bi bi-star-fill text-warning"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                            <span className="bi bi-star-fill text-muted"></span>
                                        </div>
                                        <div className="progress w-50">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "0%" }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0</div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="col-7">
                    <div className="border bg-white p-2">
                        <p className="p-3">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                             Veniam perspiciatis accusamus quam assumenda,
                             nobis vitae voluptatibus sequi similique beatae eaque,
                              possimus fugiat accusantium nemo? Tempore in atque
                               voluptates ipsum molestiae?
                            Consequatur deserunt esse sint sequi quisquam! 
                            Minima nesciunt asperiores voluptatibus perspiciatis, 
                            quidem hic est, recusandae rem perferendis fugit provident?
                             Accusantium numquam, officia quibusdam maiores dolorem illum?
                              Modi nemo assumenda reiciendis.
                            Explicabo ratione tempora nihil eius harum accusantium beatae
                             quia quisquam, enim repellat magnam delectus, qui at dignissimos
                              voluptatum deserunt corrupti soluta incidunt rerum expedita molestias
                               provident repudiandae eligendi! Expedita, reprehenderit.
                        </p>
                    </div>
                </div>
            </div>


            {/* about seller  */}

            <div className="row m-0 w-100 px-3 my-2">
                <div className="col-12">
                    <h6 className="text-muted my-2">About seller</h6>
                </div>

                <div className="col-5">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Necessitatibus itaque asperiores soluta alias optio labore
                              blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                               vero, quod quasi nemo ex debitis numquam.
                        Provident voluptates veritatis sunt atque quaerat tempore, unde 
                        vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                         pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                        Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora 
                        omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa 
                        molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                        Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                        , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                         odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>
                <div className="col-7">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Necessitatibus itaque asperiores soluta alias optio labore
                              blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                               vero, quod quasi nemo ex debitis numquam.
                        Provident voluptates veritatis sunt atque quaerat tempore, unde 
                        vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                         pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                        Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora 
                        omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa 
                        molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                        Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                        , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                         odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>
               
            </div>


            <div className="row m-0 w-100 px-3 my-2">
                <div className="col-12">
                    <h6 className="text-muted my-2">About Company</h6>
                </div>

                <div className="col-5">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Necessitatibus itaque asperiores soluta alias optio labore
                              blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                               vero, quod quasi nemo ex debitis numquam.
                        Provident voluptates veritatis sunt atque quaerat tempore, unde 
                        vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                         pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                        Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora 
                        omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa 
                        molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                        Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                        , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                         odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>
                <div className="col-7">
                    <div className="bg-white p-3 border rounded">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Necessitatibus itaque asperiores soluta alias optio labore
                              blanditiis id, aliquid quo impedit perferendis saepe perspiciatis
                               vero, quod quasi nemo ex debitis numquam.
                        Provident voluptates veritatis sunt atque quaerat tempore, unde 
                        vero iure error deleniti accusantium non quos magnam eaque eos reiciendis
                         pariatur ut reprehenderit in, hic quisquam perferendis, odio quo! Non, magni.
                        Veniam explicabo error vitae earum? Iusto blanditiis aspernatur tempora 
                        omnis quo reiciendis incidunt qui vero. Consequatur, dolor. Optio ipsa 
                        molestiae maxime, sunt sequi, nulla ducimus repudiandae dolorem cupiditate, omnis doloremque.
                        Aut et magnam eius eligendi molestiae, distinctio doloremque in nam, ab
                        , quasi sunt quisquam excepturi dignissimos sequi nihil nisi itaque porro
                         odit ipsa maxime facilis. Blanditiis sit a saepe sed?
                        </p>
                    </div>
                </div>
               
            </div>

        </main>
    )
}

export default Profile
