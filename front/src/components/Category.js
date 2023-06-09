import React from 'react'
import {Link} from "react-router-dom"

const Category = () => {
  return (
    <section className='category pt-5 py-5'>
      <div className='container'>
        <h2 className='text-center pb-2'>Categories</h2>
        <div className='control '>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
        </div>
        <div className='container'>
          <div className='col-md-4'>
            <div className='single-blog'>
            <p className='blog-meta'>Author <span>Date</span></p>
            <img

                src="https://images.pexels.com/photos/2114365/pexels-photo-2114365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt='blogImage'
            />
            <h2>Blog Title</h2>
            <p className='blog-title'>Blog Details Here</p>
            <p><Link to="/">See More</Link></p>
            <span><i class="fa fa-thumbs-up"></i> Likes</span>
            </div>
          </div>

        </div>



      </div>

    </section>
  )
}

export default Category



// <section id = "blogs" class = "py-5">
//         <div class = "container">

//             <div class = "row g-3">
//                 <div class = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
//                     <img src = "https://images.pexels.com/photos/858466/pexels-photo-858466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "" />
//                     <div class = "card-body px-0">
//                         <h4 class = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
//                         <p class = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
//                         <p class = "card-text">
//                             <small class = "text-muted">
//                                 <span class = "fw-bold">Author: </span>John Doe
//                             </small>
//                         </p>
//                         <a href = "#" class = "btn">Read More</a>
//                     </div>
//                 </div>

//                 <div class = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
//                     <img src = "https://images.pexels.com/photos/858466/pexels-photo-858466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "" />
//                     <div class = "card-body px-0">
//                         <h4 class = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
//                         <p class = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
//                         <p class = "card-text">
//                             <small class = "text-muted">
//                                 <span class = "fw-bold">Author: </span>John Doe
//                             </small>
//                         </p>
//                         <a href = "#" class = "btn">Read More</a>
//                     </div>
//                 </div>

//                 <div class = "card border-0 col-md-6 col-lg-4 bg-transparent my-3">
//                     <img src = "https://images.pexels.com/photos/858466/pexels-photo-858466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt = "" />
//                     <div class = "card-body px-0">
//                         <h4 class = "card-title">Lorem ipsum, dolor sit amet consectetur adipisicing</h4>
//                         <p class = "card-text mt-3 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur repudiandae nostrum dolorem molestias odio. Sit fugit adipisci omnis quia itaque ratione iusto sapiente reiciendis, numquam officiis aliquid ipsam fuga.</p>
//                         <p class = "card-text">
//                             <small class = "text-muted">
//                                 <span class = "fw-bold">Author: </span>John Doe
//                             </small>
//                         </p>
//                         <a href = "#" class = "btn">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>