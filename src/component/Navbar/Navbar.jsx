import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import logo from "../../assets/logo1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [activeLink, setActiveLink] = useState("");

   // Toggle menu open/close
   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className="navbar">
         <img src={ logo } alt="Afripul Logo" className="logo" />

         <div className="menu-icon" onClick={ toggleMenu }>
            { isOpen ? <FiX className="icon" /> : <FiMenu className="icon menu" /> }
         </div>

         <ul className={ `nav-links ${isOpen ? "open" : ""}` }>
            { ["Home", "About", "Service", "Our Works", "Our Products", "Partnership", "Blog"].map((link) => (
               <NavLink to={ link === "Home" ? "/" : `/${link.toLowerCase().split(" ").join("-")}` }
                  key={ link }
                  className={ activeLink === link ? "active" : "" }
                  onClick={ () => {
                     setActiveLink(link);
                     setIsOpen(false);
                  } }
               >
                  { link }
               </NavLink>
            )) }
         </ul>
         <button className="start-btn">Start Building</button>
      </nav>
   );
};

export default Navbar;
