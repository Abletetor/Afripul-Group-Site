import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import "./OurTeam.css";
import teamMembers from './data';
import { motion } from 'framer-motion';

const OurTeam = () => {
   const [currentIndex, setCurrentIndex] = useState(0);

   const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex + 1 >= teamMembers.length - 2 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
         prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
      );
   };

   return (
      <section className="team-section">
         <motion.div
            initial={ { opacity: 0, x: -200 } }
            transition={ { duration: 1 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }>
            <h2 className="team-title">Our Amazing Team</h2>
            <p className="team-subtitle">
               Lorem ipsum dolor sit amet consectetur. Velit risus odio fames vulputate rutrum posuere elit porttitor sagittis.
            </p>
            <div className="team-carousel">
               <div className="team-slider">
                  { teamMembers.slice(currentIndex, currentIndex + 3).map((member) => (
                     <div key={ member.id } className="team-card">
                        <img src={ member.image } alt={ member.name } className="team-img" />
                        <div className="team-details">
                           <div className="rating">
                              { [...Array(5)].map((_, i) => (
                                 <FaStar key={ i } className="star" />
                              )) }
                           </div>
                           <h3 className="team-name">
                              { member.name } <span><MdVerified className="verified-icon" /> Verified</span>
                           </h3>
                           <p className="team-role">{ member.role }</p>
                        </div>
                        <img src={ member.badge } alt="badge" className="badge-icon" />
                     </div>
                  )) }
               </div>
               <div className="nav-buttons">
                  <button className="nav-btn" onClick={ prevSlide }>
                     <FaChevronLeft />
                  </button>
                  <button className="nav-btn" onClick={ nextSlide }>
                     <FaChevronRight />
                  </button>
               </div>
            </div>
         </motion.div>
      </section>
   );
};

export default OurTeam;
