import React from 'react';
import boxOne from '../images/box-yellow.png';
import boxTwo from '../images/box-green.png';
import boxThree from '../images/box-orange.png';

export default function Details() {
    return (
        <>
            <section id='details'>
                <div className='flex row one'>
                    <img className='img' src={boxOne} alt='Advantage' />
                    <div className='text-wrap'>
                        <h2>Advantage</h2>
                        <p>At the core of QubePak's innovative packaging solutions is the consolidation of traditional external boxes and our unique approach to suspension and retention, which eliminates the need for loose-fill, air pillows, or dunnage. The strength of the concept is a consequence of its design, taking the guesswork out of packaging and offering a singular product that effectively replaces two components while enhancing margins at the manufacturing and distribution levels. Additionally, our unitized construct interlocks at the top, requiring only one strip of tape to secure it, further simplifying the packaging process.</p>
                    </div>
                </div>
                <div className='flex row two'>
                    <div className='text-wrap'>
                        <h2>Specifications</h2>
                        <p>The patented QubePak concept features a cruciform pattern of linked truncated pyramids that, when folded, form a cube (hypercube or tesseract) capable of suspending and retaining a shipped product. The design utilizes a paper pulp substrate, and its rigidity allows for a cube without external walls. The edges of each connecting facet provide reinforced strength to protect the shipped product, ensuring a secure and efficient packaging solution.</p>
                    </div>
                    <img className='img' src={boxTwo} alt='Specifications' />
                </div>
                <div className='flex row three'>
                    <img className='img' src={boxThree} alt='Solution' />
                    <div className='text-wrap'>
                        <h2>Solution</h2>
                        <p>QubePak aims to reduce the use of packaging materials such as loose-fill, air pillows, paper dunnage, and corrugated. Developed with the consumer unboxing experience in mind, the concept addresses the issue of wasteful packaging commonly found in oversized corrugated boxes filled with excessive loose-fill, air pillows, or dunnage. QubePak offers an environmentally friendly solution that creates a positive unboxing experience while being recyclable, repulpable, and reusable, making it the ideal choice for eco-conscious businesses and consumers.</p>
                    </div>
                </div>
            </section>
        </>
    );
}