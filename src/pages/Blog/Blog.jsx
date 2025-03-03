import FAQ from "../../component/FAQ/FAQ";
import "./Blog.css";
import blogData from "./data";
import StartBuilding2 from "../../component/StartBuilding/StartBuilding2";
import { motion } from 'framer-motion';
const Blog = () => {
   return (
      <>
         <section className="blog-section">
            <motion.div
               initial={ { opacity: 0, y: 100 } }
               transition={ { duration: 1.5 } }
               whileInView={ { opacity: 1, y: 0 } }
               viewport={ { once: true } }>


               <div className="blog-header">
                  <h2>OUR BLOGS</h2>
                  {/* Blog Category Tabs */ }
                  <div className="blog-categories">
                     <button className="category-btn">BUSINESS</button>
                     <button className="category-btn active">DESIGN</button>
                     <button className="category-btn">DEVELOPMENT</button>
                  </div>
               </div>

               {/* Main Blog (First Blog) */ }
               <div className="featured-blog">
                  <img src={ blogData[0].image } alt={ blogData[0].title } className="featured-img" />
                  <div className="featured-content">
                     <h3>{ blogData[0].title }</h3>
                     <p className="meta">
                        <span className="span">
                           Category <span className="dot">•</span>
                           <span className="item">{ blogData[0].category }</span>
                        </span>
                        <span className="span">
                           Read Time <span className="dot">•</span>
                           <span className="item">{ blogData[0].readTime }</span>
                        </span>
                        <span className="span">
                           Author <span className="dot">•</span>
                           <span className="item">{ blogData[0].author }</span>
                        </span>
                     </p>
                     <p className="desc">{ blogData[0].description }</p>
                     <div className="blog-footer">
                        <a href="#" className="read-btn">
                           <span className='arrow-blog'>→</span> READ FULL BLOG
                        </a>
                        <span className="date">Published Date <strong>
                           <span className="date-blog">{ blogData[0].date }</span></strong>
                        </span>
                     </div>
                  </div>
               </div>

               {/* Other Blogs (Grid Layout) */ }
               <div className="blog-grid">
                  { blogData.slice(1).map((blog) => (
                     <div className="blog-card" key={ blog.id }>
                        <img src={ blog.image } alt={ blog.title } />
                        <div className="blog-info">
                           <h4>{ blog.title }</h4>
                           <p>{ blog.description }</p>
                           <a href="#" className="read-btn">
                              <span className='arrow-blog'>→</span> READ FULL BLOG
                           </a>
                        </div>
                     </div>
                  )) }
               </div>
            </motion.div>
         </section>
         <FAQ />
         <StartBuilding2 />
      </>
   );
};

export default Blog;
