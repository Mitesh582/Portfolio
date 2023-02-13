import React from 'react'

function Home() {
    return (
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

    )
}

export default Home