
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Toper from './Components/Toper/Toper'
import ViewBlogs from './Components/ViewBlogs/ViewBlogs'

function App() {
  const [category, setCategory] = useState([]);

  const handleCategory = event =>{
    console.log(event)
    setCategory(event);
  };

  return (
    <>
      <Toper></Toper>
      <Navbar></Navbar>
      <div className='flex gap-8'>
      <Categories handleCategory={handleCategory}></Categories>
      <ViewBlogs category={category}></ViewBlogs>
      <Blogs></Blogs>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
