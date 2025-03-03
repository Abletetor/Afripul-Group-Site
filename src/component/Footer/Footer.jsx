import "./Footer.css";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Footer = () => {
   const navigate = useNavigate();
   return (
      <footer className="footer">
         <div className="footer-container">

            <div className="footer-subscribe">
               <p>Receive the most recent news and updates directly in your email inbox!</p>
               <div className="subscribe-box">
                  <input type="email" placeholder="Email address" />
                  <button>Subscribe</button>
               </div>
               <div className="social-icon">
                  <SlSocialTwitter className="footer-icon" />
                  <SiInstagram className="footer-icon" />
                  <SiLinkedin className="footer-icon" />
                  <SiFacebook className="footer-icon" />
               </div>
            </div>

            <div className="footer-links">
               <div>
                  <h4>COMPANY</h4>
                  <ul>
                     <li onClick={ () => navigate('/about') }>About Us</li>
                     <li onClick={ () => navigate('/contact') }>Contact Us</li>
                     <li onClick={ () => navigate('/service') }>Our Services</li>
                     <li onClick={ () => navigate('/our-works') }>Our Works</li>
                     <li onClick={ () => navigate('/blog') }>Blog</li>
                  </ul>
               </div>

               <div>
                  <h4>FOLLOW</h4>
                  <ul>
                     <li>Instagram</li>
                     <li>LinkedIn</li>
                     <li>Facebook</li>
                     <li>Twitter</li>
                     <li>Youtube</li>
                  </ul>
               </div>

               <div>
                  <h4>CONTACT</h4>
                  <ul>
                     <li>00123456789</li>
                     <li>official@gmail.com</li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
