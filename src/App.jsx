
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Categories from './Components/Categories/Categories'
import Navbar from './Components/Navbar/Navbar'
import Toper from './Components/Toper/Toper'
import ViewBlogs from './Components/ViewBlogs/ViewBlogs'

function App() {

  return (
    <>
      <Toper></Toper>
      <Navbar></Navbar>
      <div className='flex gap-5'>
      <Categories></Categories>
      <ViewBlogs></ViewBlogs>
      <Blogs></Blogs>
      </div>
   
    </>
  )
}

export default App
