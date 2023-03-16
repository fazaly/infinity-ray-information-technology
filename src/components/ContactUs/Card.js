import React from 'react';
import Form from './Form';
import Info from './Info';

const Card = () => {
    return (
        <div className='grid md:grid-cols-3 gap-6 bg-base-500 rounded-2xl shadow-2xl py-10 px-4'>
            <div className='col-span-2 py-10'>
                <Form></Form>
            </div>
            <div>
                <Info></Info>
            </div>
        </div>
    );
};

export default Card;