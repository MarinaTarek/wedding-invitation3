import "./Location.css";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <motion.section
      className="location"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="location-small">
        Join Us
      </p>

      <h2>
        Wedding Venue
      </h2>

      <div className="location-card">

        <h3>The Grand Palace</h3>

        <p>
          Saturday, 09 August 2026
        </p>

        <p>
          7:00 PM
        </p>

        <p>
          Cairo, Egypt
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
          className="map-btn"
        >
          Open in Google Maps
        </a>

      </div>

      <div className="flower flower1">🌸</div>
      <div className="flower flower2">🌿</div>
      <div className="flower flower3">🌸</div>
      <div className="flower flower4">🌿</div>

    </motion.section>
  );
}