import { useParams } from "react-router-dom";
import "./ProjectOverview.css";
import projects from "../Projects/data";
import HeadlessTestimonial from "../../component/HeadlessTestimonial/HeadlessTestimonial";
import TrustedCompanies from "../../component/TrustedCompanies/TrustedCompanies";
import StartBuilding2 from "../../component/StartBuilding/StartBuilding2";

const ProjectOverview = () => {
   const { id } = useParams();
   const project = projects.find((proj) => proj.id === parseInt(id));

   if (!project) {
      return <h2>Project not found</h2>;
   }

   return (
      <>
         <div className="project-overview">
            {/* Hero Section */ }
            <div className="hero-section" style={ { backgroundImage: `url(${project.image})` } }>
               <button className="cta-btn">Our Works</button>
               <h1>{ project.projectName }</h1>
            </div>

            {/* Project Details */ }
            <div className="project-details">
               <div className="info">
                  <p>Client: <br /><strong>{ project.client }</strong></p>
                  <p>Service: <br /><strong>{ project.title }</strong> </p>
                  <p>Year:<br /> <strong>{ project.year }</strong></p>
               </div>

               {/* Tags */ }
               <div className="tags">
                  { project.tags.map((tag, index) => (
                     <span key={ index }>{ tag }</span>
                  )) }
               </div>

               {/* Project Image */ }
               <div className="project-image">
                  <img src={ project.image1 } alt={ project.title } />
               </div>
               {/* Project Description */ }

               <h3>Project Overview:</h3>
               <div className="project-desc">
                  <div className="para">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa enim perspiciatis est placeat. Excepturi sint ipsam repudiandae.</p>
                  </div>
                  <div className="para">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa enim perspiciatis est placeat. Excepturi sint ipsam repudiandae earum ipsum doloremque quo exercitationem reiciendis similique? Suscipit impedit recusandae incidunt laborum?</p>
                  </div>
                  <div className="image-block">
                     <img src={ project.image1 } alt="Process 1" />
                  </div>
                  <div className="process-section">
                     <h3>The Process:</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur. Sit faucibus dignissim cursus sit sagittis. Faucibus maecenas nibh blandit posuere sit fringilla. Fringilla aliquam eget elementum sed bibendum sit sed.
                     </p>
                  </div>
                  <div className="para">
                     <h3>The Result:</h3>
                  </div>
                  <div className="para">
                     <p>
                        Lorem ipsum dolor sit amet consectetur. Sit faucibus dignissim cursus sit sagittis. Faucibus maecenas nibh blandit posuere sit fringilla. Fringilla aliquam eget elementum sed bibendum sit sed.
                     </p>
                  </div>
                  <div className="image-block full-width">
                     <img src={ project.image1 } alt="Process 2" />
                  </div>
               </div>
            </div>
         </div>
         <TrustedCompanies />
         <HeadlessTestimonial />
         <StartBuilding2 />
      </>
   );
};

export default ProjectOverview;
