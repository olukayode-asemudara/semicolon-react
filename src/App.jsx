import Brands from "../components/Brands";
import Enum from "../components/Enum";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Socials from "../components/Socials";
import FooterMenu from "../components/FooterMenu";
import Footer from "../components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <MainSection />
      <Enum />
      <Brands />
      <Testimonial />
      <NewsLetter />
      <Socials />
      <FooterMenu />
      <Footer />
    </>
  );
};

export default App;
