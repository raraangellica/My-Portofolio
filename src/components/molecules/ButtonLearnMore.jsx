// Ganti import ini
import { motion } from "framer-motion";
import Button from "../atoms/Button.jsx";

const ButtonLearnMore = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("profile");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 2,
      }}
    >
      <Button onClick={scrollToAbout} className="btn-gray">
        Learn More
      </Button>
    </motion.div>
  );
};

export default ButtonLearnMore;
