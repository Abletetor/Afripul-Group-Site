import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import beliefCards from "./data";
import "./WhatWeBelieve.css";
import { PiDotsThreeBold } from "react-icons/pi";

const WhatWeBelieve = () => {
   return (
      <section className="belief-section">
         <h2 className="belief-title">What we believe</h2>
         <p className="belief-subtitle">
            Principles that dictate how we work, see problems & solve
         </p>
         <div className="belief-container">
            { beliefCards.map((card) => (
               <div className="belief-card" key={ card.id }>
                  <div className="header-icon">
                     <PiDotsThreeBold size={ 24 } />
                     <span className="date">
                        <MdKeyboardDoubleArrowRight /> { card.date }</span>
                  </div>
                  <div className="card-header">
                     <div className="profile">
                        <img src={ card.image } className="profile-pic" alt="profile" />
                        <div className="profile-info">
                           <span className="name">{ card.name }</span>
                           <span className="email">{ card.email }</span>
                        </div>
                     </div>

                  </div>
                  <h3 className="card-title">{ card.title }</h3>
                  <p className="card-content">{ card.content }</p>
               </div>
            )) }
         </div>
      </section>
   );
};

export default WhatWeBelieve;
