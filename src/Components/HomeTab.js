import React from 'react';
import { Link } from 'react-router-dom';

const HomeTab = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/FBqCN2W/office-cleaning-service.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WELCOME TO BEST HOME CLEANING SERVICE!</h1>
                        <p className="mb-5">BOOK PROFESSIONAL CLEANING SERVICES ON-DEMAND!</p>
                        <Link to={'/services'}><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTab;