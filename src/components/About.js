import React from 'react';
import yellowBox from '../images/1-yellow-box.png';
import greenBox from '../images/2-green-box.png';
import orangeBox from '../images/3-orange-box.png';
import box1 from '../images/box-1.png';
import box2 from '../images/box-2.png';
import box3 from '../images/box-3.png';

export default function Details() {
    return (
        <>
            <section id='about'>
                <div className='title-wrap'>
                    <h2 className='text-center section-title'><span>Stack, Set-up, Secure, Ship</span></h2>
                    <p className='mg-20 mw-700 text-center'>We offer an environmentally friendly solution that creates a simple and positive unboxing experience while also being recyclable, repulpable, and reusable.</p>
                    <div className='grid row'>
                        <img src={box1} alt='Stack, Set-up, Secure, Ship' />
                        <img src={box2} alt='Stack, Set-up, Secure, Ship' />
                        <img src={box3} alt='Stack, Set-up, Secure, Ship' />
                    </div>
                </div>
                
                <div className='flex row one'>
                    <img className='img' src={yellowBox} alt='Advantage' />
                    <div className='text-wrap'>
                        <h3>Advantage</h3>
                        <p>At the core of QubePak's innovative packaging solutions is the consolidation of traditional external boxes and our unique approach to suspension and retention, which eliminates the need for loose-fill, air pillows, or dunnage. The strength of the concept is a consequence of its design, taking the guesswork out of packaging and offering a singular product that effectively replaces two components while enhancing margins at the manufacturing and distribution levels. Additionally, our unitized construct interlocks at the top, requiring only one strip of tape to secure it, further simplifying the packaging process.</p>
                    </div>
                </div>
                <div className='flex row two'>
                    <div className='text-wrap'>
                        <h3>Specifications</h3>
                        <p>The patented QubePak concept features a cruciform pattern of linked truncated pyramids that, when folded, form a cube (hypercube or tesseract) capable of suspending and retaining a shipped product. The design utilizes a paper pulp substrate, and its rigidity allows for a cube without external walls. The edges of each connecting facet provide reinforced strength to protect the shipped product, ensuring a secure and efficient packaging solution.</p>
                    </div>
                    <img className='img' src={greenBox} alt='Specifications' />
                </div>
                <div className='flex row three'>
                    <img className='img' src={orangeBox} alt='Solution' />
                    <div className='text-wrap'>
                        <h3>Solution</h3>
                        <p>QubePak aims to reduce the use of packaging materials such as loose-fill, air pillows, paper dunnage, and corrugated. Developed with the consumer unboxing experience in mind, the concept addresses the issue of wasteful packaging commonly found in oversized corrugated boxes filled with excessive loose-fill, air pillows, or dunnage. QubePak offers an environmentally friendly solution that creates a positive unboxing experience while being recyclable, repulpable, and reusable, making it the ideal choice for eco-conscious businesses and consumers.</p>
                    </div>
                </div>
            </section>
        </>
    );
}