import React from 'react'
import { Link } from 'react-router-dom'
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs"
const Footer = () => {
  return (
   <>
   <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row align-items-center'>
     <div className='col-5'>
      <div className='footer-top-data d-flex gap-30 align-items-center'>
        <img src='images/newsletter.png' alt='newsletter'/>
        <h2 className='mb-0 text-white'>Sign Up Newsletter</h2>
      </div>
     </div>
     <div className='col-7'>
     <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
     </div>
      </div>
    </div>
   </footer>
   <footer className='py-4'>
<div className='container-xxl'>
<div className='row'>
<div className='col-4'>
  <h4 className='text-white mb-4'>Contact Us</h4>
  <div>
    <address className='text-white fs-6 '>
      Hno : 100 Near Kali Temple,<br/>
      Berhampur,Odisha <br/>
      Pincode:760002
    </address>
    <a href='tel:+91 8908130394' className='mt-3 d-block mb-1 text-white'>
      +91 8908130394
      </a>
      <a href='mailto:kavinash010400@gmail.com' className='mt-2 d-block mb-0 text-white'>
      kavinash010400@gmail.com
      </a>
      <div className='social_icons d-flex align-items-center gap-30 mt-4'>
        <a className='text-white' to=''>
          <BsLinkedin className='fs-4'/>
        </a>
        <a className='text-white' to=''>
        <BsGithub className='fs-4'/>
        </a>
        <a className='text-white' to=''>
        <BsYoutube className='fs-4'/>
        </a>
        <a className='text-white' to=''>
        <BsInstagram className='fs-4'/>
        </a>
      </div>
  </div>
</div>
<div className='col-3'>
  <h4 className='text-white mb-4'>Information</h4>
  <div className='footer-links  mb-4 d-flex flex-column '>
    <Link className='text-white mb-1 py-2'>Privacy Policy</Link>
    <Link className='text-white mb-1 py-2'>Refund Policy</Link>
    <Link className='text-white mb-1 py-2'>Shipping Policy</Link>
    <Link className='text-white mb-1 py-2'>Terms & Condition</Link>
    <Link className='text-white mb-1 py-2'>Blogs</Link>
  </div>
</div>
<div className='col-3'>
  <h4 className='text-white mb-4'>Account</h4>
  <div className='footer-links  mb-4 d-flex flex-column'>
    <Link className='text-white mb-1 py-2'>About Us</Link>
    <Link className='text-white mb-1 py-2'>faq</Link>
    <Link className='text-white mb-1 py-2'>Contact</Link>
  </div>
</div>
<div className='col-2'>
  <h4 className='text-white'>quick Links</h4>
  <div className='footer-links  mb-4 d-flex flex-column'>
    <Link className='text-white mb-1 py-2'>Laptops</Link>
    <Link className='text-white mb-1 py-2'>Headphones</Link>
    <Link className='text-white mb-1 py-2'>Tablets</Link>
    <Link className='text-white mb-1 py-2'>Watch</Link>
  </div>
</div>
</div>
</div>
   </footer>
   <footer className='py-4'>
   <div className='container-xxl'>
    <div className='row'>
<div className='col-12 '>
<p className='text-center mb-0 text-white'>
  &copy;{new Date().getFullYear()};Powerd By Devlepoer's Corner
  </p>
</div>
    </div>
   </div>
   </footer>
   </>
  )
}

export default Footer