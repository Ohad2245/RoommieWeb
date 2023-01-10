import { Footer, Navbar } from "../components";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../screens";
import Alert from '../components/Alert';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar/>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <div className="relative">
      <Contact />
      <div className="gradient-04 z-0" />
    </div>
    <Testimonials/>
    <Footer />
    <Alert/>
  </div>
);

export default Page;
