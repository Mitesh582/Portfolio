import React from 'react'

function Portfolio() {
    return (
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
                        <div style={{display:"flex"}}>
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

    )
}

export default Portfolio