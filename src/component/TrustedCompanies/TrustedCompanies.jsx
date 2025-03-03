import "./TrustedCompanies.css";
import companyLogos from "./data";
import { motion } from 'framer-motion';

const TrustedCompanies = () => {
   return (
      <section className="trusted-companies">
         <motion.div
            initial={ { opacity: 0, x: -100 } }
            transition={ { duration: 1 } }
            whileInView={ { opacity: 1, x: 0 } }
            viewport={ { once: true } }>
            <p className="trusted-text">Some of the companies that have trusted our working capabilities.</p>
            <div className="company-logos">
               { companyLogos.map((logo, index) => (
                  <img src={ logo.image } alt={ logo.alt } key={ index } />
               )) }
            </div>
         </motion.div>
      </section>
   );
};

export default TrustedCompanies;
