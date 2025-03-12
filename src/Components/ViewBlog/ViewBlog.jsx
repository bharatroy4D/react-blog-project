import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { GrFormView } from "react-icons/gr";



const ViewBlog = ({ viewBlog }) => {
    const { title, author, comment, minutes, view, cover_img, description } = viewBlog;
    return (
        <div className='mb-8'>
            <div className='flex gap-8'>
                <img className='w-64 rounded  mb-5' src={cover_img} alt="" />
                <div>
                    <h1 className='font-semibold  '>{title}</h1>
                    <div className='flex gap-5 items-center  text-red-400'>
                        <p>{author}</p>
                        <p>{comment}</p>
                    </div>
                    <p className='pt-5'>{description}</p>
                    <div className='flex justify-start mt-3 gap-6 text-red-400'>
                        <p className='flex items-center gap-1'><IoTimeOutline></IoTimeOutline> {minutes}</p>
                        <p className='flex items-center gap-1 '> <GrFormView className='text-xl'></GrFormView> {view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBlog;