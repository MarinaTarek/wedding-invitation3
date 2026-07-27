import { motion } from "framer-motion";
import "../styles/Landing.css";

import wax from "../assets/images/wax.png";

function Landing({ onOpen }) {
  return (
    <motion.section
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <div className="content">

        <p className="small">
          Wedding Invitation
        </p>

        <h1>
          Maryam
          <span>&</span>
          Ahmed
        </h1>

        <motion.img
          src={wax}
          className="seal"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: .9 }}
          onClick={onOpen}
        />

        <p className="tap">
          Tap To Open
        </p>

      </div>

      <div className="envelope">

        <div className="cover"></div>

        <div className="left"></div>

        <div className="right"></div>

        <div className="bottom"></div>

      </div>

    </motion.section>
  );
}

export default Landing;