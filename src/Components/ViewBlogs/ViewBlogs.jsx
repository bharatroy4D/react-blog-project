import React, { useEffect, useState } from 'react';
import ViewBlog from '../ViewBlog/ViewBlog';

const ViewBlogs = () => {
    const [viewBlogs, setViewBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setViewBlogs(data))
    },[])
    return (
        <div className='w-1/2 bg-base-300 rounded p-4'>
            <div>
                {
                    viewBlogs.map(viewBlog=><ViewBlog key={viewBlog.id} viewBlog={viewBlog}></ViewBlog>)
                }
            </div>
        </div>
    );
};

export default ViewBlogs;