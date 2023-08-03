import '../styles/Header.scss';
import React from 'react';
import logo from '../images/LOGO.png';
import { Link } from 'react-scroll';
import { motion, useTransform, useViewportScroll } from "framer-motion";

export default function Header() {
    const { scrollYProgress } = useViewportScroll();
    const headerHeight = useTransform(scrollYProgress, [0, 1], ["90vh", "0vh"]);

    return (
        <div className='header-wrap'>
            <motion.header 
                style={{ minHeight: headerHeight, transition: "min-height 0.28s ease-in-out" }}
                id='header'
                className='page-width'
            >
                <div className='nav-wrap'>
                    <nav id='nav' className='flex row page-width'>
                        <div className='logo-wrap'>
                            <Link activeClass="active" to="header" spy={true} smooth={true} offset={0} duration={500}>
                                <img src={logo} alt='QubePak logo' />
                            </Link>
                        </div>
                        <div className='link-wrap'>
                            <Link activeClass="active" to="mission" spy={true} smooth={true} offset={-120} duration={500}>Mission</Link>
                        </div>
                        <div className='link-wrap'>
                            <Link activeClass="active" to="solutions" spy={true} smooth={true} offset={0} duration={500}>Solutions</Link>
                        </div>
                        <div className='link-wrap'>
                            <Link activeClass="active" to="team" spy={true} smooth={true} offset={-120} duration={500}>Team</Link>
                        </div>
                        <div className='link-wrap'>
                            <Link activeClass="active" to="faq" spy={true} smooth={true} offset={-120} duration={500}>FAQ</Link>
                        </div>
                        <div className='btn-wrap'>
                        <Link className='btn' activeClass="active" to="footer" spy={true} smooth={true} offset={-120} duration={500}>Contact</Link>
                        </div>
                    </nav>
                </div>
                
                <div class='content-wrap flex column'>
                    <div className='img-wrap'>
                        <img src={logo} alt='QubePak logo' />
                    </div>
                    <h1><span>(</span> Quintessential Unboxing Experience <span>)</span></h1>
                    <div className='btn-wrap'>
                        <Link className='btn-sec' activeClass="active" to="solutions" spy={true} smooth={true} offset={0} duration={500}>Learn how we’re revolutionizing shipping</Link>
                    </div>
                </div>
            </motion.header>
        </div>
    );
}