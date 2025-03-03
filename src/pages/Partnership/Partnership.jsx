import partData from "./data";
import "./Partnership.css";
import { motion } from 'framer-motion';

const Partnership = () => {
   return (
      <section className="partnership-section">
         <motion.div
            initial={ { opacity: 0, y: 100 } }
            transition={ { duration: 1.5 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }>


            <h2 className="partnership-title">Partner with Us</h2>
            <p className="partnership-subtitle">
               Collaborate with us to unlock new opportunities and drive success together. We believe in strong partnerships that create long-term value.
            </p>
            <div className="partnership-container">
               { partData.map((item, index) => (
                  <div className="partnership-card" key={ index }>
                     { item.icon }
                     <h3>{ item.title }</h3>
                     <p>{ item.desc }</p>
                  </div>
               )) }
            </div>
            <button className="partnership-btn">Become a Partner</button>
         </motion.div>
      </section>
   );
};

export default Partnership;
