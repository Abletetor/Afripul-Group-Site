import { FaArrowRight } from "react-icons/fa";
import './ServiceCard.css';
import team from '../../assets/team-behind.jpeg';
import serv from '../../assets/service-1.png';
import FlowChart from "../FlowChart/FlowChart";

const ServiceCard = () => {
   return (
      <section className="service-card-section">
         <div className="service-card-header">
            <button className="cta-btn">Creative Innovations</button>
         </div>
         <div className="service-container">
            {/* First Row */ }
            <div className="card gradient-1">
               <div className="card-content">
                  <h3>Custom Software Development</h3>
                  <p>
                     We develop a unique software solution that brings your vision to
                     reality and satisfies your business needs.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
               <div className="card-image">
                  <img src={ team } alt="Custom Software" />
               </div>
            </div>

            <div className="card gradient-2">
               <div className="card-content">
                  <h3>Mobile App Development</h3>
                  <p>
                     We build high-performance mobile applications for iOS and Android
                     that offer a seamless, engaging user experience.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
            </div>

            {/* Second Row */ }
            <div className="card web-applications">
               <div className="card-content">
                  <h3>Web Applications</h3>
                  <p>
                     Our web applications combine form and function to deliver
                     responsive, fast, and secure experiences.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
               <div className="card-image">
                  <img src={ team } alt="Web Applications" />
               </div>
            </div>

            <div className="card brand-strategy gradient-1">
               <div className="card-content">
                  <h3>Brand Strategy</h3>
                  <p>
                     Understanding what makes your business unique and positioning it to
                     stand out in the market.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
            </div>

            {/* Third Row (Full-Width) */ }
            <div className="card visual-identity full-width">
               <div className="card-content">
                  <h3>Visual Identity Design</h3>
                  <p>
                     Crafting memorable logos, designs, cohesive color schemes, and
                     typography that align with your brand’s personality.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
               <div className="card-image">
                  <img src={ serv } alt="Visual Identity" />
               </div>
            </div>

            {/* Fourth Row */ }
            <div className="card content-creation">
               <div className="card-content">
                  <h3>Content Creation</h3>
                  <p>
                     From persuasive copywriting to high-quality visual content, we create materials that reflect your brand’s voice.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
                  <div className="highlight-box">
                     Our social media following has exploded, and our engagement rates are higher than ever.
                  </div>
               </div>
            </div>

            <div className="card gradient-1">
               <div className="card-content">
                  <h3>Brand Consulting</h3>
                  <p>
                     Guiding brands through every step, from brand audits to continuous consulting on brand management.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
            </div>

            {/* Fifth Row (Full-Width) */ }
            <div className="card digital-marketing full-width">
               <div className="card-content">
                  <h3>Digital Marketing</h3>
                  <p>
                     We drive results through data-driven strategies, creative solutions,
                     and a commitment to growth.
                  </p>
                  <a href="#" className="learn-more">
                     Learn more <FaArrowRight />
                  </a>
               </div>
               <FlowChart />
            </div>
         </div>
      </section>
   );
};

export default ServiceCard;


