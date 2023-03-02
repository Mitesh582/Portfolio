import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Mitesh<span>.</span></a>
                    <button className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav nav ml-auto">
                            <li className="nav-item"><NavLink to="/" className="nav-link"><span>Home</span></NavLink></li>
                            <li className="nav-item"><NavLink to="/About" className="nav-link"><span>About</span></NavLink></li>
                            <li className="nav-item"><NavLink to="/Skills" className="nav-link"><span>Skills</span></NavLink></li>
                            <li className="nav-item"><NavLink to="/Resume" className="nav-link"><span>Resume</span></NavLink></li>
                            <li className="nav-item"><NavLink to="/Contact" className="nav-link"><span>Contact</span></NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header