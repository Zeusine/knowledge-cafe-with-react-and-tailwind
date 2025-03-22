import React from 'react';

import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, blogsLength, handleAddToBookmark}) => {
    const {title, cover, author_img, posted_date, reading_time, hashtags, author,id} = blog;
    
    return (
        <div className= {id == blogsLength? "mb-5" : "border-b-1 border-gray-300 mb-5" }>
            <img className='rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center mt-4'>
                <div className='flex gap-3 '>
                    <div className=' '>
                        <img className='rounded-full h-12' src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='font-black'>{author}</h4>
                        <p className='text-gray-500'>{posted_date}</p>

                    </div>


                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-gray-400'>{reading_time} min read </span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                    

                </div>
            </div>
            <h2 className='text-4xl font-bold my-4'>{title} </h2>
            {
                hashtags.map((hashtag,idx) => 
                    <span key={idx} className='mr-3 '>{hashtag}</span>
                )
            }
            <br />
            <button className='my-4 text-[#6047EC] border-b-1'>Mark as read</button>

            
        </div>
    );
};



export default Blog;