import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import React from 'react';
import './Footer.css';


export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href="https://www.facebook.com/oggntech" target='_blank' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href="https://twitter.com/oggntech" target='_blank' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href="#"  role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href="https://www.instagram.com/mamtasadani05/" target="_blank" role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/oggntech/' target='_blank' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Husain-Rehmanji/OGGNtech' target='_blank' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
      <h5 className='text-uppercase'>Our Offices :</h5>
      <ul className='list-unstyled mb-0'>
        <li>
          <a href='#!' className='text-white'>
          {/* <MDBIcon fas icon="map-marker-alt" className="location-icon"/>   */}
          Chembur
          </a>
        </li>
        <li>
          <a href='#!' className='text-white'>
          {/* <MDBIcon fas icon="map-marker-alt" className="location-icon"/>  */}
          Ulwe
          </a>
        </li>
        <li>
          <a href='#!' className='text-white'>
          {/* <MDBIcon fas icon="map-marker-alt" className="location-icon"/>   */}
          Wadala
          </a>
        </li>
        <li>
          <a href='#!' className='text-white'>
          {/* <MDBIcon fas icon="map-marker-alt" className="location-icon"/>  */}
           Panvel
          </a>
        </li>
      </ul>
    </MDBCol>

            <MDBCol lg='6' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Our Services :</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  Digital Marketing
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Project Guidance
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  WebSite Development
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  Internships
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us :</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  oggntech@gmail.com
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  +91 7039922863
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  +91 9821157634
                  </a>
                </li>
                {/* <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li> */}
              </ul>
            </MDBCol>

            {/* <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol> */}
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: 
        <a className='text-white' href='https://mdbootstrap.com/'>
          OGGNtech.com
        </a>
      </div>
    </MDBFooter>
  );
}




















// import React from 'react';
// import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <div className='noclash'>
//       <div className="webfooter">
//       <div className='menufooter'>
//         <ul class="menu">
//         <h2 className='fhead'><u>Our offices:</u></h2>
//             <li>Panvel | Ulwe | Chembur</li>
//         </ul>
//         </div>
//         <div className='menufooter'>
//         <ul class="menu">
//         <h2 className='fhead'><u>Our Services</u></h2>
//             <li><a href="/">Digital Marketing</a></li>
//             <li><a href="/">Project Guidance</a></li>
//             <li><a href="/">Website Development</a></li>
//             <li><a href="">Internships</a></li>
//             <li><a href="/">Workshops</a></li>
//         </ul>
//         </div>
//         <div className='footercontent'>
//         <h2 class="tagline"><u>Connect with us</u></h2>
//         <ul class="icons">
//             {/* <li><a><FaGithub/></a></li> */}
//             <li><a href="https://www.linkedin.com/company/oggntech/" target="_blank"><FaLinkedinIn/></a></li>
//             <li><a href="https://www.instagram.com/mamtasadani05/" target="_blank"><FaInstagram/></a></li>
//             <li><a href="https://twitter.com/oggntech" target='_blank'><FaTwitter/></a></li>
//             <li><a href="https://www.facebook.com/oggntech" target='_blank'><FaFacebook/></a></li>
//         </ul>
//         </div>
//         <div class="contact">
//             <h2><u>Subscribe to our newsletter</u></h2>
//             <div className="newsletter">
//             <form action="#" method="POST" className="NewsLetter">
//               <input type="email" name='Email' placeholder="Enter your email" required/>  
//               <input type="submit" value="Join Now" className='button' style={{
//                 backgroundColor: '#1eb2a6',
//                 color: '#ffffff',
//                 marginLeft: '10px',
//                 border:  '#ffffff00',
//                 borderRadius: 4,
//                 cursor: 'pointer',
//                 opacity: 0.85
//               }}/>
//               </form>
//             </div>
//         </div>
//         </div>
//     </div>
//   )
// }
// export default Footer
