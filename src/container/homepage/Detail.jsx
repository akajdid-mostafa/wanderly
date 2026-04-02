import React, { useState, Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import dateFormat from 'dateformat';

import AccordionOffer from "../../component/Other/AccordionOffer";
import Footer from "../../component/Other/Footer";
import Navbar from "../../component/Other/Navbar";
import Navstep from "../../component/Other/Navstep";
import ReviewTravel from "../../component/Other/ReviewTravel";

const Detail = (props) => {
    const accordions = [
        {
            icon: "./../images/list (4).png",
            title: "Food and Drink",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (3).png",
            title: "Transportation",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (2).png",
            title: "General",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (1).png",
            title: "Hotel Service",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (9).png",
            title: "Bussines Facilities",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (8).png",
            title: "Nearby facilities",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (7).png",
            title: "Kids",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (6).png",
            title: "Connectivity",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
        {
            icon: "./../images/list (5).png",
            title: "Public Facilities",
            detail: [
                "A la carte dinner",
                "A la carte lunch",
                "Breakfast",
                "Vegetarian meel",
            ]
        },
    ]

    const datein = useRef()
    const [inValue, setInValue] = useState(dateFormat(Date.now(), "mmm dd, yyyy"));

    const dateout = useRef()
    const [outValue, setOutValue] = useState(dateFormat(Date.now(), "mmm dd, yyyy"));

    const [toogleGues, setToogleGues] = useState(false);
    const [gues, setGues] = useState(2);
    return (
        <Fragment>
            <div className="overflow-hidden">
                <Navbar />

                <section>
                    <div className="container">
                        <Navstep step={"Destinations"} now={"Pasir putih resort"} />
                        <div className="mt-5 mb-5 d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between">
                            <div className="mb-4 mb-md-0">
                                <h2 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-3">Pasir putih resort</h2>
                                <div className="d-flex align-items-center">
                                    <div className="wrapper__rounded-green color__green semi-bold font__size--14 text__14-1024">
                                        Resort
                                    </div>
                                    <span className="medium font__size--14 text__14-1024 mx-sm-3 mx-2 color__gray-2">Indonesia</span>
                                    <div className="d-flex align-items-center">
                                        <img src="./../images/star.png" alt="" />
                                        <span className="ml-2 medium font__size--16 text__16-1024">4.8</span>
                                        <span className="ml-2 medium font__size--16 text__16-1024 color__gray-2">(256 reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper__media-share d-flex align-items-center">
                                <a href="#!">
                                    <img src="./../images/rwe (3).png" alt="" />
                                </a>
                                <a href="#!">
                                    <img src="./../images/rwe (2).png" alt="" />
                                </a>
                                <a href="#!">
                                    <img src="./../images/rwe (1).png" alt="" />
                                </a>
                                <a href="#!">
                                    <img src="./../images/rwe (4).png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-8">
                                <img src="./../images/Image Primary.png" className="images__grid-1" alt="" />
                            </div>
                            <div className="col-md-4">
                                <div className="wrapper__grid-img">
                                    <div className="item">
                                        <img src="./../images/ghfg (1).png" className="images__grid-2" alt="" />
                                    </div>
                                    <div className="item">
                                        <img src="./../images/ghfg (2).png" className="images__grid-3" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-8 mb-4 mb-lg-0">
                                <h3 className="semi-bold font__size--32 text__32-1024 mb-4">Entire rental unit</h3>
                                <div className="d-flex align-items-center flex-wrap">
                                    <div className="d-flex align-items-center mb-4">
                                        <img src="./../images/sdad.png" alt="" />
                                        <span className="medium font__size--16 text__16-1024 color__gray-2 ml-2">2 Guests</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-4 mx-4">
                                        <img src="./../images/flag.png" alt="" />
                                        <span className="medium font__size--16 text__16-1024 color__gray-2 ml-2">1 Bedroom</span>
                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <img src="./../images/flag.png" alt="" />
                                        <span className="medium font__size--16 text__16-1024 color__gray-2 ml-2">1 Private bath</span>
                                    </div>
                                </div>

                                <div className="wrapper__grid-host flex-wrap">
                                    <div className="item mb-md-5 mb-4">
                                        <h5 className="normal font__size--16 text__16-1024 color__gray-2 mb-3">Hosted by:</h5>
                                        <div className="host">
                                            <img src="./../images/saf (1).png" className="img" alt="" />
                                            <div className="about ml-2">
                                                <h5 className="semi-bold font__size--16 text__16-1024 mb-0">Alfonso Dias</h5>
                                                <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Joined in March 2014</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item mb-5">
                                        <h5 className="normal font__size--16 text__16-1024 color__gray-2 mb-3">Hosted by:</h5>
                                        <div className="host">
                                            <img src="./../images/Avatar (1).png" className="img" alt="" />
                                            <div className="about ml-2">
                                                <h5 className="semi-bold font__size--16 text__16-1024 mb-0">Roger Bergson</h5>
                                                <p className="mb-0 normal font__size--16 text__16-1024 color__gray-2">Joined in March 2014</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-wrap flex-md-nowrap">
                                    <div className="d-flex align-items-start mb-4 mb-md-5 mr-4">
                                        <img src="./../images/saf (3).png" alt="" />
                                        <div className="ml-2">
                                            <h5 className="semi-bold font__size--16 text__16-1024 mb-2">Dedicated workspace</h5>
                                            <p className="normal font__size--14 text__14-1024 color__gray-2 lh__4">A common area with wifi that’s <br /> well-suited for working.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-4 mb-md-5 mr-4">
                                        <img src="./../images/profile-tick.png" alt="" />
                                        <div className="ml-2">
                                            <h5 className="semi-bold font__size--16 text__16-1024 mb-2">Self check-in</h5>
                                            <p className="normal font__size--14 text__14-1024 color__gray-2 lh__4">Check yourself in with <br /> the lockbox.</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start mb-4 mb-md-5 mr-4">
                                        <img src="./../images/saf (2).png" alt="" />
                                        <div className="ml-2">
                                            <h5 className="semi-bold font__size--16 text__16-1024 mb-2">Free cancellation</h5>
                                            <p className="normal font__size--14 text__14-1024 color__gray-2 lh__4">Places in free cancellation <br /> for 48 hours.</p>
                                        </div>
                                    </div>
                                </div>

                                <ul class="nav nav-pills wrapper__nav-travel mb-4" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link medium font__size--14 text__14-1024 color__gray-2 active" id="pills-Overview-tab" data-toggle="pill" href="#pills-Overview" role="tab" aria-controls="pills-Overview" aria-selected="true">Overview</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link medium font__size--14 text__14-1024 color__gray-2" id="pills-Islands-tab" data-toggle="pill" href="#pills-Reviews" role="tab" aria-controls="pills-Reviews" aria-selected="false">40+ Reviews</a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-Overview" role="tabpanel" aria-labelledby="pills-Overview-tab">
                                        <p className="normal font__size--16 text__16-1024 mb-4">The ultimate luxury glamping resort experience in a world-class diving location within the beautiful surroundings of Northwest Bali. </p>
                                        <p className="normal font__size--16 text__16-1024 mb-2">On a quiet peninsula beside a blissful white-sand beach, this eco-friendly, tented, boutique retreat. From here, you can enjoy a spellbinding vista that extends across the gentle waters of Banyuwedang Bay to the lowland forests of the West Bali National Park, taking in a mangrove-entwined coastline and the tiny uninhabited island of Menjangan...</p>

                                        <a href="#!" className="color__black medium font__size--16 text__16-1024">Read More</a>

                                        <h4 className="semi-bold font__size--32 text__32-1024 my-4">What this place offers</h4>

                                        {
                                            accordions.map((obj) => {
                                                return <div className="mb-2">
                                                    <AccordionOffer data={obj} />
                                                </div>
                                            })
                                        }


                                    </div>
                                    <div class="tab-pane fade" id="pills-Reviews" role="tabpanel" aria-labelledby="pills-Reviews-tab">
                                        <h2 className="semi-bold font__size--32 text__32-1024 mb-4">40+ reviews</h2>

                                        <div className="mb-4">
                                            <div className="wrapper__rating-list">
                                                <div className="d-flex align-items-end flex-wrap flex-sm-nowrap">
                                                    <div className="rating flex-shrink-0">
                                                        <h5 className="semi-bold font__size--48 text__48-1024 text__48-md text__48-sm mb-3">4.8</h5>
                                                        <div className="star">
                                                            <img src="./../images/Frame (sasd5).png" alt="" />
                                                            <img src="./../images/Frame (sasd5).png" alt="" />
                                                            <img src="./../images/Frame (sasd5).png" alt="" />
                                                            <img src="./../images/Frame (sasd5).png" alt="" />
                                                            <img src="./../images/Frame (sasd5).png" alt="" />
                                                        </div>
                                                        <p className="medium mb-0 font__size--14 text__14-1024 color__gray-2">
                                                            Based on 532 review
                                                        </p>
                                                    </div>
                                                    <div className="progress__wrap w-100 ml-sm-5 mt-4 mt-sm-0">
                                                        <div className="items">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="title normal font__size--14 text__14-1024 mb-0 d-inline-block">Cleanliness</h5>
                                                                <div class="progress w-100 mr-2">
                                                                    <div
                                                                        class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "85%" }}
                                                                        aria-valuenow="25"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                    ></div>
                                                                </div>
                                                                <span className="medium font__size--14 text__14-1024">4.5</span>
                                                            </div>
                                                        </div>
                                                        <div className="items">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="title normal font__size--14 text__14-1024 mb-0 d-inline-block">Communication</h5>
                                                                <div class="progress w-100 mr-2">
                                                                    <div
                                                                        class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "65%" }}
                                                                        aria-valuenow="25"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                    ></div>
                                                                </div>
                                                                <span className="medium font__size--14 text__14-1024">4.5</span>
                                                            </div>
                                                        </div>
                                                        <div className="items">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="title normal font__size--14 text__14-1024 mb-0 d-inline-block">Check-in</h5>
                                                                <div class="progress w-100 mr-2">
                                                                    <div
                                                                        class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "35%" }}
                                                                        aria-valuenow="25"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                    ></div>
                                                                </div>
                                                                <span className="medium font__size--14 text__14-1024">4.5</span>
                                                            </div>
                                                        </div>
                                                        <div className="items">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="title normal font__size--14 text__14-1024 mb-0 d-inline-block">Accuracy</h5>
                                                                <div class="progress w-100 mr-2">
                                                                    <div
                                                                        class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "0%" }}
                                                                        aria-valuenow="25"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                    ></div>
                                                                </div>
                                                                <span className="medium font__size--14 text__14-1024">4.5</span>
                                                            </div>
                                                        </div>
                                                        <div className="items">
                                                            <div className="d-flex align-items-center">
                                                                <h5 className="title normal font__size--14 text__14-1024 mb-0 d-inline-block">Location</h5>
                                                                <div class="progress w-100 mr-2">
                                                                    <div
                                                                        class="progress-bar"
                                                                        role="progressbar"
                                                                        style={{ width: "0%" }}
                                                                        aria-valuenow="25"
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                    ></div>
                                                                </div>
                                                                <span className="medium font__size--14 text__14-1024">4.5</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4">
                                            <ReviewTravel />
                                        </div>
                                        <div className="mb-4">
                                            <ReviewTravel love={true} />
                                        </div>
                                        <div className="mb-4">
                                            <ReviewTravel />
                                        </div>

                                        <div className="text-center">
                                            <a href="#!" className="btn btn__outlined--black color__black shadow color__black no__opacity medium font__size--16 text__16-1024 rounded__50 btn__review">View all 30+ reviews</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="wrapper__detail-reserve">
                                    <h3 className="semi-bold font__size--32 text__32-1024 mb-5">$200<span className="medium font__size--14 text__14-1024">/Night</span></h3>

                                    <div className="mb-4">
                                        <h5 className="font__size--16 text__16-1024 semi-bold mb-1">5 Nights <span className="normal">in Pasir putih resort</span></h5>
                                        <p className="normal font__size--14 text__14-1024 color__gray-2">Feb 8, 2023 - Feb 13, 2023</p>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <h5 className="medium font__size--14 text__14-1024">Check in</h5>
                                            <div className="wrapper__field-date position-relative">
                                                <img src="./../images/calendar-add.png" onClick={() => datein.current.showPicker()} className="pointer" alt="" />
                                                <input type="date" ref={datein} className="ml-2" onChange={e => {
                                                    setInValue(dateFormat(e.target.value, "mmm dd, yyyy"))
                                                }} />
                                                <span className="ml-2 medium font__size--16 text__16-1024">{inValue}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="medium font__size--14 text__14-1024">Check Out</h5>
                                            <div className="wrapper__field-date position-relative">
                                                <img src="./../images/calendar-remove.png" onClick={() => dateout.current.showPicker()} className="pointer" alt="" />
                                                <input type="date" ref={dateout} className="ml-2" onChange={e => {
                                                    setOutValue(dateFormat(e.target.value, "mmm dd, yyyy"))
                                                }} />
                                                <span className="ml-2 medium font__size--16 text__16-1024">{outValue}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="medium font__size--14 text__14-1024">Guest</h5>
                                        <div className={"wrapper__select-option position-relative " + (toogleGues ? "active" : "")}>
                                            <div className="d-flex align-items-center justify-content-between pointer" onClick={() => setToogleGues(!toogleGues)}>
                                                <div className="d-flex align-items-center">
                                                    <img src="./../images/profile-2user.png" alt="" />
                                                    <span className="ml-2 medium font__size--16 text__16-1024">{gues} Guest</span>
                                                </div>
                                                <img src="./../images/arrow-down.png" alt="" className="arrow" />
                                            </div>
                                            <div className="guest__list meium font__size--16 text__16-1024">
                                                <div className="list pointer" onClick={() => {
                                                    setGues(1)
                                                    setToogleGues(!toogleGues)
                                                }}>1 Guest</div>
                                                <div className="list pointer" onClick={() => {
                                                    setGues(2)
                                                    setToogleGues(!toogleGues)
                                                }}>2 Guest</div>
                                                <div className="list pointer" onClick={() => {
                                                    setGues(3)
                                                    setToogleGues(!toogleGues)
                                                }}>3 Guest</div>
                                                <div className="list pointer" onClick={() => {
                                                    setGues(4)
                                                    setToogleGues(!toogleGues)
                                                }}>4 Guest</div>
                                            </div>
                                        </div>
                                    </div>

                                    <NavLink to="/request-to-book" className="btn btn__blue shadow color__white w-100 rounded__50 medium font__size--16 text__16-1024">Reserve</NavLink>

                                    <div className="my-4">
                                        <p className="normal font__size--14 text__14-1024 color__gray-2 mb-0">You won't be charged yet</p>
                                    </div>

                                    <div className="">
                                        <div className="wrapper__side-detail clear d-flex align-items-center justify-content-between">
                                            <span className="medium font__size--16 text__16-1024 color__gray-2">$200 x 5 nights</span>
                                            <span className="medium font__size--16 text__16-1024">$1,000</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="wrapper__side-detail clear d-flex align-items-center justify-content-between">
                                            <span className="medium font__size--16 text__16-1024 color__gray-2">10% campaign discount</span>
                                            <span className="medium font__size--16 text__16-1024">-$10</span>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="wrapper__side-detail clear d-flex align-items-center justify-content-between">
                                            <span className="medium font__size--16 text__16-1024 color__gray-2">Service fee</span>
                                            <span className="medium font__size--16 text__16-1024">$0</span>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="wrapper__side-detail d-flex align-items-center justify-content-between">
                                            <span className="medium font__size--16 text__16-1024 color__gray-2">Total before taxes</span>
                                            <span className="medium font__size--16 text__16-1024">$990</span>
                                        </div>
                                    </div>


                                    <div className="d-inline-block">
                                        <a href="#!" className="color__gray-1 d-flex align-items-center">
                                            <img src="./../images/flag.png" alt="" />
                                            <span className="medium font__size--16 text__16-1024 ml-2">Report this listing</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Footer />
            </div >
        </Fragment >
    );
};

export default Detail;
