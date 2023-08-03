import '../styles/Footer.scss';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

export default function Footer() {
    const [btnState, handleBtnState] = useState('Send');
    const [btnDisabled, handleBtnDisabled] = useState(false);
    const [message, handleMessage] = useState('');

    const submitForm = (values) => {
        handleBtnState("Sending...");

        const newValues = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            message: values.message
        }

        try {
            emailjs.send("", "", newValues, "")
            .then(res => {
                handleBtnState("Sent");
                handleBtnDisabled(true);
            }) 
        } catch (error) {
            handleMessage(error.message);
        }
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const contactFormSchema = Yup.object().shape({
        name: Yup.string().max(40, "* Name is too long").required('* Required'),
        email: Yup.string().email("* Invalid email").required("* Required"),
        phone: Yup.string().matches(phoneRegExp, `* This doesn't look like a phone number`).max(20, '* Phone number is too long').required("* Required"),
        message: Yup.string().min(4, "* Message is too short").max(800, "* 800 maximum characters")
    });

    return (
        <>
            <footer id='footer'>
                <div className='page-width content-wrap flex row'>
                    <div className='column left'>
                        <div className='footer-menu'>
                            <h3>Menu</h3>
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
                        </div>
                        
                        <div className='footer-address'>
                            <h3>QubePak LLC</h3>
                            <p>Placerville, CA</p>
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
                                <div className='field-wrap'>
                                    <label htmlFor='name' id='name'>Name</label>
                                    <Field name='name' />
                                </div>

                                <div className='field-wrap'>
                                    <label htmlFor='email' id='email'>Email</label>
                                    <Field name='email' />
                                </div>

                                <div className='field-wrap'>
                                    <label htmlFor='phone' id='phone'>Phone</label>
                                    <Field name='phone' />
                                </div>

                                <div className='field-wrap'>
                                    <label htmlFor='message' id='message'>Message</label>
                                    <Field name='message' />
                                </div>

                                <div className='btn-wrap'>
                                    <button className="btn" type="submit" disabled={btnDisabled}>
                                        {btnState}
                                    </button>
                                </div>
                            </Form>
                        </Formik>

                        <div className='copyright-wrap'>
                            <small>Copyright © 2021. All rights reserved. QubePak LLC | Website created by <span><a href='https://lfxmedia.io' target="_blank">LFX Media</a></span></small>
                        </div>
                    </div>

                    
                </div>
            </footer>
        </>
    );
}