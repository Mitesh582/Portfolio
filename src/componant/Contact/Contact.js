import React from 'react'

function Contact() {
    return (
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

    )
}

export default Contact