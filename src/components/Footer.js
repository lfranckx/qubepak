import '../styles/Footer.scss';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Footer() {
    const [btnState, setBtnState] = useState('Send');
    const [buttonDisabled, handleButtonDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        setBtnState("Sending...");
    }

    const contactFormSchema = Yup.object().shape({

    });

    return (
        <>
            <footer id='footer'>
                <div className='page-width content-wrap flex row'>
                    <div className='column left'>
                        <div className='footer-menu'>
                            <h3>Menu</h3>
                            <div className='link-wrap'>
                                <Link to='mission'>Mission</Link>
                            </div>
                            <div className='link-wrap'>
                                <Link to='solutions'>Solutions</Link>
                            </div>
                            <div className='link-wrap'>
                                <Link to='team'>Meet the Team</Link>
                            </div>
                            <div className='link-wrap'>
                                <Link to='faq'>FAQ</Link>
                            </div>
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
                        <Formik
                            initialValues={{ name: "", email: "", phone: "", message: "" }}
                            validationSchema={contactFormSchema}
                            onSubmit={submitForm}
                        >
                            <Form id='footer-contact'>

                            </Form>
                        </Formik>
                    </div>
                </div>
            </footer>
        </>
    );
}