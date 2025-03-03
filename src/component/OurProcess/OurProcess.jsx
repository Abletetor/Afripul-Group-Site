import processData from "./data";
import "./OurProcess.css";
import { motion } from 'framer-motion';

const OurProcess = () => {
   return (
      <section className="process">
         <motion.div
            initial={ { opacity: 0, y: 100 } }
            transition={ { duration: 1.5 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }
            className="process-container">

            <div className="process-header">
               <h2>Our Process</h2>
               <p>
                  Great software starts with a clear, collaborative
                  process. Here’s how we bring your vision to life.
               </p>
            </div>
            <hr className="process-divider" />

            <div className="process-grid">
               { processData.map((item, index) => (
                  <div className="process-card" key={ index }>
                     <h3>{ item.title }</h3>
                     <p>{ item.description }</p>
                  </div>
               )) }
            </div>
         </motion.div>
      </section>
   );
};

export default OurProcess;
