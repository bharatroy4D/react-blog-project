import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = ({ handleCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className=' rounded w-1/4 px-10 bg-base-300'>
            <h1 className='text-xl font-medium py-3'>Categories:</h1>
            <div>
                {
                    categories.map(category => <Category
                        key={Category.id}
                        category={category}
                        handleCategory={handleCategory}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;