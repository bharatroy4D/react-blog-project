import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <h2 className=' rounded py-1 px-2 mb-2 bg-white shadow-2xl font-medium'>  
              {category.category}
            </h2>
        </div>
    );
};

export default Category;