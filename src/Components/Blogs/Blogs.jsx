import React from 'react';
import whait from '../../assets/whait profile.jpg'

const Blogs = () => {
    
    return (
        <div className='rounded w-1/4 bg-base-300'>
            <div className=' p-5 '>
                <img className='w-36 h-36 rounded-full mx-auto' src={whait} alt="" />
                <h1 className='text-xl font-medium text-center pt-1'>@Rivax Studio</h1>
                <p className='text-center'>We become what We think about!</p>
                <div className='flex justify-center pt-2'>
                    <button className='border rounded-3xl py-1 px-3 font-semibold'>Follow me</button>
                </div>
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default Blogs;