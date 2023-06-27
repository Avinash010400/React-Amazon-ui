import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineHome,AiOutlineMail,AiFillInfoCircle} from "react-icons/ai"
import {BiPhoneCall} from "react-icons/bi"
const Contact = () => {
  return (
   <>
     <Meta title={"Contact Us"}/>
    <BreadCrumb title="Contact Us"/>
    <div className='contact-wrapper home-wrapper-2 py-5'>
      <div className=' container-xxl'>
        <div className='row'>
<div className='col-12'>
<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8390.721042403024!2d77.61735141918486!3d12.920627213901803!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680240781900!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className='col-12 mt-5'>
<div className='contact-inner-wrapper d-flex justify-content-between'>
<div>
  <h3 className='contact-title mb-4'>Contact</h3>
  <form action='' className='d-flex flex-column gap-15'>
<div>
  <input type="text" className='form-control ' placeholder='Name'/>
</div>
<div>
  <input type="email" className='form-control 'placeholder='Email'/>
</div>
<div>
  <input type="number" className='form-control ' placeholder='Mobile'/>
</div>
<div>
  <textarea name='' id=" " cols="30" className='w-100 form-control' rows="4" placeholder='Commnets'></textarea>
</div>
<button className='button border-0'>Submit</button>
  </form>
</div>
<div>
  <h3 className='contact-title mb-4'>Get in touch with us</h3>
  <div>
    <ul className='ps-0'>
      <li className='mb-3 d-flex align-items-center gap-15'><AiOutlineHome className='fs-5'/>
      <address className='mb-0'>Hno.100,Near sandhya theatre,Old Madivala,Bangalore</address>
      </li>
      <li className='mb-3 d-flex align-items-center gap-15'><BiPhoneCall className='fs-5' />
      <a href='+91 8908130394'>+91 8908130394</a>
      </li>
      <li className='mb-3 d-flex align-items-center gap-15'><AiOutlineMail className='fs-5'/>
      <a href='mailto:kavinash010400@gmail.com'>kavinash010400@gmail.com</a>
      </li>
      <li className='mb-3 d-flex align-items-center gap-15'><AiFillInfoCircle className='fs-5'/>
      <p className='mb-0'>Monday-Friday 10AM - 6PM</p>
      </li>
    </ul>
  </div>
</div>
</div>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default Contact;