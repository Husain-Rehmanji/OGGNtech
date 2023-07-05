import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='noclash'>
      <div className="webfooter">
      <div className='menufooter'>
        <ul class="menu">
        <h2 className='fhead'><u>Our offices:</u></h2>
            <li>Panvel | Ulwe | Chembur</li>
        </ul>
        </div>
        <div className='menufooter'>
        <ul class="menu">
        <h2 className='fhead'><u>Our Services</u></h2>
            <li><a href="/">Digital Marketing</a></li>
            <li><a href="/">Project Guidance</a></li>
            <li><a href="/">Website Development</a></li>
            <li><a href="">Internships</a></li>
            <li><a href="/">Workshops on Board</a></li>
        </ul>
        </div>
        <div className='footercontent'>
        <h2 class="tagline"><u>Reach us through Social Media</u></h2>
        <ul class="icons">
            {/* <li><a><FaGithub/></a></li> */}
            <li><a href="https://www.linkedin.com/company/oggntech/"><FaLinkedinIn/></a></li>
            <li><a><FaInstagram/></a></li>
            <li><a><FaTwitter/></a></li>
            <li><a><FaFacebook/></a></li>
        </ul>
        </div>
        <div class="contact">
            <h2><u>Subscribe to our newsletter</u></h2>
            <div className="newsletter">
            <form action="#" method="POST" className="NewsLetter">
              <input type="text" name='Email' placeholder="Enter your email" required/>
              <input type="submit" value="Join Now" className='button'/>
              </form>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Footer
