import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewTab = ({ myRev, handleDelete }) => {
    const { img, review, title, email, price, _id, date } = myRev;
    return (
        <div>
            <div className="card w-96 h-90 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt={email} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <p>User Email: {email}</p>
                    <h2 className="card-title">Service: {title}</h2>
                    <p>{price} Taka</p>
                    <p>Review: {review}</p>
                    <p>Time: {date}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                        <Link to={`/updatereview/${_id}`}><button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyReviewTab;