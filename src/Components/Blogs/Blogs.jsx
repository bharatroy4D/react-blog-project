import React from 'react';
import whait from '../../assets/whait profile.jpg'

const Blogs = () => {
    return (
        <div className='rounded w-1/4 bg-base-300'>
            <div className='flex justify-center items-center p-5 '>
                <img className='w-32 h-32 rounded-full' src={whait} alt="" />
                

            </div>
        </div>
    );
};

export default Blogs;