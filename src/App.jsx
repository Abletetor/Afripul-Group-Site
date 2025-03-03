import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import About from './pages/About/About';
import OurService from './pages/OurServices/OurService';
import OurWorks from './pages/OurWorks/OurWorks';
import ProjectOverview from './component/ProjectOverview/ProjectOverview';
import Blog from './pages/Blog/Blog';
import Partnership from './pages/Partnership/Partnership';
import OurProducts from './pages/OurProducts/OurProducts';
import Contact from './component/Contact/Contact';
import ScrollToTop from './helper/ScrollToTop';

const App = () => {
   return (
      <>
         <ScrollToTop />
         <Navbar />
         <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/service' element={ <OurService /> } />
            <Route path='/our-works' element={ <OurWorks /> } />
            <Route path="/our-works/projects/:id" element={ <ProjectOverview /> } />
            <Route path='/our-products' element={ <OurProducts /> } />
            <Route path='/partnership' element={ <Partnership /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/contact' element={ <Contact /> } />
         </Routes>
         <Footer />
      </>
   );
};



export default App;