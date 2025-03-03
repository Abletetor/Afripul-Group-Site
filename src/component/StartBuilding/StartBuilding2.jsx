import "./StartBuilding.css";
import { MdChevronRight } from "react-icons/md";
import preview from "../../assets/bg-logo.png";
import { useNavigate } from "react-router-dom";

const StartBuilding2 = () => {
   const navigate = useNavigate();
   return (
      <section className="start-building-container">
         <div className="start-building-content">
            <h2 className="start-building-title">
               Let’s Start Building<br /> Tomorrow  today
            </h2>
            <p className="start-building-subtitle">
               At AfRipul group, we provide innovative, high-quality tech solutions and individuals. We are your trusted partner in the digital age.
            </p>
            <div className="start-building-buttons">
               <button className="primary-btn">Start building</button>
               <button className="contact-us" onClick={ () => navigate("/contact") }>
                  Contact Us
                  <MdChevronRight className="play" />
               </button>
            </div>
            <div className="preview">
               <img src={ preview } alt="Preview" />
            </div>
         </div>
      </section>
   );
};

export default StartBuilding2;
