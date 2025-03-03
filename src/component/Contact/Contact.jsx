import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";
import Testimonials from "../Testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";
import StartBuilding from "../StartBuilding/StartBuilding";

const Contact = () => {
   return (
      <>
         <section className="contact-section">
            <h2 className="contact-title">Get in Touch with Novus</h2>
            <p className="contact-subtitle">
               Reach out to us for inquiries, collaborations, or just to say hello. We’re here to listen, collaborate, and transform your ideas into digital realities.
            </p>

            <div className="contact-container">
               {/* Contact Form */ }
               <form className="contact-form">
                  <div className="form-row">
                     <div className="input-group">
                        <label>First Name</label>
                        <div className="input-wrapper">
                           <FaUser className="input-icon" />
                           <input type="text" placeholder="Enter First Name" required />
                        </div>
                     </div>
                     <div className="input-group">
                        <label>Last Name</label>
                        <div className="input-wrapper">
                           <FaUser className="input-icon" />
                           <input type="text" placeholder="Enter Last Name" required />
                        </div>
                     </div>
                  </div>

                  <div className="form-row">
                     <div className="input-group">
                        <label>Email</label>
                        <div className="input-wrapper">
                           <FaEnvelope className="input-icon" />
                           <input type="email" placeholder="Enter Your Email" required />
                        </div>
                     </div>
                     <div className="input-group">
                        <label>Phone</label>
                        <div className="input-wrapper">
                           <FaPhone className="input-icon" />
                           <input type="tel" placeholder="Enter Phone Number" required />
                        </div>
                     </div>
                  </div>

                  <div className="input-group">
                     <label>Message</label>
                     <textarea placeholder="Enter your Message" required></textarea>
                  </div>
                  <div className="form-btn">
                     <button type="submit" className="submit-btn">
                        <IoIosSend className="send-icon" /> Submit Your Message
                     </button>
                  </div>
               </form>

               {/* Contact Info */ }
               <div className="contact-info">
                  <div className="info-box">
                     <FaEnvelope className="info-icon" />
                     <p>support@novus.com</p>
                  </div>
                  <div className="info-box">
                     <FaPhone className="info-icon" />
                     <p>+91 00000 00000</p>
                  </div>
                  <div className="info-box">
                     <FaMapMarkerAlt className="info-icon" />
                     <p>Somewhere in the World</p>
                  </div>

                  {/* Social Media Links */ }
                  <div className="social-media">
                     <p>Follow Us on Social Media</p>
                     <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Testimonials />
         <FAQ />
         <StartBuilding />
      </>
   );
};

export default Contact;
