import React, { useEffect, useState } from 'react';
import ServiceTab from './ServiceTab';
import useTitle from './useTitle';

const Services = () => {
    useTitle('Services')
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://home-cleaning-service-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center mb-4'>
                <h2 className="text-5xl font-semibold">Our Services</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    services.map(service => <ServiceTab
                        key={service._id}
                        service={service}
                    ></ServiceTab>)
                }
            </div>

        </div>
    );
};

export default Services;