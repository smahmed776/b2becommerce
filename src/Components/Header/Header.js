import React, { useEffect, useRef, useState } from 'react';
import freeLogo from './freeLogo.jpg';
import './Header.css'

const Header = () => {
    const [headerClass, setHeaderClass] = useState("container-fluid d-flex-justify-content-center bg-white border-bottom px-2 px-md-5")

    const makeSticky = () => {
        if (window.scrollY > window.innerHeight / 7 && window.scrollY < window.innerHeight / 2) {
            document.getElementById('fixedHeader').style.opacity = '0'
            setHeaderClass("container-fluid d-flex-justify-content-center bg-white border-bottom px-2 px-md-5 makefixed")
        } else if (window.scrollY > window.innerHeight / 2) {
            // document.getElementById('fixedHeader').classList.add('makefixed')
            document.getElementById('fixedHeader').style.opacity = '1'
            setHeaderClass("container-fluid d-flex-justify-content-center bg-white border-bottom px-2 px-md-5 makefixed")

        } else {
            // document.getElementById('fixedHeader').classList.remove("makefixed")
            document.getElementById('fixedHeader').style.opacity = '1'
            setHeaderClass("container-fluid d-flex-justify-content-center bg-white border-bottom px-2 px-md-5 ")
        }
    }

    window.addEventListener('scroll', makeSticky)

    return (
        <header>

            <div className="bg-dark d-flex justify-content-center">
                <nav className="navbar navbar-dark px-0 px-md-2 top-header">
                    <div className="row row-cols-3 row-cols-sm-5 gx-0 m-0 justify-content-center align-items-center w-100">
                        <div className="col">

                            <ul className="navbar-nav flex-row justify-content-evenly w-100">
                                <li className="nav-item"><a href="" className="nav-link">Dropshipping</a></li>
                            </ul>
                        </div>
                        <div className="col">

                            <ul className="navbar-nav flex-row justify-content-evenly w-100">
                               
                                <li className="nav-item"><a href="" className="nav-link">Trade Shows</a></li>
                               
                            </ul>
                        </div>
                        <div className="col">

                            <ul className="navbar-nav flex-row justify-content-evenly w-100">
                               
                                <li className="nav-item"><a href="" className="nav-link">Help</a></li>
                            </ul>
                        </div>
                        <div className="col">

                            <ul className="navbar-nav flex-row justify-content-evenly w-100">
                               
                                <li className="nav-item"><a href="" className="nav-link">For Buyers</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="navbar-nav flex-row justify-content-evenly w-100">
                                <li className="nav-item"><a href="" className="nav-link">Make money on Globalhub</a></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>


            <div id="fixedHeader" className={headerClass}>
                <nav className="navbar navabar-light">
                    <div className="navbar-brand rounded-pill">
                        <a href="/">
                            <img src={freeLogo} alt="" height="55px" width="55px" />
                        </a>
                    </div>
                    <div className="nav-search">
                        <form action="">
                            <input type="search" className="form-control bg-primary text-white" placeholder="Search for your Products..." />
                        </form>
                    </div>
                    <button className="btn btn-transparent">

                        <span className="bi bi-justify d-lg-none"></span>
                    </button>
                    <div className="navbar navbar-expand-md navbar-light bg-white d-none d-lg-flex">
                        <ul className="navbar-nav mainnav">
                            <li className="nav-item">
                                <a href="" className="nav-link d-flex flex-column justify-content-center align-items-center">
                                    <span className="bi bi-chat"></span><span>My Inbox</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link d-flex flex-column justify-content-center align-items-center">
                                    <span className="bi bi-cart4"></span><span> Cart</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link d-flex flex-column justify-content-center align-items-center">
                                    <span className="bi bi-megaphone"></span><span>My offers</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link d-flex flex-column justify-content-center align-items-center">
                                    <span className="bi bi-bell"></span><span>Notification</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="" className="nav-link d-flex flex-column justify-content-center align-items-center">
                                    <span className="bi bi-person"></span><span>My Account</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>


            <div className="bg-white container-fluid px-2 px-xl-5 mt-2">
                <nav className="navbar navbar-light w-100">
                    

                            <ul className="navbar-nav flex-row flex-wrap justify-content-evenly w-100 ps-3">
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        <span className="bi bi-justify pe-3"></span> Categories
                                    </a>
                                </li>
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Save more on app
                                    </a>
                                </li>
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Affiliate Program
                                    </a>
                                </li>

                        
                        
                       

                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Sell on imponexpo
                                    </a>
                                </li>
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Customer care
                                    </a>
                                </li>
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Track your order
                                    </a>
                                </li>
                            
                        

                           
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Help
                                    </a>
                                </li>
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <a href="" className="nav-link">
                                        Login
                                    </a>
                                </li>
                                <li className="nav-item flex-fill border-end me-2 p-1">
                                    <button href="" className="btn btn-primary">
                                        Sign Up
                                    </button>
                                </li>
                            </ul>
                        
                    
                </nav>
            </div>

        </header>
    )
}

export default Header
