import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componant/Header';
import Home from './componant/Home/Home';
import About from './componant/About/About';
import Skills from './componant/Skills/Skills';
import Contect from './componant/Contect/Contect';
import Footer from './componant/Footer/Footer';
import Portfolio from './componant/Portfolio/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header/>
    <Home/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contect/>
    <Footer/>
    </>
);
