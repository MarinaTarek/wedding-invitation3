import "./SaveDate.css";
import { motion } from "framer-motion";

export default function SaveDate({ onOpen }) {

  return (

    <section className="save-date">

      <motion.div
        className="save-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
        >
          Wedding Invitation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
        >
          Save the Date
        </motion.h2>

        <motion.h1
          className="couple"
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: .8 }}
        >
          Maryam

          <span>&</span>

          Ahmed
        </motion.h1>

        <motion.div
          className="date"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >

          <p>Saturday</p>

          <h3>09 August 2026</h3>

        </motion.div>

        <motion.button
          className="open-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={onOpen}
        >
          Open Invitation
        </motion.button>

      </motion.div>

    </section>

  );

}