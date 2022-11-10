import React from 'react';
import useTitle from '../Components/useTitle';

const FAQ = () => {
    useTitle('FAQ')
    return (
        <div className='mx-72'>
            <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Why Choose US?
                </div>
                <div className="collapse-content">
                    <p>We’re proud to supply skilled housecleaning services and use residential housekeepers WHO pride themselves on top-grade services. once undergoing an intensive background check, every member of our team is totally trained on each step of our elaborate cleanup plans. we tend to additionally back all of our work with a 24-hour warrantee. These are simply many of the various reasons why customers trust topminnow Maid.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What Time Does Your Team Arrive?
                </div>
                <div className="collapse-content">
                    <p>While we tend to cannot pledge our precise time of arrival as a result of we tend to offer each home the eye it deserves and needs, we tend to do provide arrival windows for your convenience.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Do Your House Cleaners accept tips?
                </div>
                <div className="collapse-content">
                    <p>While tips aren’t expected, we’re allowed to just accept them. a number of our Clients opt to tip a bit at the tip of every service whereas others offer an oversized tip at the tip of the year. you’ll conjointly leave a review on our web site or Facebook page. we have a tendency to love hearing that our work is appreciated.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    What do you mean by window of arrival?
                </div>
                <div className="collapse-content">
                    <p>When you schedule housecleaning services with us, we’ll provide you with Associate arrival timeframe of 3 to four hours. as a result of we tend to provide homes the personalized attention they be, we’re powerless to produce a certain time of arrival, however we tend to do our greatest to confirm that our cleanup arrange doesn’t interfere together with your schedule.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;