import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const date = new Date();
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const details = form.details.value;
        const email = user?.email || 'unregistered';

        const newService = {
            title, price, img, details, email, date
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('home-token')}`
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <div className='mx-60 my-24'>
                    <h1 className='text-center text-4xl mb-4'>Add Your Service</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                        <input name="title" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" />
                        <input name="price" type="text" placeholder="Price" className="input input-ghost w-full  input-bordered" />
                        <input name="img" type="text" placeholder="Service Image Link" className="input input-ghost w-full  input-bordered" required />
                        <input name="details" type="text" placeholder="Service Details" className="input input-ghost w-full  input-bordered" required />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <br />
                    <input className='btn btn-primary' type="submit" value="Add Service" />
                </div>
            </form>
        </div>
    );
};

export default AddService;