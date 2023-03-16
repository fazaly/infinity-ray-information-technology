import React from 'react';

const Form = () => {
    return (
        <form className='grid grid-cols-1 gap-4 ' >
            <div className='flex gap-4'>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs border-b-2 " />

                <input type="text" placeholder="Type here" className="input w-full max-w-xs border-b" />
            </div>
            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />

            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
            <div className='flex justify-end'>
                <button className='btn border-0 bg-blue-500 btn-sm px-6  rounded-2xl' type='submit'>Submit</button>
            </div>


        </form>
    );
};

export default Form;