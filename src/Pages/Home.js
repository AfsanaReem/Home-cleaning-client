import React from 'react';
import { Link } from 'react-router-dom';
import HomeTab from '../Components/HomeTab';
import Services from '../Components/Services';
import useTitle from '../Components/useTitle';
import FAQ from './FAQ';

const Home = () => {
    useTitle('Home')
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
            <FAQ></FAQ>

        </div>
    );
};

export default Home;