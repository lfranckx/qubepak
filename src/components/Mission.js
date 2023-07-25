import React from 'react';
import globe from '../images/globe.png';

export default function Mission () {
    return (
        <>
            <section id='mission'>
                <div className='content-wrap page-width' >
                    {/* <div className='img-wrap'>
                        <img class='img' src={globe} alt='The Mission and Vision' />
                    </div> */}
                        <img class='img' src={globe} alt='The Mission and Vision' />
                    <div className='text-wrap'>
                        <div className='title-wrap'>
                            <h2>The Mission and Vision</h2>
                        </div>
                        <div class='body-wrap'>
                            <p>QubePak's mission is to revolutionize the packaging industry by providing a premier unboxing experience emphasizing ecological responsibility; offering innovative and eco-friendly packaging solutions that minimize waste and enhance customer satisfaction. The company aims to establish itself as the go-to brand for eco-conscious consumers and businesses, replacing unnecessary packaging materials and excessive corrugated boxes with inventive designs. QubePak aims to continuously innovate and collaborate with stakeholders to create sustainable packaging solutions that meet current challenges and anticipate future needs.</p>
                            <p>Integrity and responsibility are the foundation of QubePak's approach to ecological sustainability, guiding the company's commitment to developing environmentally-conscious packaging solutions that meet the highest quality and performance standards. QubePak firmly believes that businesses have a crucial role in protecting the planet and fostering a sustainable future. By championing green packaging practices and solutions, QubePak seeks to inspire positive change in the industry and contribute to a healthier, more sustainable world.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}