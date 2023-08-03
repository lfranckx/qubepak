import '../styles/Home.scss';
import React from 'react';
import Mission from '../components/Mission';
import Details from '../components/Solutions';
import Team from '../components/Team';
import Faq from '../components/FAQ';

export default function Home() {
    return (
        <>
            <div className='main-wrap'>
                <main id='main'>
                    <Mission />
                    <Details />
                    <Team />
                    <Faq />
                </main>
            </div>
        </>
        
    );
}