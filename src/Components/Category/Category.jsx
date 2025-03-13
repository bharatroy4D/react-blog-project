import React from 'react';

const Category = ({category, handleCategory}) => {
    return (
        <div>
            <h2 onClick={()=>handleCategory(category)} className=' rounded py-1 px-2 mb-3 bg-white shadow-2xl font-medium hover:bg-green-300 hover:text-white'>  
              {category.category}
            </h2>
        </div>
    );
};

export default Category;