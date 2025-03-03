import Showcase from "../Showcase/Showcase";
import "./ServiceHome.css";
import { FaThLarge } from "react-icons/fa";

const service = [
   { title: "Mobile App Development" },
   { title: "Web Applications" },
   { title: "Brand Strategy" },
   { title: "Visual Identity Design" },
];

const ServiceHome = () => {
   return (
      <section className="services">
         <div className="services-container">
            <button className="cta-button">● Our Services</button>
            <h2>Custom Software <br /> That Powers Your Business</h2>
            <p>
               From web apps to complex enterprise platforms, our smart developer team is here to turn your idea into a functional system that works on high-performance software.
            </p>

            <div className="services-grid">
               { service.map((service, index) => (
                  <div className="service-card" key={ index }>
                     <div className="service-icon-container">
                        <FaThLarge className="service-icon" />
                     </div>
                     <h3>{ service.title }</h3>
                  </div>
               )) }
            </div>
            <button className="see-more">See <br /> more</button>
            <Showcase />
         </div>
      </section>
   );
};

export default ServiceHome;
