import '../styles/Footer.scss';
import React from 'react';
import { Link } from 'react-scroll';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Footer() {
    return (
        <>
            <footer id='footer'>
                <div className='page-width content-wrap flex row'>
                    <div className='column left'>
                        <div className='footer-menu'>
                            <h3>Menu</h3>
                            <Link to='mission'>Mission</Link>
                            <Link to='solutions'>Solutions</Link>
                            <Link to='team'>Meet the Team</Link>
                            <Link to='faq'>FAQ</Link>
                        </div>
                        
                        <div className='footer-address'>
                            <h3>QubePak LLC</h3>
                            <p>123 South First Street</p>
                            <p>San Jose, CA</p>
                            <p>95124</p>
                        </div>
                    </div>
                    
                    <div className='column right'>
                        <h3>Want to learn more about our product?</h3>
                        <p>Send us a message. We'll buy the coffee.</p>
                        <Formik>
                            <Form id='footer-contact'>

                            </Form>
                        </Formik>
                    </div>
                </div>
            </footer>
        </>
    )
}