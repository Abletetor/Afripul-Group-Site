import { MdPlayCircleFilled } from "react-icons/md";
import features from "./data";
import "./WhyChooseUs.css";
import preview from "../../assets/empower.png";

const WhyChooseUs = () => {
   return (
      <section className="why-choose">
         <div className="why-choose-container">
            <h2>Why should you <br /> Choose us ?</h2>
            <p>
               At AfRipul group, we provide innovative, high-quality tech solutions and individuals.
               We are your trusted partner in the digital age.
            </p>

            <div className="why-choose-buttons">
               <button className="btn-primary">Start building</button>
               <button className="reel-watch">
                  <MdPlayCircleFilled className="play" /> Watch our reel
               </button>
            </div>
            <div className="browser-preview">
               <img src={ preview } alt="Website Preview" />
            </div>

            <div className="why-choose-grid">
               { features.map((feature, index) => (
                  <div className="feature-card" key={ index }>
                     <div className="feature-icon">{ feature.icon }</div>
                     <h3>{ feature.title }</h3>
                     <p>{ feature.description }</p>
                  </div>
               )) }
            </div>
         </div>
      </section>
   );
};

export default WhyChooseUs;
