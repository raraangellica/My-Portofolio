import Header from "../organisms/Header.jsx";
import HeroSection from "../organisms/HeroSection.jsx";
import Profile from "../organisms/Profile.jsx";
import AboutMe from "../organisms/AboutMe.jsx";
import MyProjects from "../organisms/Projects.jsx";
import Footer from "../organisms/Footer.jsx";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Profile />
      <AboutMe />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
