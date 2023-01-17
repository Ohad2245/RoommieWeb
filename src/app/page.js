import { Footer } from "../components";
import Testimonials from "../components/testimonials/Testimonials";
import Contact from "../components/contact/Contact";
import {
  About,
  // Feedback,
  GetStarted,
  Hero,
  // Insights,
  // WhatsNew,
  // World,
} from "../screens";
import Alert from "../components/Alert";
// import Values2 from "../components/values2/Values2";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/cards/Card";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <br></br>
    <br></br>
    <br></br>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    {/* <World /> */}
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
    <div className="relative">
      <Testimonials />
    </div>
    <Card />
    <Contact />
    <Footer />
    <Alert />
  </div>
);

export default Page;
