import React from 'react'

function About() {
    return (
        <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
            <div className="container">
                <div className="row d-flex no-gutters">
                    <div className="col-md-6 col-lg-5 d-flex">
                        <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay" />
                            <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/about-1.jpg)' }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
                        <div className="py-md-5">
                            <div className="row justify-content-start pb-3">
                                <div className="col-md-12 heading-section ftco-animate">
                                    <span className="subheading">My Intro</span>
                                    <h2 className="mb-4" style={{ fontSize: 34, textTransform: 'capitalize' }}>About Me</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <ul className="about-info mt-4 px-md-0 px-2">
                                        <li className="d-flex"><span>Name:</span> <span>Mitesh Jethava</span></li>
                                        <li className="d-flex"><span>Date of birth:</span> <span>November 18, 2003</span></li>
                                        <li className="d-flex"><span>Address:</span> <span>Surat, Gujrat.</span></li>
                                        <li className="d-flex"><span>Zip code:</span> <span>395006</span></li>
                                        <li className="d-flex"><span>Email:</span> <span><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddbea4b9b8b3b2aab4a9a7b6b49dbab0bcb4b1f3beb2b0">miteshjethava001@gmail.com</a></span></li>
                                        <li className="d-flex"><span>Phone: </span> <span>+91 99781 21497</span></li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <div className="my-interest d-lg-flex w-100">
                                        <div className="interest-wrap d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-listening" />
                                            </div>
                                            <div className="text">Music</div>
                                        </div>
                                        <div className="interest-wrap d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-suitcases" />
                                            </div>
                                            <div className="text">Travel</div>
                                        </div>
                                        <div className="interest-wrap d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-video-player" />
                                            </div>
                                            <div className="text">Movie</div>
                                        </div>
                                        <div className="interest-wrap d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="flaticon-football" />
                                            </div>
                                            <div className="text">Sports</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About