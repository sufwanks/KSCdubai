import './navbar.css'
import navLogo from '../../images/kscLogoImg.png'

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLandmark } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const changeBg = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener("scroll", changeBg);


    return (


        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faEnvelopeOpen} />info@kscabudhabi.com
                </div>
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faPhone} />+971 2 631 4455
                </div>
                <div className="col-md-4">
                    <FontAwesomeIcon icon={faLandmark} />Abu Dhabi, UAE
                </div>
            </div>
            <nav className={
                navbar
                    ? "navbar navbar-expand-sm fixed-top active"
                    : "navbar navbar-expand-sm fixed-top"
            }>

                <NavLink className="navbar-brand" to="/">
                    <img src={navLogo} alt="" />
                </NavLink>
                <div>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                OUR FACILITIES
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/gallery">
                                GALLERY
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                CONTACT
                            </NavLink>
                        </li>
                        <button class="btn-hover color-9">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </button>

                    </ul>
                    
                </div>

            </nav>
        </div>

    )

}


export default Navbar
