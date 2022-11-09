import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceTab = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div>
            <div className="card card-side h-80 bg-base-100 shadow-xl">
                <figure><PhotoProvider><PhotoView src={img}><img src={img} alt="service" /></PhotoView></PhotoProvider></figure>
                {/* <figure><img src={img} alt="service" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/checkout`}>
                            <button className="btn btn-primary">Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceTab;