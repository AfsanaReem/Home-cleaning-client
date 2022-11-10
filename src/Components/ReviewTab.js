import React from 'react';

const ReviewTab = ({ rev }) => {
    const { img, review, title, email, price } = rev;
    return (
        <div>
            <div className="card w-96 h-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt={email} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p>User Email: {email}</p>
                    <h2 className="card-title">Service: {title}</h2>
                    <p>{price} Taka</p>
                    <p>Review: {review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewTab;