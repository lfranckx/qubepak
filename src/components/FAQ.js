import React from 'react';

export default function Faq() {
    return (
        <>
            <section id='faq' className='page-width'>
                <div className='content-wrap'>
                    <h2>FAQ</h2>

                    <div className='accordion'>
                        <div className='question'>Can QubePak be recycled globally?</div>
                        <div className='answer'>Absolutely! QubePak is designed with sustainability in mind. It is crafted from materials that are recyclable in accordance with global standards. Wherever you are in the world, you can rest assured knowing that your QubePak packaging can be responsibly recycled, contributing to a greener planet.</div>
                    </div>

                    <div className='accordion'>
                        <div className='question'>Can QubePak be reused?</div>
                        <div className='answer'>Yes, indeed! QubePak's robust and innovative design not only ensures the safe delivery of your items but also allows for reuse. Its sturdy construction means that it can be repurposed for multiple uses, helping to extend its lifecycle and reduce the demand for new packaging materials.</div>
                    </div>

                    <div className='accordion'>
                        <div className='question'>How does QubePak protect my shipped items?</div>
                        <div className='answer'>QubePak protects your shipped items through its unique suspension and retention system. The system involves placing the item in the center of the hypercube or tesseract design, ensuring it is securely held and suspended, reducing the risk of damage during transit.</div>
                    </div>

                    <div className='accordion'>
                        <div className='question'>Does QubePak reduce the carbon footprint?</div>
                        <div className='answer'>Indeed, it does! QubePak's environmentally-friendly design significantly contributes to reducing the carbon footprint. By eliminating the need for additional packaging materials like loose-fill, air pillows, and dunnage, QubePak helps cut down waste production. Furthermore, its recyclable, repulpable, and reusable features mean fewer resources are used in its production and disposal, leading to a reduction in greenhouse gas emissions. QubePak embodies a commitment to sustainability and a smaller carbon footprint, supporting the journey towards a greener, more sustainable future.</div>
                    </div>
                </div>
            </section>
        </>
    )
}