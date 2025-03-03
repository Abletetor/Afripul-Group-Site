import "./Showcase.css";
import blog from '../../assets/blog2.png';
const Showcase = () => {
   return (
      <section className="showcase">
         <div className="showcase-container">
            <div className="showcase-text">
               <p className="subtext">WOREBER LORD</p>
               <h2>
                  &#123; Web Design &amp; <br /> Development &#125;
               </h2>
               <p>
                  Lorem ipsum dolor sit amet consectetur. A ut risus habitant
                  morbi tellus massa. Viverra ornare tortor dictum integer
                  elementum laoreet proin amet.
               </p>
               <a href="#" className="subtext-button">
                  VIEW ALL OUR WORKS
               </a>
            </div>

            <div className="showcase-image">
               <img src={ blog } alt="Project Showcase" />
            </div>
         </div>
      </section>
   );
};

export default Showcase;
