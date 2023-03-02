import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './componant/Header';
import Home from './componant/Home/Home';
import About from './componant/About/About';
import Skills from './componant/Skills/Skills';
import Contact from './componant/Contact/Contact';
import Footer from './componant/Footer/Footer';
import Resume from './componant/Resume/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Resume' element={<Resume />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Footer' element={<Footer />} />
            </Routes>
        </BrowserRouter>
    </>
);
