import { Link } from "react-router-dom";
import projects from "./data";
import "./Projects.css";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
   return (
      <section className="projects">
         <div className="container">
            <div className="header">
               <h2>Some Selected Projects</h2>
               <p>
                  A fully engaged team, working hard to build great tools that solve problems in all aspects of society.
               </p>
               <div className="tags">
                  <span>Ui design</span>
                  <span>Ux design</span>
                  <span>Web design</span>
                  <span>Backend Development</span>
                  <span>Frontend Development</span>
                  <span>Logo Design</span>
                  <span>Advertisement Design</span>
               </div>
            </div>

            {/* Project Showcase */ }
            <div className="project-list">
               { projects.map((project) => (
                  <div className="project-card" key={ project.id }>
                     <div className="project-info">
                        <h4>{ project.client }</h4>
                        <h3>{ `{ ${project.title} }` }</h3>
                        <div className="project-tags">
                           { project.tags.map((tag, index) => (
                              <span key={ index }>{ tag }</span>
                           )) }
                        </div>
                        <p>{ project.summary }</p>
                        <div className="case-study-div">
                           <Link to={ `/our-works/projects/${project.id}` } className="case-study-btn">
                              View case study
                           </Link>
                           <Link to={ `/our-works/projects/${project.id}` } className="case-study-icon">
                              <FaArrowRight />
                           </Link>
                        </div>
                     </div>
                     <div className="project-image">
                        <img src={ project.image } alt={ project.title } />
                     </div>
                  </div>
               )) }
            </div>
         </div>
      </section>
   );
};

export default Projects;
