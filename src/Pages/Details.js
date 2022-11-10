import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../Components/useTitle';

const Details = () => {
    const service = useLoaderData();
    const { _id, img, title, price, details } = service;
    useTitle('Details');
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider><PhotoView src={img}><img src={img} alt="service" /></PhotoView></PhotoProvider>
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <br />
                        <p>Price: {price} Taka</p>
                        <p className="py-6">{details}</p>
                        <Link to={`/addreview/${_id}`}><button className="btn btn-primary">Add review</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;