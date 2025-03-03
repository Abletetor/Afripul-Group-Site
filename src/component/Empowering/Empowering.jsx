import "./Empowering.css";
import preview from "../../assets/empower.png";
import { motion } from 'framer-motion';

const Empowering = () => {
   return (
      <section className="empowering">
         <motion.div
            initial={ { opacity: 0, x: -100 } }
            transition={ { duration: 1 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }>
            <button className="cta-button">● What we really do</button>
            <h2 className="empowering-title">
               Empowering Businesses <br />
               Through Custom Software Solutions
            </h2>
            <p className="empowering-text">
               With expertise in software engineering, embedded systems, and digital transformation, our team creates reliable, scalable, and tailored solutions that meet the unique needs of our clients across industries.
            </p>
            <div className="browser-preview">
               <img src={ preview } alt="Website Preview" />
            </div>

         </motion.div>
      </section>
   );
};

export default Empowering;
