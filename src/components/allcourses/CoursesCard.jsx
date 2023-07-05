import React, { useState } from "react";
import { coursesCard } from "../../data";
import "./courses.css";

const CoursesCard = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <div className="items" key={val.id}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher.map((details, index) => (
                      <React.Fragment key={index}>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button onClick={toggleModal} className="outline-btn">
                <h4>ENROLL NOW !</h4>
              </button>
              {modal && (
                <div className="modal">
                  <div onClick={toggleModal} className="overlay"></div>
                  <div className="modal-content">
                    <span>HTML, CSS, And Javascript For Web Developers</span>
                    <hr style={{ marginBottom: "20px" }} />
                    <img
                      src="./images/sample.png"
                      style={{ width: "400px", height: "300px" }}
                      alt=""
                    />
                    <h1 style={{ textDecoration: "underline" }}>
                      Course Details
                    </h1>
                    <p>
                      Introduction to HTML,HTML Elements and Tags: Text
                      Formatting and Links :Formatting text using HTML tags
                      (e.g., headings, paragraphs, emphasis), Creating
                      hyperlinks to navigate between web pages, Lists and
                      Tables, Working with Images and Multimedia, HTML Forms,
                      Exploring the new features introduced in HTML5 (e.g.,
                      video, audio, canvas), Working with HTML tags to structure
                      web pages (e.g., headers, footers, navigation)
                    </p>
                    <h1 style={{ textDecoration: "underline" }}>
                    Outcome After Learning :
                    </h1>
                    {/* <h1 style={{ color: "blue", textDecoration: "underline" }}>Applications:</h1> */}

      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <h2 style={{ color: "green", fontSize: "20px" }}>Personal Portfolio</h2>
          <p style={{ fontSize: "16px" }}>This is a personal website that showcases an individual's skills, projects, and achievements.</p>
        </li>
        <li>
          <h2 style={{ color: "purple", fontSize: "20px" }}>Virtual Museum</h2>
          <p style={{ fontSize: "16px" }}>An online platform that allows users to explore and learn about various artworks, artifacts, and exhibitions virtually.</p>
        </li>
        <li>
          <h2 style={{ color: "orange", fontSize: "20px" }}>Environmental Awareness</h2>
          <p style={{ fontSize: "16px" }}>An application aimed at raising awareness about environmental issues and promoting sustainable practices.</p>
        </li>
        <li>
          <h2 style={{ color: "red", fontSize: "20px" }}>+ More</h2>
          <p style={{ fontSize: "16px" }}>Additional applications with various functionalities and purposes.</p>
        </li>
      </ul>
                    
                    <button className="close-modal" onClick={toggleModal}>
                      CLOSE
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;


