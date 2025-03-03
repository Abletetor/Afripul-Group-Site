import { FiMonitor } from "react-icons/fi";
import { MdOutlineGraphicEq, MdOutlineDevices, MdDesignServices } from "react-icons/md";
import { AiOutlineProject, AiOutlineMobile } from "react-icons/ai";
import { RiPencilRuler2Line, RiPenNibLine, RiShareForwardFill } from "react-icons/ri";

const heroData = [
   {
      title: 'Branding',
      icon: <RiPenNibLine className="service-icon" />
   },
   {
      title: 'Graphic Design',
      icon: <MdOutlineGraphicEq className="service-icon" />
   },
   {
      title: 'Web Design',
      icon: <FiMonitor className="service-icon" />
   },
   {
      title: 'UX Design',
      icon: <RiPencilRuler2Line className="service-icon" />
   },
   {
      title: 'UI Design',
      icon: <MdDesignServices className="service-icon" />
   },
   {
      title: 'Motion Graphics',
      icon: <MdOutlineDevices className="service-icon" />
   },
   {
      title: 'Project Management',
      icon: <AiOutlineProject className="service-icon" />
   },
   {
      title: 'Mobile App Development',
      icon: <AiOutlineMobile className="service-icon" />
   },
   {
      title: 'Social Media Management',
      icon: <RiShareForwardFill className="service-icon" />
   },
];

export default heroData;