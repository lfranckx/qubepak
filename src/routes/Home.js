import React from 'react';
import { Link } from 'react-scroll';
import logo from '../images/LOGO.png';
import '../styles/Header.scss';
import ContactBtn from '../components/ContactBtn';

export default function Home(props) {


    return (
        <div className='header-wrap'>
            <header id='header' className='page-width'>
                <nav id='nav' className='flex row'>
                    <div className='logo-wrap'>
                        <img src={logo} alt='QubePak logo' />
                    </div>
                    <div className='link-wrap'>
                        <Link to='/'>Mission</Link>
                    </div>
                    <div className='link-wrap'>
                        <Link to='/'>Solutions</Link>
                    </div>
                    <div className='link-wrap'>
                        <Link to='/'>Founders</Link>
                    </div>
                    <div className='link-wrap'>
                        <Link to='/'>FAQ</Link>
                    </div>
                    <div className='btn-wrap'>
                        <ContactBtn />
                    </div>
                </nav>


                <div class='content-wrap flex column'>
                    <div className='img-wrap'>
                        <img src={logo} alt='QubePak logo' />
                    </div>
                    <h1><span>(</span> Quintessential Unboxing Experience <span>)</span></h1>
                    <div className='btn-wrap'>
                        <Link to='/' className='btn-sec'>Learn how we’re revolutionizing shipping</Link>
                    </div>
                </div>
            </header>
        </div>
    );
}