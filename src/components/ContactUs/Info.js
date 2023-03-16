import React from 'react';

const Info = () => {
    return (
        <div className="card bg-blue-500
 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Contact Information</h2>
                <p>Our Contact information. You can caontact us anytime.</p>
                <div className="grid grid-cols-1 gap-10 mt-4">
                    <span> 01......</span>
                    <span> demo@gmail.com</span>
                    <span>Mirpur, Dhaka.</span>
                </div>
            </div>
        </div>
    );
};

export default Info;