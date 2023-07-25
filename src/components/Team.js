import React from 'react';

export default function Team() {
    return (
        <>
            <section id='team'>
                <h2>Meet the Team</h2>
                <div className='content-wrap'>
                    <div className='row'>
                        <div className='text-wrap'>
                            <h3>Robert Michaels</h3>
                            <p>Robert Michaels leads strategy at QubePak. For 20+ years, Robert was a senior executive in Fintech, and was an integral part of the team that took a company from start-up to NYSE listed company to an S&P 500 company.</p>
                            <p>Currently as the Chief Strategy Officer of QubePak, Robert is responsible for strategy, finance and business development.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='text-wrap'>
                            <h3>Ed Buelna</h3>
                            <p>Ed Buelna leads innovation at QubePak. Over the past 20 years, Ed has been involved in protective packaging development. Buelna has demonstrated a strong ability to commercialize new packaging solutions as an entrepreneurial innovator. During the course of his career, Buelna has been involved in packaging solution development for consumer, medical, and industrial packaging. He has held positions in sales and operations with the goal of solving packaging challenges for leading organizations. </p>
                            <button className='action-btn'>Read More →</button>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}