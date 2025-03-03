import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../Testimonials/Testimonials.css";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import testimonials from "../Testimonials/data";

const Testimonials = () => {
   return (
      <section className="testimonial-section">
         <Swiper
            modules={ [Pagination, Autoplay] }
            spaceBetween={ 20 }
            slidesPerView={ 1 }
            pagination={ { clickable: true } }
            autoplay={ { delay: 3000, disableOnInteraction: false } }
            breakpoints={ {
               768: { slidesPerView: 2 },
               1024: { slidesPerView: 3 },
            } }
            className="testimonial-slider"
         >
            { testimonials.map((testimonial) => (
               <SwiperSlide key={ testimonial.id } className="testimonial-card">
                  <div className="testimonial-content">
                     <div className="stars">
                        { [...Array(5)].map((_, i) => (
                           <FaStar key={ i } />
                        )) }
                     </div>
                     <p className="review-text">{ testimonial.review }</p>
                     <div className="testimonial-footer">
                        <img src={ testimonial.profilePic } alt={ testimonial.name } />
                        <div>
                           <h4>{ testimonial.name } <span><MdVerified className="verified-icon" /> Verified Customer</span></h4>
                           <p>{ testimonial.date }</p>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            )) }
         </Swiper>
      </section>
   );
};

export default Testimonials;
