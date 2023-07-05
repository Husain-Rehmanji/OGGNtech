import React from 'react';
import { Link } from 'react-router-dom';
import { blog } from '../../data';
import './blog.css';

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => {
        return (
          <div className="items shadow" key={val.id}>
            <div className="img">
              <img src={val.cover} alt='' />
            </div>
            <div className="text">
              <div className="admin flexSB">
                <span>
                  <i className='fa fa-user'></i>
                  <label htmlFor=''>{val.type}</label>
                </span>
                <span>
                  <i className='fa fa-calendar-alt'></i>
                  <label htmlFor=''>{val.date}</label>
                </span>
                <span>
                  <i className='fa fa-comments'></i>
                  <label htmlFor=''>{val.com}</label>
                </span>
              </div>
              <Link to={`/blog/BlogDetails`}>
                <h1>{val.title}</h1>
              </Link>
              <p>{val.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
