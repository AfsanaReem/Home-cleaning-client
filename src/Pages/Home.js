import React from 'react';
import { Link } from 'react-router-dom';
import HomeTab from '../Components/HomeTab';
import Services from '../Components/Services';

const Home = () => {
    return (
        <div>
            <HomeTab></HomeTab>
            <br />
            <Services></Services>
            <br />
            <div className='grid justify-items-center'>
                <Link to={`/services`}>
                    <button className="btn btn-primary">All Services</button>
                </Link>
            </div>
            <br />

        </div>
    );
};

export default Home;