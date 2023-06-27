import React from 'react'
import { Link } from 'react-router-dom'

const BlogCart = () => {
  return (
   
<div className='blog-card'>
<div className='card-image'>
<img src='images/blog-1.jpg'className='img-fluid w-100' alt=''/>
<div className='blog-content'>
  <p className='date'>1 April,2023</p>
<h5 className='title'>A beautiful sunday morning renaissance</h5>
<p className='desc'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum.</p>
<Link to="/" className='button'> Read More</Link>
</div>
</div>
</div>
    
  )
}

export default BlogCart