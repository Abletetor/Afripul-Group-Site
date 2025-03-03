import Empowering from '../../component/Empowering/Empowering';
import Hero from '../../component/Hero/Hero';
import OurExpertise from '../../component/OurExpertise/OurExpertise';
import TrustedCompanies from '../../component/TrustedCompanies/TrustedCompanies';
import WhyChooseUs from '../../component/WhyChooseUs/WhyChooseUs';
import ServiceHome from '../../component/ServiceHome/ServiceHome';
import Testimonials from '../../component/Testimonials/Testimonials';
import Choose from '../../component/Choose/Choose';
const Home = () => {
   return (
      <div>
         <Hero />
         <TrustedCompanies />
         <Empowering />
         <OurExpertise />
         <WhyChooseUs />
         <ServiceHome />
         <Testimonials />
         <Choose />
      </div>
   );
};

export default Home;