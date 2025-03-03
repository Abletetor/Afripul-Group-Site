import { MdPlayCircleFilled } from "react-icons/md";
import preview from "../../assets/empower.png";
import "./OurService.css";
import ServiceCard from "../../component/ServiceCard/ServiceCard";
import OurProcess from "../../component/OurProcess/OurProcess";
import HeadlessTestimonial from "../../component/HeadlessTestimonial/HeadlessTestimonial";
import Choose from "../../component/Choose/Choose";
import { motion } from 'framer-motion';

const OurService = () => {
   return (
      <>
         <section className="our-service">
            <motion.div
               initial={ { opacity: 0, y: 100 } }
               transition={ { duration: 1.5 } }
               whileInView={ { opacity: 1, y: 0 } }
               viewport={ { once: true } }
               className="our-service-container">
               <button className="cta-btn">Creative Innovations</button>
               <h2>Custom Software <br /> That Powers Your Business.</h2>
               <p>
                  At AfRipul, we develop custom software solutions that enable your business to scale, innovate, and facilitate effective business processes.
               </p>

               <div className="our-service-buttons">
                  <button className="btn-primary">Start building</button>
                  <button className="reel-watch">
                     <MdPlayCircleFilled className="play" /> Watch video
                  </button>
               </div>
               <div className="browser-preview">
                  <img src={ preview } alt="Website Preview" />
               </div>
               <p className="our-service-text">
                  We aim to help you stay ahead in the 21st-century competitive
                  business landscape. From web apps to complex enterprise platforms,our smart developer team is here to turn your idea into a functional system that works on high-performance software.
               </p>
            </motion.div>
         </section>
         <ServiceCard />
         <OurProcess />
         <HeadlessTestimonial />
         <Choose />
      </>
   );
};

export default OurService;
