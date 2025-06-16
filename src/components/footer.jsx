// import style from "./footer.module.css"
import './Footer.css';
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";





function Footer()  {
    return(
        <>
         <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>RnPsoft</h2>
          <p>A pioneering tech company driven by <br /> innovation, excellence, and a passion for <br /> creating cutting-edge solutions</p> <br />
          <p>Email: team@rnpsoft.com</p> <br />
          <p> +91 9798219701 <br /> +91 8637845107</p>
        </div>
        <div className="footer-section links">
          <h2>About Us</h2>
          <ul>
            <li> Home</li><br/>
            <li> Our Team</li><br/>
            <li> Our Services</li><br/>
            <li> Career</li><br/>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <i className="icon " onClick={() => window.open("https://www.instagram.com/rnpsoft?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D", "_blank")}> <FaInstagram  /></i>
            <i className="icon " onClick={() => window.open("https://wa.me/+919938512307", "_blank")}> <FaWhatsapp  /></i>
            <i className="icon " onClick={() => window.open("https://www.linkedin.com/company/rnpsoft/", "_blank")}> < CiLinkedin /></i>
            <i className="icon " onClick={() => window.open("https://twitter.com/RnPsoft?t=cIoqKXakq6wW4rKuVAU9Bg&s=09", "_blank")}> < FaXTwitter /></i>
            <i className="icon " onClick={() => window.open("https://youtube.com/@RnPsoft?si=HLyLaLsNfaNXFqeF", "_blank")}> < FiYoutube /></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 RnPsoft, All rights reserved
      </div>
    </footer>
    </>
  );
};

export default Footer;