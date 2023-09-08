import '../styles/Header.scss';
import React, { useState, useEffect } from 'react';
import logo from '../images/LOGO.png';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

export default function Header() {
    const [headerHeight, setHeaderHeight] = useState("90vh");
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(90 - (scrollY / 10), 0);
            setHeaderHeight(`${newHeight}vh`);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='header-wrap'>
            <motion.header
                style={{ minHeight: headerHeight, transition: "min-height 0.4s ease-in-out" }}
                id='header'
                className='page-width'
            >
                <div className={active ? 'nav-wrap active' : 'nav-wrap'}>
                    <nav id='nav' className={`flex row page-width ${active ? 'active' : ''}`}>
                        <div className={active ? 'logo-wrap active' : 'logo-wrap'}>
                            <Link 
                                onClick={() => setActive(!active)}
                                activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={500}
                            >
                                <img src={logo} alt='QubePak logo' />
                            </Link>
                        </div>
                        <div className={active ? 'logo-wrap active' : 'logo-wrap'}>
                            <Link 
                                onClick={() => setActive(!active)}
                                activeClass="active" to="mission" spy={true} smooth={true} offset={-120} duration={500}
                            >
                                Mission
                            </Link>
                        </div>
                        <div className={active ? 'logo-wrap active' : 'logo-wrap'}>
                            <Link 
                                onClick={() => setActive(!active)}
                                activeClass="active" to="about" spy={true} smooth={true} offset={-80} duration={500}
                            >
                                About
                            </Link>
                        </div>
                        <div className={active ? 'logo-wrap active' : 'logo-wrap'}>
                            <Link 
                                onClick={() => setActive(!active)}
                                activeClass="active" to="team" spy={true} smooth={true} offset={-120} duration={500}
                            >
                                Team
                            </Link>
                        </div>
                        <div className={active ? 'logo-wrap active' : 'logo-wrap'}>
                            <Link 
                                onClick={() => setActive(!active)}
                                activeClass="active" to="faq" spy={true} smooth={true} offset={-120} duration={500}
                            >
                                FAQ
                            </Link>
                        </div>
                        <div className='btn-wrap'>
                            <Link 
                                onClick={() => setActive(!active)}
                                className='btn' 
                                activeClass="active" to="footer" spy={true} smooth={true} offset={-120} duration={500}
                            >
                                Contact
                            </Link>
                        </div>
                    </nav>
                </div>

                <div className='content-wrap flex column'>
                    <div className='img-wrap'>
                        <img src={logo} alt='QubePak logo' />
                    </div>
                    <h1><span>(</span> Quintessential Unboxing Experience <span>)</span></h1>
                    <div className='btn-wrap'>
                        <Link className='btn-sec' activeClass="active" to="about" spy={true} smooth={true} offset={-120} duration={500}>Come and shake up shipping with us</Link>
                    </div>
                </div>
            </motion.header>
        </div>
    );
}
