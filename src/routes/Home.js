import '../styles/Home.scss';
import React from 'react';
import Header from '../components/Header';
import Mission from '../components/Mission';
import Details from '../components/Details';

export default function Home() {
    return (
        <>
            <Header />            

            <div className='main-wrap'>
                <main id='main'>
                    <Mission />
                    <Details />
                </main>
            </div>
        </>
        
    );
}