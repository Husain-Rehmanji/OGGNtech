import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import styled from "styled-components";

const ContC = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    color: #1eb2a6;
    background: white;
    
    .container {
      margin-top: 3rem;
      text-align: center;

      .head {
        margin-top: 2.5rem;
        display: flex;
        justify-content: center;
      }

      .contact-form {
        max-width: 60%;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background-color: #1eb2a6;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 4px;

            &:hover {
              cursor: pointer;
              transform: scale(0.9);
            }
          }

          input[type="text"],
          input[type="email"] {
            width: 48%;
          }

          textarea {
            width: 100%;
          }
        }
      }
    }

    .map {
      margin-top: 0.2rem;
      display: flex;
      justify-content: center;
    }
  `;

  return (
    <Wrapper>
      <div style={{ backgroundColor: "#1eb2a6", padding: "1rem 0" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>Get in Touch</h1>
      </div>

      <div className="container">
        <div className="contact-form">
          <form action="#" method="POST" className="contact-inputs">
            <div style={{ display: "flex", gap: "2%" }}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />

              <input
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
            </div>

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              placeholder="Message"
              required
            ></textarea>

            <input type="submit" value="Send" style={{ marginTop: "2rem", marginBottom: "3.5rem"}} />
          </form>
        </div>
      </div>

      <div className="head" style={{ backgroundColor: "#1eb2a6", padding: "1rem 0"}}>
        <div style={{ display: "flex", justifyContent: "center", gap: "6rem" }}>
        <div >
            <p style={{ color: "white", textAlign: "center" }}><FaEnvelope /> EMAIL US - <a href = "mailto: oggntech@gmail.com" style={{color: "white"}}>oggntech@gmail.com</a></p>
          </div>
          <div>
            <p style={{ color: "white", textAlign: "center" }}><FaPhone /> Call Us <a href="tel: +917039922863" style={{color: "white"}}>+91 7039922863</a> | <a href="tel: +919821157634" style={{color: "white"}}>+91 9821157634</a></p>
          </div>
        </div>
      </div>

      <h1 style={{ backgroundColor: "white", padding: "1rem 0", marginTop: "2rem", color: "#1eb2a6", textAlign: "center", fontSize: "40px" }}><FaMapMarkerAlt /> Reach us Here</h1>


      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15092.261454200794!2d73.028075!3d18.9727205!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa23e35a8a4d00a2d%3A0x43c5b4c6549e2380!2soggntech!5e0!3m2!1sen!2sin!4v1686807602588!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          align="center"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Wrapper>
  );
};

export default ContC;
