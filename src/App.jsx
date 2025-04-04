
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);


  const handleAddToBookmark = title => {
    const newTitleList = [...bookmarks, title];
    setBookmarks(newTitleList)
    
    
  }
  console.log(bookmarks)


  return (
    <>

      <Header></Header>
      <div className='md:flex gap-3'>
        <Blogs handleAddToBookmark = {handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </>
  )
}

export default App
