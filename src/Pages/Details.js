import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceReview from '../Components/ServiceReview';
import useTitle from '../Components/useTitle';

const Details = () => {

    const service = useLoaderData();
    const { _id, img, title, price, details } = service;
    useTitle('Details');
    const [serviceReviews, setServiceReviews] = useState([]);
    useEffect(() => {
        fetch(`https://home-cleaning-service-server.vercel.app/servicereviews?service_id=${_id}`)
            .then(res => res.json())
            .then(data => {
                setServiceReviews(data)
                console.log(data)
            })
    }, [_id]);
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
            <div></div>
            <div>
                <h2 className=' text-center text-4xl'>This service have {serviceReviews.length} reviews</h2>
                <div className=' text-center grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                    {
                        serviceReviews.map(serRev => <ServiceReview
                            key={serRev._id}
                            serRev={serRev}>
                        </ServiceReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Details;