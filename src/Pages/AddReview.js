import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price } = useLoaderData();
    const date = new Date();

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = user?.photoURL || 'No Image Available';
        const review = form.review.value;
        const email = user?.email || 'unregistered';

        const newReview = {
            service_id: _id,
            title, price, img, review, email, date
        }

        fetch('https://home-cleaning-service-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('home-token')}`
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review added successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
            <form onSubmit={handleAddReview}>
                <div className='mx-60 my-24'>
                    <h1 className='text-center text-4xl mb-4'>Add Your Review</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-1 gap-4'>
                        <input name="title" type="text" defaultValue={title} className="input input-ghost w-full  input-bordered" />
                        <input name="price" type="text" defaultValue={price} className="input input-ghost w-full  input-bordered" />
                        <input name="img" type="text" placeholder='User image' defaultValue={user?.photoURL} className="input input-ghost w-full  input-bordered" readOnly />
                        <input name="email" type="text" placeholder="User email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                        <input name="review" type="text" placeholder="Your Review" className="input input-ghost w-full h-20 input-bordered" required />
                    </div>
                    <br />
                    <input className='btn btn-primary' type="submit" value="Add Review" />
                </div>
            </form>
        </div>
    );
};

export default AddReview;