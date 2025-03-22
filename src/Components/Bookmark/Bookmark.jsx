import React from 'react';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white p-5 mb-4 rounded-lg'>
            <h1>{title}</h1>

            
        </div>
    );
};

export default Bookmark;