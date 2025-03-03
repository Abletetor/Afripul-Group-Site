import { FaShoppingCart } from "react-icons/fa";
import "./OurProducts.css";
import products from "./data";
import { motion } from 'framer-motion';

const OurProducts = () => {
   return (
      <section className="products-section">
         <motion.div
            initial={ { opacity: 0, y: 100 } }
            transition={ { duration: 1.5 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true } }>


            <h2 className="products-title">Our Products</h2>
            <p className="products-subtitle">
               Explore our high-quality products, designed to enhance your daily life with innovation and style.
            </p>

            <div className="products-container">
               { products.map((product) => (
                  <div key={ product.id } className="product-card">
                     <img src={ product.image } alt={ product.title } className="product-image" />
                     <div className="product-info">
                        <h3>{ product.title }</h3>
                        <p>{ product.description }</p>
                        <div className="product-footer">
                           <span className="product-price">{ product.price }</span>
                           <button className="product-btn">
                              <FaShoppingCart className="cart-icon" /> Buy Now
                           </button>
                        </div>
                     </div>
                  </div>
               )) }
            </div>
         </motion.div>
      </section>
   );
};

export default OurProducts;
