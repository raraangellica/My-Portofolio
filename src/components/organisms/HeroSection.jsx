import { motion } from "framer-motion";
import ButtonLearnMore from "../molecules/ButtonLearnMore.jsx";

const HeroSection = () => {
  return (
    <div id="home" className="heroContainer ">
      <div className="relative flex items-center">
        <motion.h1
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="heroH1"
        >
          Welcome to My Portfolio
        </motion.h1>

        <span className="h-6 sm:h-10 md:h-14 w-1 bg-blue-500 ml-1 animate-pulse"></span>
      </div>
      <ButtonLearnMore />
    </div>
  );
};

export default HeroSection;
