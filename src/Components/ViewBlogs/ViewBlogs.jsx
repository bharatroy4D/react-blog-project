import React, { useEffect, useState } from 'react';
import ViewBlog from '../ViewBlog/ViewBlog';

const ViewBlogs = ({category}) => {
    const [viewBlogs, setViewBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setViewBlogs(data))
    },[]);
    const categoryFilter = category.category? viewBlogs.filter(viewBlog => viewBlog.category === category.category):viewBlogs
    return (
        <div className='w-1/2 bg-base-300 rounded p-4'>
            <div>
                {
                    categoryFilter.map(viewBlog=><ViewBlog key={viewBlog.id} viewBlog={viewBlog}></ViewBlog>)
                }
            </div>
        </div>
    );
};

export default ViewBlogs;