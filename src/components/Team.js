import React, { useState } from 'react';
import rob from '../images/rob-new.png';
import ed from '../images/ed-new.png';

export default function Team() {
    const [active, setActive] = useState(false);

    return (
        <>
            <section id='team'>
                <div className='content-wrap'>
                    <h2>Meet the Team</h2>

                    <div className='flex row one'>
                        <div className='text-wrap'>
                            <h3>Robert Michaels</h3>
                            <p>Robert Michaels leads strategy at QubePak. For 20+ years, Robert was a senior executive in Fintech, and was an integral part of the team that took a company from start-up to NYSE listed company to an S&P 500 company.</p>
                            <p>Currently as the Chief Strategy Officer of QubePak, Robert is responsible for strategy, finance and business development.</p>
                        </div>
                        <img src={rob} alt='Robert Michaels' />
                    </div>
                    
                    <div className='flex row two'>
                        <img src={ed} alt='Ed Buelna' />
                        <div className='text-wrap'>
                            <h3>Ed Buelna</h3>
                            <p className={active ? 'hidden' : ''}>Ed Buelna leads innovation at QubePak. Over the past 20 years, Ed has been involved in protective packaging development. Buelna has demonstrated a strong ability to commercialize new packaging solutions as an entrepreneurial innovator. During the course of his career, Buelna has been involved in packaging solution development for consumer, medical, and industrial packaging. He is focused on leading design thinking, innovation and product development.</p>
                            {/* <p className={active ? '' : 'hidden'}>Currently, Buelna is a principal and CIO for QubePak with a focus on leading design thinking, innovation and product development. Additionally, Buelna is credited with unique patents aimed at enhancing the customer experience while aligned with ecological balance in mind. Prior to QubePak, Buelna worked in the healthcare industry in various clinical administrative roles as well as in the packaging industry. Buelna has consulted for various startups as well.  He has a B.A. from U.C. Santa Cruz and a Graduate certificate from Stanford University.</p>
                            <button className='action-btn' onClick={() => setActive(!active)}>{active ? "Back →" : "Read More →"}</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}