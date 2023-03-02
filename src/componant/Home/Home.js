import React from 'react'

function Home() {
    return (
        <>
            <section id="home-section" className="hero">
                <div className="home-slider owl-carousel">
                    <div className="slider-item">
                        <div className="overlay" />
                        <div className="container-fluid px-md-0">
                            <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                                <div className="one-third order-md-last img" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
                                    <div className="overlay" />
                                    <div className="overlay-1" />
                                </div>
                                <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text">
                                        <span className="subheading">Hello! This is Mitesh</span>
                                        <h1 className="mb-4 mt-3">Creative <span>UI/UX</span> Designer &amp; Developer</h1>
                                        <p><a href="#" className="btn btn-primary">Hire me</a> <a href="#" className="btn btn-primary btn-outline-primary">Download CV</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            <section className="ftco-section bg-light" id="skills-section">
                <div className="container">
                    <div className="row justify-content-center pb-5">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <span className="subheading">Skills</span>
                            <h2 className="mb-4">My Skills</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row progress-circle mb-5">
                        <div className="col-lg-4 mb-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="h5 font-weight-bold text-center mb-4">CSS</h2>
                                <div className="progress mx-auto" data-value={95}>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">95<sup className="small">%</sup></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="h5 font-weight-bold text-center mb-4">HTML</h2>
                                <div className="progress mx-auto" data-value={98}>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">98<sup className="small">%</sup></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="h5 font-weight-bold text-center mb-4">jQuery</h2>
                                <div className="progress mx-auto" data-value={68}>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">68<sup className="small">%</sup></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="h5 font-weight-bold text-center mb-4">React-Js</h2>
                                <div className="progress mx-auto" data-value={92}>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">92<sup className="small">%</sup></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="h5 font-weight-bold text-center mb-4">Javascript</h2>
                                <div className="progress mx-auto" data-value={83}>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">83<sup className="small">%</sup></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="bg-white rounded-lg shadow p-4">
                                <h2 className="h5 font-weight-bold text-center mb-4">SEO</h2>
                                <div className="progress mx-auto" data-value={95}>
                                    <span className="progress-left">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar border-primary" />
                                    </span>
                                    <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                        <div className="h2 font-weight-bold">95<sup className="small">%</sup></div>
                                    </div>
                                </div>
                                <div className="row text-center mt-4">
                                    <div className="col-6 border-right">
                                        <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                                    </div>
                                    <div className="col-6">
                                        <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ftco-section" id="services-section">
                <div className="container">
                    <div className="section-title">
                        <h2 style={{ textAlign: 'center' }}>Resume</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up">
                            <h3 className="resume-title" style={{ textAlign: 'center' }}>Sumary</h3>
                            <div className="resume-item pb-0">
                                <h4>Mitesh Jethava</h4>
                                <p><em>Humble and enthusiastic, I am interested in IT and
                                    everything in its orbit. I recently started getting
                                    fascinated by web programming, e.g. Creating
                                    websites. I gained experience working in this field.
                                    This field complements my studies, I am keen to gain
                                    more experience in this field. For this reason, I am
                                    looking for a company that is willing to offer me a
                                    placement among their developers. In return, I will
                                    offer my full commitment, and be a pleasant and
                                    friendly addition to your team. So I am currently
                                    looking for a job or internship as a front end developer</em></p>
                                <ul>
                                    <li>Portland par 127,Orlando, FL</li>
                                    <li>+91 99781 21497</li>
                                    <li>miteshjethava001@gmail.com</li>
                                </ul>
                            </div>
                            <h3 className="resume-title">Education</h3>
                            <div style={{ display: "flex" }}>
                                <div className="resume-item col-6">
                                    <h4>Mauni International School</h4>
                                    <h5>2020 - 2021</h5>
                                    <p><em>Completed 12th from Mauni International School.</em></p>
                                </div>
                                <div className="resume-item col-6">
                                    <h4>Swarrnim Startup & Innovation University</h4>
                                    <h5>2021</h5>
                                    <p>BCA</p>
                                    <p>Bachelors in Computer Application.<br /> (Running)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Front-End development </h4>
                                <h5>2021 - Present</h5>
                                <p><em>Experion, India, Ind </em></p>
                                <ul>
                                    <li>Good JavaScript Front-end development experience</li>
                                    <li>Experience writing and running automated tests including, but not limited
                                        to, integration and unit</li>
                                    <li>Experience in collaborating with other in a software development team and
                                        conforming to standard practices and code guidelines</li>
                                    <li>Improved code efficiency up to 40 percent by
                                        stocking commonly used functions .</li>
                                    <li>Experience deploying Node.js into production and scaling applications
                                        beyond single instances</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>STRENGTH</h4>
                                <h5>Love for the Industry</h5>
                                <li>Doing my job with great love and
                                    passion helps me stay motivated
                                    at all times.
                                </li><br />
                                <h5>Life-long Learner</h5>
                                <li>Never done learning and always
                                    seeking to improve myself.
                                    Curious about new possibilities
                                    and taking action to explore them</li>
                                <br />
                                <h5>Time-management</h5>
                                <li>Able to divide my time in the most
                                    optimal way possible.
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-section text-center ftco-animate">
                            <span className="subheading">Contact us</span>
                            <h2 className="mb-4">Have a Project?</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-8">
                            <form action="#" className="bg-light p-4 p-md-5 contact-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name id cols={30} rows={7} className="form-control" placeholder="Message" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Send Message" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 d-flex pl-md-5">
                            <div className="row">
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-map-marker" />
                                    </div>
                                    <div className="text">
                                        <p><span>Address:</span> Surat Gujrat</p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-phone" />
                                    </div>
                                    <div className="text">
                                        <p><span>Phone:</span> <a href="tel://1234567920">+91 99781 21497</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-paper-plane" />
                                    </div>
                                    <div className="text">
                                        <p><span>Email:</span> <a href="/cdn-cgi/l/email-protection#4e272028210e37213b3c3d273a2b602d2123"><span className="__cf_email__" data-cfemail="a0c9cec6cfe0d9cfd5d2d3c9d4c58ec3cfcd">miteshjethava001@gmail.com</span></a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="fa fa-globe" />
                                    </div>
                                    <div className="text">
                                        <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Lets talk about</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href="#" className="btn btn-primary">Learn more</a></p>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Home</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />About</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Skills</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Resume</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Services</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Web Design</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Web Development</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Business Strategy</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Data Analysis</a></li>
                                    <li><a href="#"><span className="fa fa-chevron-right mr-2" />Graphic Design</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon fa fa-map marker" /><span className="text">Surat Gujrat</span></li>
                                        <li><a href="#"><span className="icon fa fa-phone" /><span className="text">+91 99781 21497</span></a></li>
                                        <li><a href="#"><span className="icon fa fa-paper-plane pr-4" /><span className="text"><span className="__cf_email__" data-cfemail="4d24232b220d3422383f2922202c2423632e2220">miteshjethava001@gmail.com</span></span></a></li>
                                    </ul>
                                </div>
                                <ul className="ftco-footer-social list-unstyled mt-2">
                                    <li className="ftco-animate"><a href="#"><span className="fa fa-twitter" /></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="fa fa-facebook" /></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright ©
                                All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Mitesh</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home;