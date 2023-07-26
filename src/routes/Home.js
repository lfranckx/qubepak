import '../styles/Home.scss';
import React from 'react';
import Header from '../components/Header';
import Mission from '../components/Mission';
import Details from '../components/Details';
import Team from '../components/Team';
import Faq from '../components/FAQ';

export default function Home() {
    return (
        <>
            <Header />            

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