import "./Splash.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Splash({ onFinish }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onFinish();
    }, 4200);

    return () => clearTimeout(timer);

  }, [onFinish]);

  return (

    <section className="intro">

      <motion.div
        className="gold-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: .5,
          duration: 1
        }}
      >
        Wedding Invitation
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.2,
          duration: 1
        }}
      >
        Maryam
        <span>&</span>
        Ahmed
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2
        }}
      >
        Together with our families
      </motion.p>

    </section>

  );
}