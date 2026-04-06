import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div id="profile" className="profileBox">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.9,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <h2 className="text-4xl font-bold text-pink-500">
          RARA ANGELLICA <span className="text-purple-600">STEFANI PUTRI</span>
        </h2>
        <p>
          Building Fast, Scalable, Modern Web Solutions & Efficient workflow
        </p>
      </motion.div>
      <div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="w-50 sm:w-100"
          src="/foto-porto.jpeg"
          alt="Rara Angellica Stefani Putri"
        />
      </div>
    </div>
  );
};

export default Profile;
