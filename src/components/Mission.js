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
                            <div className={active ? 'hidden' : ''}>
                                <p>
                                    QubePak's mission is to create an exceptional unboxing experience. 
                                </p>
                                <p>
                                    QubePak is working towards replacing unnecessary packaging materials and excessive corrugated boxes by continuously innovating to create sustainable packaging solutions that outperform the current state. 
                                </p>
                                <p>
                                    By championing green packaging practices and solutions, QubePak seeks to inspire positive change in the industry and contribute to a healthier, more sustainable world.
                                </p>
                            </div>
                            
                            {/* <p className={active ? '' : 'hidden'}></p> */}

                            {/* <button className='btn' onClick={() => setActive(!active)}>{active ? "Back →" : "Read More →"}</button> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}