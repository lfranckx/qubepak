import React, { useState } from 'react';
import globe from '../images/globe.png';

export default function Mission() {
    const [active, setActive] = useState(false);

    return (
        <>
            <section id='mission'>
                <div className='content-wrap page-width' >
                    <div className='img-wrap'>
                        <img class='img' src={globe} alt='The Mission and Vision' />
                    </div>
                    
                    <div className='text-wrap'>
                        <div className='title-wrap'>
                            <h2>QubePak Thinks Outside the Box</h2>
                        </div>
                        <div class='body-wrap'>
                            <p className={active ? 'hidden' : ''}>QubePak's mission is to revolutionize the packaging industry by providing a premier unboxing experience emphasizing ecological responsibility; offering innovative and eco-friendly packaging solutions that minimize waste and enhance customer satisfaction. The company aims to establish itself as the go-to brand for eco-conscious consumers and businesses, replacing unnecessary packaging materials and excessive corrugated boxes with inventive designs. QubePak aims to continuously innovate and collaborate with stakeholders to create sustainable packaging solutions that meet current challenges and anticipate future needs.</p>
                            <p className={active ? '' : 'hidden'}>Integrity and responsibility are the foundation of QubePak's approach to ecological sustainability, guiding the company's commitment to developing environmentally-conscious packaging solutions that meet the highest quality and performance standards. QubePak firmly believes that businesses have a crucial role in protecting the planet and fostering a sustainable future. By championing green packaging practices and solutions, QubePak seeks to inspire positive change in the industry and contribute to a healthier, more sustainable world.</p>

                            <button className='btn' onClick={() => setActive(!active)}>{active ? "Back →" : "Read More →"}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}