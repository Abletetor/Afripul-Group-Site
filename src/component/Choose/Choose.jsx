import { MdChevronRight } from "react-icons/md";
import "./Choose.css";
import preview from "../../assets/bg-logo.png";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const Choose = () => {
   const navigate = useNavigate();
   return (
      <section className="choose">
         <motion.div
            initial={ { opacity: 0, y: 100 } }
            transition={ { duration: 1 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            className="choose-container">
            <h2>Why should you <br /> Choose us ?</h2>
            <p>
               At AfRipul group, we provide innovative, high-quality tech solutions and individuals. we are your trusted
               partner in the digital age.
            </p>

            <div className="choose-buttons">
               <button className="primary-btn">Start building</button>
               <button className="contact-us" onClick={ () => navigate("/contact") }>
                  Contact Us
                  <MdChevronRight className="play" />
               </button>
            </div>
            <div className="preview">
               <img src={ preview } alt="Preview" />
            </div>
         </motion.div>
      </section>
   );
};

export default Choose;
