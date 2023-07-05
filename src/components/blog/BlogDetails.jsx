import React from 'react';
import './blog.css';

const BlogDetails = () => {
  return (
    <div className="blog-details-container">
      <div className="blog-details-image">
        <img src="../../images/back.jpg" style={ {width: "800px",height: "500px",marginTop: '100px'} } alt="Blog Cover" />
      </div>
      <div className="blog-details-content">
      <h1 className="blog-details-title" style={{
  fontSize: '36px',
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#06524c',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  letterSpacing: '2px',
  textAlign: 'center',
  marginBottom: '20px',
  marginTop: '100px'
}}>
  Build Your Dream Software & Engineering Career
</h1>

        <p className="blog-details-description"  > Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore quasi quia, perferendis quod inventore eligendi libero fugiat vel, facere minus id quo maxime. Natus ab debitis eos dolorem quis?. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ducimus autem animi delectus officia error eveniet itaque ipsam omnis porro nobis sed, harum fugit. Ut illo eveniet blanditiis saepe autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, itaque quas voluptas incidunt minus libero perspiciatis officia mollitia ipsam repudiandae accusantium beatae labore possimus eveniet iste tempore. Tempora, saepe officia.</p>
      </div>
    </div>
  );
};

export default BlogDetails;
