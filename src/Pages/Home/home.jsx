import React from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import HeaderImg1 from "../../images/homeImg1.jpg";
import HeaderImg2 from "../../images/homeImg2.jpg";
import HeaderImg3 from "../../images/homeImg3.jpg";
import HeaderImg4 from "../../images/homeImg4.jpg";
import HeaderImg5 from "../../images/homeImg5.jpg";

import paraImg from "../../images/h1p1.png";



function Home() {
    return (
        <>
            <Carousel 
            autoPlay={true}
            interval={3000}
            controls={false}
            indicators={false}
            >
                
                <div className="slide">
                    <img src={HeaderImg1} />
                    <h6>KERALA SOCIAL CENTRE</h6>
                </div>
                <div className="slide">
                    <img src={HeaderImg2} />

                </div>
                <div className="slide">
                    <img src={HeaderImg3} />

                </div>
                <div className="slide">
                    <img src={HeaderImg4} />

                </div><div className="slide">
                    <img src={HeaderImg5} />

                </div>

            </Carousel>
            <h6></h6>
            <div className="custom container mb-5">
                <h4>KERALA SOCIAL CENTRE</h4>
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <p>
                                The Kerala Social Centre is a prominent sociocultural forum of expatriates from Kerala in Abu Dhabi.
                            </p>
                            <p>
                                The Centre Established in 1972 and it moved to the current premises in Madinat Zayed in the capital in 1996.
                            </p>
                            <p>
                                One of the five Indian community organizations in the capital registered with the UAE Ministry of Community Development, the KSC caters to around 4,500 people, including around 1,500 members and their family members.
                            </p>
                        </div>
                        <button class="btn-two" > <a href="./about">Read More</a> </button>



                    </div>
                    <div className="col-sm-6">
                        <img src={paraImg} className="img-fluid"  alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;