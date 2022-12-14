import React, { useContext, useEffect, useState } from 'react';
import MyReviewTab from '../Components/MyReviewTab';
import useTitle from '../Components/useTitle';
import { AuthContext } from '../contexts/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    useTitle('My Review')
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        fetch(`https://home-cleaning-service-server.vercel.app/reviews?&email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data)
                console.log(data)
            })
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://home-cleaning-service-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('home-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(rev => rev._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }
    return (
        <div>
            {
                myReviews.length === 0 ?
                    <h2 className=' text-center text-4xl mt-60 mb-96'>No reviews were added</h2>
                    :
                    <h2 className=' text-center text-4xl'>You have {myReviews.length} reviews</h2>
            }

            <div className=' text-center grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {
                    myReviews.map(myRev => <MyReviewTab key={myRev._id}
                        myRev={myRev} handleDelete={handleDelete}
                    >

                    </MyReviewTab>)
                }
            </div>
        </div>
    );
};

export default MyReview;