import React, { useEffect, useState } from 'react';
import ReviewTab from '../Components/ReviewTab';
import useTitle from '../Components/useTitle';

const Review = () => {
    useTitle('Review')
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://home-cleaning-service-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            <h4 className='text-3xl text-center'>All Reviews:</h4>
            <div className=' text-center grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    reviews.map(rev => <ReviewTab key={rev._id}
                        rev={rev}
                    >

                    </ReviewTab>)
                }
            </div>

        </div>
    );
};

export default Review;