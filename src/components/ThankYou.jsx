import "./ThankYou.css";
import { motion } from "framer-motion";

export default function ThankYou() {
  return (
    <section className="thank-you">

      <motion.div
        className="thank-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="small-title">
          Thank You
        </p>

        <h2>
          We Can't Wait
          <br />
          To Celebrate With You
        </h2>

        <p className="message">
          Your love, support, and presence
          mean the world to us.
          We look forward to sharing
          this unforgettable day together.
        </p>

        <div className="divider"></div>

        <h3>
          Maryam
          <span>&</span>
          Ahmed
        </h3>

      </motion.div>

    </section>
  );
}