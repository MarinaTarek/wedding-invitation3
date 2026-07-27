import "./Invitation.css";
import { motion } from "framer-motion";

import Countdown from "./Countdown";
import Location from "./Location";
import ThankYou from "./ThankYou";

export default function Invitation() {
  return (
    <>
      <section className="invitation">

        <motion.div
          className="invitation-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Wedding Invitation</h2>

          <div className="names">
            Maryam <span>&</span> Ahmed
          </div>

          <p>
            Together with their families,
            request the pleasure of your company
            as they celebrate their marriage.
          </p>

          <div className="date">
            Saturday • 09 August 2026
          </div>

          <div className="venue">
            7:00 PM <br />
            Royal Hall, Cairo
          </div>

        </motion.div>

      </section>

      <Countdown />
      <Location />
      <ThankYou />
    </>
  );
}