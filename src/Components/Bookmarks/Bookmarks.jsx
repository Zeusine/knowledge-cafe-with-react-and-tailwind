import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    let totalTime = 0;
    bookmarks.forEach(bookmark => {
        totalTime += parseInt(bookmark.reading_time);
    });

    return (
        <div className='w-1/3'>
            <h2 className='border-1 border-[#6047EC] p-6 text-center text-2xl text-[#6047EC] bg-[#e8e4ff]'> Spent time on <br /> read: <span> {totalTime} min</span>
            </h2>
            <div className='bg-[#f4f3f3]  mt-4  p-4'>
                <h3 className='font-bold text-xl mb-5'>Bookmarked Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark}> </Bookmark>)
                }


            </div>
        </div>
    );
};

export default Bookmarks;