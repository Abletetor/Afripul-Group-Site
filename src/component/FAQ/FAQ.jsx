import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqData from "./data";
import "./FAQ.css";

const FAQ = () => {
   const [openIndex, setOpenIndex] = useState(0);

   const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <section className="faq-section">
         <div className="faq-header">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <a href="#" className="view-all">
               <span className='arrow-faq'>→</span> VIEW ALL
            </a>
         </div>

         <div className="faq-container">
            { faqData.map((faq, index) => (
               <div key={ faq.id } className={ `faq-item ${openIndex === index ? "open" : ""}` }>
                  <div className="faq-question" onClick={ () => toggleFAQ(index) }>
                     <h3>{ faq.question }</h3>
                     { openIndex === index ? <FaMinus size={ 14 } /> : <FaPlus size={ 14 } /> }
                  </div>
                  { openIndex === index && <p className="faq-answer">{ faq.answer }</p> }
               </div>
            )) }
         </div>
      </section>
   );
};

export default FAQ;
